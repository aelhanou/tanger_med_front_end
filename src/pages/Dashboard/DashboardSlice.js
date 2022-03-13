import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "Hooks/useFetch";

const { get, post } = useFetch;

export const getUser = createAsyncThunk(
  "Dashboard/getUser",
  async (id) => {
    let data = await get(`getUserById/${id}`);
    return data
  }
);

// export const addChambre = createAsyncThunk(
//   "chambre/addChambre",
//   async (body) => {
//     let res = await post("addChambre", body);
//     // dispatch(getAllChambres())
//     return await res.json();
//   }
// );

const initialState = {
  user: {},
};

export const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    // [addChambre.fulfilled]: (state, { payload }) => {
    //   state.allChambares.push(payload);
    // },
  },
});

// export const { getUser } = DashboardSlice.actions;
export default DashboardSlice.reducer;
