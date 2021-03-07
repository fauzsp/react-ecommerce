import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((item) => collections[item]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionIsLoading = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionIsRendered = createSelector([selectShop], (shop) =>
  !shop.collections ? true : false
);
