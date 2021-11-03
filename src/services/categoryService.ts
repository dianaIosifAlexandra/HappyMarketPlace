import { httpGet } from './httpService';

const getCategories = () => {
  return httpGet<string[]>('/products/categories');
};

const getProductsByCategory = (category: string) => {
  return httpGet<string[]>('/products/category/' + category);
};

const CategoryService = {
  getCategories,
  getProductsByCategory,
};

export default CategoryService;
