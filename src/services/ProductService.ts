import http from '../api/apiServices';
import ProductModel from '../models/Product';

const getProducts = () => {
  return http.get<ProductModel[]>('/products');
};

const ProductService = {
  getProducts,
};

export default ProductService;
