import axios from 'axios';
import LoginResponseModel from '../models/LooginResponse';
import ProductModel from '../models/Product';

const baseUrl = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-type': 'application/json',
  },
});

const getProducts = () => {
  return baseUrl.get<ProductModel[]>('/products');
};

const login = (username: string, password: string) => {
  return baseUrl.post<LoginResponseModel>('/auth/login', {
    username,
    password,
  });
};

// un obiect care sa returneze metodele de aici din httpService
export const httpService = {
  getProducts,
  login,
};
