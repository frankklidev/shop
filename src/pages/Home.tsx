import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchAsyncProducts, fetchSingleProduct } from '../features/Product/productSlice';
import Card from './Card';
import { fetchAsyncCarts } from '../features/Cart/cartSlice';
import { fetchAsyncToken } from '../features/Auth/authSlice';

const Home:React.FC = () => {
  const {products} = useAppSelector(state => state.products);
  const authorized = useAppSelector(state =>state.authToken);
  const {carts} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const [query,setQuery] = useState("");

  console.log(authorized);
  
   const username= "mor_2314"
   const password= "83r5^_"



  useEffect(() => {
   dispatch(fetchAsyncProducts());
   dispatch(fetchAsyncCarts());
   dispatch(fetchAsyncToken());
  }, []);
   
  return (
    <>
    <input type="text" placeholder='Search for products...'onChange={(e)=>setQuery(e.target.value)} />
      {
        products.filter(producto=>producto.title.toLowerCase().includes(query)).map(product=>{
          return <Card key={product.id} {...product}/>
        })
      }
    </>
  )
}

export default Home