import firebase from "firebase/compat/app";
firebase.initializeApp({
  apiKey: "AIzaSyD00vU5F9tBhstPM7YAYtzHYCpuoVN_4yM",
  authDomain: "baskakasko.firebaseapp.com",
  databaseURL: "gs://baskakasko.appspot.com",
  projectId: "baskakasko",
  storageBucket: "baskakasko.appspot.com",
  messagingSenderId: "AIzaSyDYwLsAYolua2CQFcX33RJG1Wt-6P-FTQ0",
});

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
