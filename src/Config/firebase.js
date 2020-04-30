import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUWyMdHWj9eh9aayKtVRpyRGDXv3rkRjE",
    authDomain: "react-fd6cf.firebaseapp.com",
    databaseURL: "https://react-fd6cf.firebaseio.com",
    projectId: "react-fd6cf",
    storageBucket: "react-fd6cf.appspot.com",
    messagingSenderId: "393158839932",
    appId: "1:393158839932:web:4d042aae4ab703f46903f9",
    measurementId: "G-D2NC3YXLPE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  export default firebase;