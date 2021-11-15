import { httpGet } from './httpService';
import ProductModel from '../models/Product';
import { AxiosResponse } from 'axios';

const getCategories = (): Promise<AxiosResponse<string[]>> => {
  return httpGet<string[]>('/products/categories');
};

const getProductsByCategory = (
  category: string
): Promise<AxiosResponse<ProductModel[]>> => {
  return httpGet<ProductModel[]>('/products/category/' + category);
};

const getProductsByCategoryMock = (): ProductModel[] => {
  // o functie care imi da random un nr inte X si Y pt a-mi genera numerele pt price: 90,     rating: {       rate: 4,       count: 2,     },
  //pt id sa folosesc un UID
  //un array de imgaes mockImagesArray, si ma folosesc de functia de random pt am-i da o imagine intre 0 si array.legth
  //title, description si category: 'test text' + un nr random
  const product: ProductModel = {
    id: Math.random().toString(),
    title: 'test',
    category: 'electronics',
    description: 'description test',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    price: 90,
    rating: {
      rate: 4,
      count: 2,
    },
  };

  const productsMock = Array.from({ length: 10 }, () => product);

  return productsMock;
};

const CategoryService = {
  getCategories,
  getProductsByCategory,
  getProductsByCategoryMock,
};

export default CategoryService;
