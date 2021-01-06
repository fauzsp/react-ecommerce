import { createSelector } from "reselect";

const selectUser = (state) => state.user;
const selectCart = (state) => state.cart;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectShowHeader = createSelector(
  [selectUser],
  (user) => user.showHeader
);

export const selecthidden = createSelector([selectCart], (cart) => cart.hidden);
