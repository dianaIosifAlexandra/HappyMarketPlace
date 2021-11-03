import { httpGet } from './httpService';

const getCategories = () => {
  return httpGet<string[]>('/products/categories');
};

const CategoryService = {
  getCategories,
};

export default CategoryService;
