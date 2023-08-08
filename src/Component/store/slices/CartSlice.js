import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // console.log(action.payload)
            const { quantity, product } = action.payload
            // console.log('quantity:' + quantity)
            // console.log('product:' + action.payload)
            // console.log('product:' + product)
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === product.id
            );
            // console.log('itemIndex' + itemIndex)
            const tempItem = {
                quantity,
                id: product.id,
                title: product.title,
                image: product.image,
                category: product.category,
                price: product.price,
                rate: product.rating.rate
            }
            // item exist 
            if (itemIndex >= 0) {
                state.cartItems[itemIndex] = tempItem;
                toast.success(`${tempItem.title} added to cart, Successfully!`, { position: "top-center", theme: 'dark' })
            }
            // item absent, crate tem object map values and push 
            else {
                state.cartItems.push(tempItem);
                toast.success(`${tempItem.title} added to cart, Successfully!`, { position: "top-center", theme: 'dark' })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            toast.success(`${action.payload.title} is Removed, Successfully!`, { position: "top-center", theme: 'dark' })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cartItems[itemIndex].quantity += 1;
            toast.info("Increased Product Quantity!", { position: "top-center", theme: 'dark' })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            }
            else if (state.cartItems[itemIndex].quantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
            }
            toast.info("Decreased Product Quantity!", { position: "top-center", theme: 'dark' })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart(state, action) {
            state.cartItems = [];
            toast.success("Cart is Cleared, Successfully!", { position: "top-center", theme: 'dark' })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            // total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    }
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, increaseCart } = cartSlice.actions;

export { cartSlice };