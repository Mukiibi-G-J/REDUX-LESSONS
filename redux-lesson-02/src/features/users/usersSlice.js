import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Joseph Mukiibi" },
  { id: 1, name: "kakooza Peter" },
  { id: 2, name: "Josephine Nabatazi" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUser = (state) => state.users;

export default usersSlice.reducer;
