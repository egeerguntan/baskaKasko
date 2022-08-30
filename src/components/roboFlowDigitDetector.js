import { manipulateAsync } from "expo-image-manipulator";

const labels = {
  0: "-",
  1: ".",
  2: "0",
  3: "1",
  4: "2",
  5: "3",
  6: "4",
  7: "5",
  8: "6",
  9: "7",
  10: "8",
};
const colabFlaskAPIURL = "http://2922-35-203-189-141.ngrok.io" + "/predict";
const roboFlowDigitDetector = async (sourceURI, x, y, w, h) => {
  let croppedURI = await manipulateAsync(sourceURI, [
    {
      crop: {
        height: h,
        width: w,
        originY: y - h / 2,
        originX: x - w / 2,
      },
    },
  ]);
  let localUri = croppedURI.uri;
  let filename = localUri.split("/").pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append("image", { uri: localUri, name: filename, type });
  const response = await fetch(colabFlaskAPIURL, {
    method: "POST",
    body: formData,
  });

  const responseJson = await response.json();
  if (responseJson.text) {
    let text = responseJson.text;
    let textArray = text.split("");
    textArray.map((char, index) => {
      if (char === "S") {
        textArray[index] = "5";
      }
    });
    text = textArray.join("");
    return text;
  } else {
    return null;
  }
  // .then((response) => response.json())
  // .then((responseJson) => {
  //   console.log("Server response is", responseJson);
  //   if (responseJson.text) {
  //     alert(responseJson.text);
  //   } else {
  //     alert("Unable to detect digit");
  //   }

  //
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
};

export default roboFlowDigitDetector;
