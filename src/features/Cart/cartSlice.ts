import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fakeStoreApi } from '../../services/api/base.api';
import Cart from '../../data/models/cart';
import { endpointCarts } from '../../services/endpoints/carts';

const initialState={
  isLoading: false,
  isSuccess: false,
  isError: false,
    carts:[]
}as CartsInitial;

interface CartsInitial{
  carts:Cart[],
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
}




export const fetchAsyncCarts:any = createAsyncThunk(
  "carts/fetchAsyncCarts",
  async () => {
    const {data} = await fakeStoreApi.get<[]>(endpointCarts);
    console.log('Todos Los Carts',data);
    return data;
  }
);

export const fetchSingleCart:any = createAsyncThunk(
  "cart/fetchSingleCart",
  async (id:number) => {
     const iden = id;
    const response = await fakeStoreApi.get<{}>(`${endpointCarts}/${iden}`)
    console.log('SingleCart',response.data);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCarts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncCarts.fulfilled, (state, action:PayloadAction<[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.carts=action.payload;
      })
      .addCase(fetchAsyncCarts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.carts = [];
      });
  },
});


export default cartSlice.reducer;