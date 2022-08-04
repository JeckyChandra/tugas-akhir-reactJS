import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0qeMGMWlSLPvCtqbl3wQbC9iPTouQ5rI",
  authDomain: "note-a8472.firebaseapp.com",
  databaseURL: "https://note-a8472.firebaseio.com",
  projectId: "note-a8472",
  storageBucket: "note-a8472.appspot.com",
  messagingSenderId: "124778528751",
  appId: "1:124778528751:web:2b3c7b6bdf4add947e001a",
  measurementId: "G-6YT5VGN626",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
