import { httpGet } from './httpService';
import ProductModel from '../models/Product';

const getCategories = () => {
  return httpGet<string[]>('/products/categories');
};

const getProductsByCategory = (category: string) => {
  return httpGet<ProductModel[]>('/products/category/' + category);
};

const getProductsByCategoryMock = (): ProductModel[] => {
  //genereaza un newProductModel de X ori
  //la fiecare apel, trebuie sa returnez alea X produse
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

  const productsMock = Array.from({ length: 10 }, (value) => (value = product));

  // console.log('productsMock: ', productsMock);

  return productsMock;
};

const CategoryService = {
  getCategories,
  getProductsByCategory,
  getProductsByCategoryMock,
};

export default CategoryService;
