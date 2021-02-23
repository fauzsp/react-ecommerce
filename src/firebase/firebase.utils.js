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
  if (!userAuth) return console.log("user not exist");
  const userData = firestore.doc(`users/${userAuth.uid}`);
  const snapShotData = await userData.get();
  if (!snapShotData.exists) {
    const { email, displayName } = userAuth;
    const createDate = new Date();
    try {
      await userData.set({
        displayName,
        email,
        createDate,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userData;
};

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
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
