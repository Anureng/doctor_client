import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1dUIbvBdNAKbnsfZS3xkZTNmvXmGhQW4",
  authDomain: "doctor-appointment-syste-7cf16.firebaseapp.com",
  projectId: "doctor-appointment-syste-7cf16",
  storageBucket: "doctor-appointment-syste-7cf16.appspot.com",
  messagingSenderId: "851281102752",
  appId: "1:851281102752:web:7f1733dddd278ac3abc6c5",
  measurementId: "G-N0DWCSQ8EH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {
    auth,
    storage,
};