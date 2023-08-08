import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     users: []
// }
// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         submitRegister(state, action) {
//             console.log(action.payload)
//             const { firstName, lastName, emailAddress, password } = action.payload;
            
//             const tempUser = {
//                 firstName : firstName,
//                 lastName : lastName,
//                 emailAddress : emailAddress,
//                 password : password
//             }
//             console.log("tempUser:"+ tempUser);
//         }
//     }
// })

// authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      localStorage.setItem('Users', JSON.stringify(state.user));
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
// export default authSlice.reducer;

// export const { submitRegister } = userSlice.actions;

export { userSlice };