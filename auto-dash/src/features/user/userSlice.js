import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  uid: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setisLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUID: (state, action) => {
      state.uid = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUID, setisLoggedIn } = userSlice.actions;
export const getUserStatus = (state) => state.user.isLoggedIn;
export const getUID = (state) => state.user.uid;
export default userSlice.reducer;
