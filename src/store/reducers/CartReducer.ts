import { CartActions, CartActionTypes } from './../actions/CartActions';
import { CartState } from '../types/types';
import CartProduct from '../../models/CartProduct';

const initialState: CartState = {
  addedProducts: [],
  total: 0,
};

//refactor: sa tranform for-ul de la calculateTotalPrice in array.reduce
const calculateTotalPrice = (productsList: CartProduct[]) => {
  let actualTotal = 0;

  for (let index = 0; index < productsList.length; index++) {
    const element = productsList[index];
    actualTotal += element.quantity * element.price;
  }

  return actualTotal;
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

        return {
          ...state,
          addedProducts: [...state.addedProducts],
        };
      }

      console.error('CartReducr - ChangeQuantity - Product not found');

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
