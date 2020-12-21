import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const config = {
  apiKey: "AIzaSyAI6BBLFYtBrqa7vt1xTPe7m9feKZ46fQo",
  authDomain: "ecommerce-db-1446a.firebaseapp.com",
  projectId: "ecommerce-db-1446a",
  storageBucket: "ecommerce-db-1446a.appspot.com",
  messagingSenderId: "729205954296",
  appId: "1:729205954296:web:ab8d55f51070ee7faacd0d",
  measurementId: "G-BQT8YXTXW2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const checkUserAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return console.log(userAuth, "user not exists");
  const userData = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userData.get();
  if (!snapShot.exists) {
    console.log(snapShot, "snapshot");
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await userData.set({
        displayName,
        email,
        createDate,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err.message, "error message");
    }
  }
  return userData;
};

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
FacebookProvider.setCustomParameters({
  display: "popup",
});

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(FacebookProvider);

export default firebase;
