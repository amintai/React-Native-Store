import axios from "axios";
import { useEffect, useState } from "react";

const useProductList = () => {

  type ProductProps = {
    productList: any,
    isLoading: boolean
  };

  const [{ productList,isLoading }, setState] = useState<ProductProps>({
    productList: [],
    isLoading: false
  });

  const handleFetchProducts = () => {
    setState((state) => ({
      ...state,
      isLoading: true
    }))
    axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
      const data = res.data;
      setState((state) => ({
        ...state,
        productList: data,
        isLoading: false
      }))
    })
  };

  useEffect(() => {
    handleFetchProducts();
  },[]);



  return [{ productList,isLoading }, {  }] as const
}

export default useProductList;