import { httpGet } from './httpService';
import ProductModel from '../models/Product';

const getProducts = () => {
  return httpGet<ProductModel[]>('/products');
};

const ProductService = {
  getProducts,
};

export default ProductService;
