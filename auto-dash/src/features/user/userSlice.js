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

export default userSlice.reducer;
