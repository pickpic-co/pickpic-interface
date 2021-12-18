import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS
  } from "../actions/type";

  const initialState = [];

function ProductReducer(PRODUCTS = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return [...PRODUCTS, payload];

    case RETRIEVE_PRODUCTS:
      return payload;

    case UPDATE_PRODUCT:
      return PRODUCTS.map((PRODUCT) => {
        if (PRODUCT.id === payload.id) {
          return {
            ...PRODUCT,
            ...payload,
          };
        } else {
          return PRODUCT;
        }
      });

    case DELETE_PRODUCT:
      return PRODUCTS.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_PRODUCTS:
      return [];

    default:
      return PRODUCTS;
  }
};

export default ProductReducer;