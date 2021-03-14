import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFpqfFUuZLWrB7U1ZM-S3lQjABsoRZv-c",
    authDomain: "crwn-db-1aa2d.firebaseapp.com",
    projectId: "crwn-db-1aa2d",
    storageBucket: "crwn-db-1aa2d.appspot.com",
    messagingSenderId: "542912628039",
    appId: "1:542912628039:web:fdf483d3d2beed816ef862",
    measurementId: "G-8HBVWMRXD9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
