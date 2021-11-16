import { httpGet } from './httpService';
import ProductModel from '../models/Product';
import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

const getCategories = (): Promise<AxiosResponse<string[]>> => {
  return httpGet<string[]>('/products/categories');
};

const getProductsByCategory = (
  category: string
): Promise<AxiosResponse<ProductModel[]>> => {
  return httpGet<ProductModel[]>('/products/category/' + category);
};

const getRandomNumber = (start: number, end: number): number => {
  return Math.round(start + Math.random() * (end - start));
};

const getProductsByCategoryMock = (): ProductModel[] => {
  const images = [
    'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  ];

  const productsMock = Array.from({ length: 10 }).map(() => {
    const product: ProductModel = {
      id: uuidv4(),
      title: 'Title ' + getRandomNumber(0, 100),
      category: 'Category ' + getRandomNumber(0, 100),
      description: 'description ' + getRandomNumber(0, 100),
      // https://picsum.photos/200/300 -- imi da aceeasi imagine pt toate obiectele
      image: images[getRandomNumber(0, images.length - 1)],
      price: getRandomNumber(0, 1000),
      rating: {
        rate: getRandomNumber(1, 5),
        count: getRandomNumber(1, 5),
      },
    };

    return product;
  });

  // const arr = Array(10)
  //   .fill(null)
  //   .map(() => {
  //     const prod: ProductModel = {
  //       id: uuidv4(),
  //       title: 'test',
  //       category: 'electronics',
  //       description: 'description test',
  //       image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  //       price: getRandomNumber(0, 1000),
  //       rating: {
  //         rate: getRandomNumber(0, 5),
  //         count: getRandomNumber(0, 5),
  //       },
  //     };

  //     return prod;
  //   });

  // console.log('productsMock', productsMock);

  return productsMock;
};

const CategoryService = {
  getCategories,
  getProductsByCategory,
  getProductsByCategoryMock,
};

export default CategoryService;
