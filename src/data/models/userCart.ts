import ProductCuantity from "./productCuantity";

interface UserCart {
  id: number;
  userId: number;
  date: string;
  products: ProductCuantity[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export default UserCart;
