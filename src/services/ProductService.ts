import { httpService } from '../api/apiServices';

const getProducts = () => {
  return httpService.getProducts();
};

const ProductService = {
  getProducts,
};

export default ProductService;
