import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdcUq9kvfsNKFbK8yu-JRWGqAgN5bz3Ak",
    authDomain: "netflix-clone-58cc0.firebaseapp.com",
    projectId: "netflix-clone-58cc0",
    storageBucket: "netflix-clone-58cc0.appspot.com",
    messagingSenderId: "766143629000",
    appId: "1:766143629000:web:037ee0d7c444b920d887fd",
    measurementId: "G-QHEYMVDMQK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;