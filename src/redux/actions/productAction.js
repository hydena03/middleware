function getProducts(searchQuery) {
    return async (dispatch, getState) => {
      try {
        let url = `https://my-json-server.typicode.com/hydena03/noona-shop/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: data });
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: "GET_PRODUCT_FAILURE", payload: error });
      }
    };
  }
  
  export const productAction = { getProducts };
  