import {
  firestore,
  convertSnapshotToMap,
} from "../../firebase/firebase.utils.js";
export const fetchCollectionStart = () => ({
  type: "FETCH_COLLECTIONS_START",
});

export const fetchCollectionSuccess = (collections) => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collections,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionref = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionref
      .get()
      .then((snapshot) => {
        const collectionsMap = convertSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionError(error.message)));
  };
};

export const fetchCollectionError = (errorMessage) => ({
  type: "FETCH_COLLECTIONS_ERROR",
  payload: errorMessage,
});
