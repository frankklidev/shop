import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/Product/productSlice';
import userReducer from '../features/User/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import authReducer from '../features/Auth/authSlice';


const store = configureStore({
  reducer: {
    products:productReducer,
    users:userReducer,
    cart:cartReducer,
    authToken:authReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;