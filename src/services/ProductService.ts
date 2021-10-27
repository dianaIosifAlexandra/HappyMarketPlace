import { httpGet } from './httpService';
import ProductModel from '../models/Product';

const getProducts = (productsNumber: string) => {
  return httpGet<ProductModel[]>('/products?limit=' + productsNumber);
};

const ProductService = {
  getProducts,
};

export default ProductService;
