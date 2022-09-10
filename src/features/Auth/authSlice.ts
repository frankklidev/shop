import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fakeStoreApi } from "../../services/api/base.api";
import { endpointLogin } from "../../services/endpoints/login";


const initialState = {
    nombre: '',
    password: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
} as AuthLogin;

interface AuthLogin {
    nombre: string,
    password: string,
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const fetchAsyncToken = createAsyncThunk(
  "auth/fetchAsyncToken",
  async (nombre, password) => {
    const response = await fakeStoreApi.post<any>(
      endpointLogin, {
        nombre,
        password
      })
    console.log("Pasando objetos",response.data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAsyncToken.fulfilled,
        (state, action: PayloadAction<AuthLogin>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.nombre=action.payload.nombre
          state.password=action.payload.password
        }
      )
      .addCase(fetchAsyncToken.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.nombre='';
        state.password='';
      });
  },
});

export default authSlice.reducer;
