import firebase from "firebase/app";
//where we store images
import "firebase/storage";
//database
import "firebase/firestore";

//firebase config obj
const firebaseConfig = {
  apiKey: "AIzaSyAEH2T8OM5Qrj5lWcsbgkdOLTQtxNq7oR0",
  authDomain: "instagram-clone-61bfe.firebaseapp.com",
  projectId: "instagram-clone-61bfe",
  storageBucket: "instagram-clone-61bfe.appspot.com",
  messagingSenderId: "660191214570",
  appId: "1:660191214570:web:9e1f880de5a51ab3101093",
};

//initialize Firebase, connect to firebase backend
firebase.initializeApp(firebaseConfig);
//initializing storage service to store images..
const projectStorage = firebase.storage();
//to interact with firestore database
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
