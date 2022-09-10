import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fakeStoreApi } from '../../services/api/base.api';
import {endpointUsers } from '../../services/endpoints/users';
import User from '../../data/models/user';


const initialState={
    users:[],
    isLoading:false ,
    isSuccess: false,
    isError: false,
}as Users;

interface Users{
    users:User[],
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
}


export const fetchAsyncUsers = createAsyncThunk(
  "userCart/fetchAsyncUserCart",
  async () => {
   const response = await fakeStoreApi.get<Users>(`${endpointUsers}`)
   console.log('fetchAsyncUsers',response.data);
   return response.data;
 }
);



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAsyncUsers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchAsyncUsers.fulfilled, (state, action:PayloadAction<Users>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.users=action.payload.users;
        })
        .addCase(fetchAsyncUsers.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.users = [];
        });
    },
  });


export default userSlice.reducer;