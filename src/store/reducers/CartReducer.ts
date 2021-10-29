import { CartActions, CartActionTypes } from './../actions/CartActions';
import React from 'react';
import { CartState } from '../types/types';
import CartProduct from '../../models/CartProduct';

const initialState: CartState = {
  addedProducts: [],
  total: 0,
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

        return {
          ...state,
          addedProducts: [...state.addedProducts],
        };
      } else {
        return {
          ...state,
          addedProducts: [...state.addedProducts, action.payload.product],
        };
      }
    }

    case CartActionTypes.GetTotal: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default CartReducer;
