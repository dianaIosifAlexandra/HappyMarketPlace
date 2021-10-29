import CartProduct from '../../models/CartProduct';

export enum CartActionTypes {
  AddToCart = 'CART--ADD-TO-CART-SUCCES',
  GetTotal = 'CART--GET-TOTAL',
}

interface AddToCart {
  type: typeof CartActionTypes.AddToCart;
  payload: {
    product: CartProduct;
  };
}

interface GetTotal {
  type: typeof CartActionTypes.GetTotal;
  payload: {
    total: number;
  };
}

export const addToCart = (product: CartProduct): AddToCart => ({
  type: CartActionTypes.AddToCart,
  payload: {
    product: product,
  },
});

export type CartActions = AddToCart | GetTotal;
