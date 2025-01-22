import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

export const lawyerSlice = createSlice({
  name: "lawyers",
  initialState: {
    data,
  },
  reducers: {
    bookAppointment: (state, action) => {
      state.data[action.payload.id].appointments.push(action.payload.time);
    },
  },
});

export const { bookAppointment } = lawyerSlice.actions;

export default lawyerSlice.reducer;
