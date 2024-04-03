import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    id: '',
    password: '',
    authenticate: false
  };
  
  // function authenticateReducer(state = initialState, action) {
  //   const { type, payload } = action;
  //   switch (type) {
  //     case "LOGIN_SUCCESS":
  //       console.log("login success reducer");
  //       return {
  //         ...state,
  //         id: payload.id,
  //         password: payload.password,
  //         authenticate: true
  //       };
  //     default:
  //       return { ...state };
  //   }
  // }
  
  // export default authenticateReducer;
  
  const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
      getAllProduct(state,action){
        state.productList= action.payload.data
      },
      getSingleProduct(state,action){
        state.selectedItem = action.payload.data;
      }
      }
  })

  export const productActions = productSlice.actions
  export default productSlice.reducer;