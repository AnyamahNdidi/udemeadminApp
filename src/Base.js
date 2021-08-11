import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBBQ9f4ytI1lcQIEhU2dMWKSEpqTwm5rVI",
  authDomain: "udemekitchen.firebaseapp.com",
  projectId: "udemekitchen",
  storageBucket: "udemekitchen.appspot.com",
  messagingSenderId: "781589858838",
  appId: "1:781589858838:web:c5e10ff1d22178d4cb0337",


  // apiKey: "AIzaSyBchCVbKo5LrCe8UehoqMDbq3l4Vj7md2Q",
  // authDomain: "testreg-bc019.firebaseapp.com",
  // projectId: "testreg-bc019",
  // storageBucket: "testreg-bc019.appspot.com",
  // messagingSenderId: "558674655357",
  // appId: "1:558674655357:web:a3f86b0f5e3d420bba5914"
});
