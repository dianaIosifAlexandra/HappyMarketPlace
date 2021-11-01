import { CartActions, CartActionTypes } from './../actions/CartActions';
import { CartState } from '../types/types';
import CartProduct from '../../models/CartProduct';

const initialState: CartState = {
  addedProducts: [],
  total: 0,
};

const calculateTotalPrice = (productsList: CartProduct[]) => {
  return productsList.reduce(
    (total: number, product: CartProduct) =>
      total + product.quantity * product.price,
    0
  );
};

const CartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case CartActionTypes.AddToCart: {
      const index: number = state.addedProducts.findIndex(
        (item: CartProduct) => item.id === action.payload.product.id
      );

      if (index != -1) {
        const existingProduct = state.addedProducts[index];
        existingProduct.quantity++;
        state.addedProducts.splice(index, 1, {
          ...existingProduct,
        });

        const newAddedProduscts = [...state.addedProducts];

        return {
          ...state,
          addedProducts: newAddedProduscts,
          total: calculateTotalPrice(newAddedProduscts),
        };
      } else {
        const newAddedProduscts = [
          ...state.addedProducts,
          action.payload.product,
        ];

        return {
          ...state,
          addedProducts: newAddedProduscts,
          total: calculateTotalPrice(newAddedProduscts),
        };
      }
    }

    case CartActionTypes.ChangeQuantity: {
      const { id, quantity } = action.payload;

      const index: number = state.addedProducts.findIndex(
        (item: CartProduct) => item.id === id
      );

      if (index != -1) {
        const existingProduct = state.addedProducts[index];
        existingProduct.quantity = quantity;
        state.addedProducts.splice(index, 1, {
          ...existingProduct,
        });

        const newAddedProduscts = [...state.addedProducts];

        return {
          ...state,
          addedProducts: [...state.addedProducts],
          total: calculateTotalPrice(newAddedProduscts),
        };
      }

      console.error('CartReducer - ChangeQuantity - Product not found');

      return {
        ...state,
      };
    }

    case CartActionTypes.IncreaseQuantity: {
      const index: number = state.addedProducts.findIndex(
        (item: CartProduct) => item.id === action.payload.id
      );

      if (index != -1) {
        const existingProduct = state.addedProducts[index];
        existingProduct.quantity++;
        state.addedProducts.splice(index, 1, {
          ...existingProduct,
        });

        const newAddedProduscts = [...state.addedProducts];

        return {
          ...state,
          addedProducts: newAddedProduscts,
          total: calculateTotalPrice(newAddedProduscts),
        };
      }

      console.error('CartReducer - IncreaseQuantity - Product not found');

      return { ...state };
    }

    case CartActionTypes.DecreaseQuantity: {
      const index: number = state.addedProducts.findIndex(
        (item: CartProduct) => item.id === action.payload.id
      );

      if (index != -1) {
        const existingProduct = state.addedProducts[index];
        existingProduct.quantity--;
        state.addedProducts.splice(index, 1, {
          ...existingProduct,
        });

        const newAddedProduscts = [...state.addedProducts];

        return {
          ...state,
          addedProducts: newAddedProduscts,
          total: calculateTotalPrice(newAddedProduscts),
        };
      }

      console.error('CartReducer - DecreaseQuantity - Product not found');

      return { ...state };
    }

    case CartActionTypes.DeleteProduct: {
      const index: number = state.addedProducts.findIndex(
        (item: CartProduct) => item.id === action.payload.id
      );

      if (index != -1) {
        state.addedProducts.splice(index, 1);
        const newAddedProduscts = [...state.addedProducts];

        return {
          ...state,
          addedProducts: newAddedProduscts,
          total: calculateTotalPrice(newAddedProduscts),
        };
      }

      return { ...state };
    }

    default:
      return state;
  }
};

export default CartReducer;
