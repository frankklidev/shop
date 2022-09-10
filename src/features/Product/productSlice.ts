import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fakeStoreApi } from '../../services/api/base.api';
import Producto from '../../data/models/products';
import { endpointAllProduct, endpointSingleProduct } from '../../services/endpoints/product';


const initialState={
    products:[],
    isLoading:false ,
    isSuccess: false,
    isError: false,
}as Products;

interface Products{
    products:Producto[],
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
}



export const fetchAsyncProducts:any = createAsyncThunk(
  "products/fetchAsyncProduct",
  async () => {
    const {data} = await fakeStoreApi.get<Producto[]>(endpointAllProduct);
    console.log(data);
    return data;
  }
);

export const fetchSingleProduct:any = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id:number) => {
     const iden = id;
    const response = await fakeStoreApi.get<Producto>(`${endpointSingleProduct}/${iden}`)
    console.log('SINGLEPRODUCT',response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action:PayloadAction<[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(fetchAsyncProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.products = [];
      });
  },
});


export default productSlice.reducer;