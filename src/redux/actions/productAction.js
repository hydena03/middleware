import { productActions } from "../reducers/productSlice";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/legobitna/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
