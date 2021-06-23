import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import loadInsult from "./fetchInsult";

export interface InsultState {
  value: string;
  status: "idle" | "loading" | "failed";
}

const initialState: InsultState = {
  value: "",
  status: "idle",
};

export const loadInsultAsync = createAsyncThunk("insult/fetch", async () => {
  const respond = await loadInsult();
  return respond;
});

export const insultSlice = createSlice({
  name: "insult",
  initialState,
  reducers: {
    fetchInsult: (state) => {
      state.value = loadInsultAsync as string;
    },
  },
});

export const insultValue = (state: RootState) => state.insult.value;

export const { fetchInsult } = insultSlice.actions;

export default insultSlice.reducer;
