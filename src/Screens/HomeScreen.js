import {
  Button,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { manipulateAsync } from "expo-image-manipulator";
import roboFlowDigitDetector from "../Components/roboFlowDigitDetector";

export default function App() {
  const [image, setImage] = React.useState(null);
  const [detectedText, setDetectedText] = React.useState(null);
  const [status, setStatus] = React.useState(false);
  const [predictions, setPredictions] = React.useState({
    status: false,
    predictions: [],
    image: {
      height: null,
      width: null,
    },
  });
  const [boundingBox, setBoundingBox] = React.useState({
    status: false,
    class: "",
    confidence: "",
    x: null,
    y: null,
    width: null,
    height: null,
  });

  const handleImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
      base64: true,
    });
    if (!result.cancelled) {
      setStatus(true);
      let tempURI = await manipulateAsync(result.uri, [
        {
          resize: {
            width: 300,
            height: 300,
          },
        },
      ]);

      let localUri = tempURI.uri;
      let filename = localUri.split("/").pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();
      formData.append("image", { uri: localUri, name: filename, type });
      setImage({
        uri: localUri,
        name: filename,
        type: type,
        width: 300,
        height: 300,
      });
      const response = await fetch(
        `https://detect.roboflow.com/odometerdetector/3?api_key=aPTPexp7q9rDTyxs7I4e`,
        {
          method: "POST",
          body: formData,
        }
      );

      const responseJson = await response.json();
      if (responseJson.predictions.length > 0) {
        setPredictions({
          status: true,
          predictions: responseJson.predictions,
          image: {
            height: responseJson.image.height,
            width: responseJson.image.width,
          },
        });

        setBoundingBox({
          status: true,
          class: "Odometer",
          confidence: responseJson.predictions[0].confidence,
          x: responseJson.predictions[0].x,
          y: responseJson.predictions[0].y,
          width: responseJson.predictions[0].width + 1,
          height: responseJson.predictions[0].height + 1,
        });
      } else {
        alert("No digits detected");
        return;
      }

      const detectedText = async () => {
        const detectedText = await roboFlowDigitDetector(
          localUri,
          responseJson.predictions[0].x,
          responseJson.predictions[0].y,
          responseJson.predictions[0].width,
          responseJson.predictions[0].height
        );

        if (detectedText !== null) {
          alert(`Detected text: ${detectedText}`);
          setStatus(false);
        } else {
          alert("No text detected");
          setStatus(false);
        }
      };

      detectedText();
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   console.log("Server response is", responseJson);
      //   if (responseJson.predictions.length > 0) {
      //     setPredictions({
      //       status: true,
      //       predictions: responseJson.predictions,
      //       image: {
      //         height: responseJson.image.height,
      //         width: responseJson.image.width,
      //       },
      //     });

      //     setBoundingBox({
      //       status: true,
      //       class: "Odometer",
      //       confidence: responseJson.predictions[0].confidence,
      //       x: responseJson.predictions[0].x,
      //       y: responseJson.predictions[0].y,
      //       width: responseJson.predictions[0].width,
      //       height: responseJson.predictions[0].height,
      //     });
      //     const detectedText = roboFlowDigitDetector(
      //       localUri,
      //       responseJson.predictions[0].x,
      //       responseJson.predictions[0].y,
      //       responseJson.predictions[0].width,
      //       responseJson.predictions[0].height
      //     );

      //     if (detectedText !== null) {
      //       alert(`Detected text: ${detectedText}`);
      //       setStatus(false);
      //     } else {
      //       alert("No text detected");
      //       setStatus(false);
      //     }
      //   } else {
      //     setStatus(false);
      //     alert("No odometer detected");
      //   }
      // });
    }
  };

  const checkStates = () => {
    if (predictions.status) {
      return (
        <View>
          <Image
            source={{ uri: image.uri }}
            style={{
              width: 300,
              height: 300,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: boundingBox.y - boundingBox.height / 2,
              left: boundingBox.x - boundingBox.width / 2,
              width: boundingBox.width,
              height: boundingBox.height,
              zIndex: 1,
              borderWidth: 2,
              borderColor: "green",
            }}
          />
        </View>
      );
    } else if (image) {
      return (
        <View style={{}}>
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        position: "relative",
      }}
    >
      {checkStates()}
      <View
        style={{
          flexDirection: "column",
        }}
      >
        {status ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button
              title="Pick an image"
              style={styles.buttonUpload}
              onPress={handleImage}
            />
            <Button
              title="Reset"
              style={styles.buttonUpload}
              onPress={() => {
                setImage(null);
                setStatus(false);
                setPredictions({
                  status: false,
                  predictions: [],
                  image: {
                    height: null,
                    width: null,
                  },
                });
                setBoundingBox({
                  status: false,
                  class: "",
                  confidence: "",
                  x: null,
                  y: null,
                  width: null,
                  height: null,
                });
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonUpload: {
    backgroundColor: "#00bcd4",
    padding: 10,
  },
});
