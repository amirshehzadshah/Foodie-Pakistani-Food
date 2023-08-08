import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    product: {},
    statusproduct: null
}

export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async () => {
        // const res = await axios.get('https://fakestoreapi.com/products')
        const res = await axios.get('https://express-api-orpin.vercel.app/products')
        // console.log(res)
        return res?.data
    }
)

export const singleProduct = createAsyncThunk(
    'products/singleProduct',
    async (id) => {
        // console.log('singleProduct: '+id)
        // const resp = await axios.get('https://fakestoreapi.com/products/' + id)
        try {
            const resp = await axios.get('https://express-api-orpin.vercel.app/products/' + id)
            console.log('result in api call ')
            console.log(resp?.data)
            return resp?.data
        } catch (e) {
            console.log(e);
        }
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // addToCart(state,action){}
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'pending'
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [singleProduct.pending]: (state, action) => {
            state.statusproduct = 'pending'
        },
        [singleProduct.fulfilled]: (state, action) => {
            debugger;
            state.statusproduct = 'success'
            console.log(action.payload)
            state.product = action.payload
        },
        [singleProduct.rejected]: (state, action) => {
            state.statusproduct = 'rejected'
        }
    }
});

export { productsSlice };