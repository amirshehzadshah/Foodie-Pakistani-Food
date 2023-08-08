import { configureStore } from "@reduxjs/toolkit";
import { productsFetch, productsSlice } from "./slices/ProductSlice";
import { cartSlice, getTotals } from "./slices/CartSlice";
import { userSlice } from "./slices/UserSlice";


const store = configureStore({
    reducer : {
        products : productsSlice.reducer,
        cart : cartSlice.reducer,
        users : userSlice.reducer
    }
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
// store.dispatch(submitRegister());

export default store;