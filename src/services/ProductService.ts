import { httpGet } from './httpService';
import ProductModel from '../models/Product';
import { AxiosResponse } from 'axios';

const getProducts = (
  productsNumber: string
): Promise<AxiosResponse<ProductModel[]>> => {
  return httpGet<ProductModel[]>('/products?limit=' + productsNumber);
};

const ProductService = {
  getProducts,
};

export default ProductService;
