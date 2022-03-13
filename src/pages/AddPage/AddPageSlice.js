import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "Hooks/useFetch";

const { get, post } = useFetch;

// export const getUser = createAsyncThunk(
//   "Dashboard/getUser",
//   async (id) => {
//     let data = await get(`getUserById/${id}`);
//     return data
//   }
// );

export const Add = createAsyncThunk(
  "addPage/add",
  async (body) => {
    let res = await post(body[0], body[1]);
    return await res.json();
  }
);

const initialState = {
  category: {},
};

export const AddPageSlice = createSlice({
  name: "AddPage",
  initialState,
  reducers: {
  },
  extraReducers: {
    // [getUser.fulfilled]: (state, { payload }) => {
    //   state.user = payload;
    // },
    [Add.fulfilled]: (state, { payload }) => {
      state.category.push(payload);
    },
  },
});

// export const { getUser } = AddPageSlice.actions;
export default AddPageSlice.reducer;
