// import { StorageKey, getFromLocalStorage } from '../services/StorageService';

// const getValue = (): string => {
//   const category = getFromLocalStorage(StorageKey.Category);

//   if (category) {
//     return category;
//   }

//   return '';
// };

export enum Routes {
  products = '/',
  login = '/login',
  admin = '/admin',
  cart = '/cart',
  logout = '/logout',
  categories = '/categories',
  // productsInCategories = getValue(),
  productsInCategories = '/x',
}
