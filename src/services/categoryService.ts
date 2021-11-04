import { httpGet } from './httpService';
import ProductModel from '../models/Product';

const getCategories = () => {
  return httpGet<string[]>('/products/categories');
};

const getProductsByCategory = (category: string) => {
  return httpGet<ProductModel[]>('/products/category/' + category);
};

const CategoryService = {
  getCategories,
  getProductsByCategory,
};

export default CategoryService;
