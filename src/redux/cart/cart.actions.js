export const ToggleCartHidden = {
  type: "TOGGLE_CART_HIDDEN",
};

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeButton = (item) => ({
  type: "REMOVE_BUTTON",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});
