import CartProduct from '../../models/CartProduct';

export enum CartActionTypes {
  AddToCart = 'CART--ADD-TO-CART',
  ChangeQuantity = 'CART--CHANGE-QUANTITY',
}

interface AddToCart {
  type: typeof CartActionTypes.AddToCart;
  payload: {
    product: CartProduct;
  };
}

interface ChangeQuantity {
  type: typeof CartActionTypes.ChangeQuantity;
  payload: {
    id: string;
    quantity: number;
  };
}

export const addToCart = (product: CartProduct): AddToCart => ({
  type: CartActionTypes.AddToCart,
  payload: {
    product: product,
  },
});

export const changeQuantity = (
  id: string,
  quantity: number
): ChangeQuantity => ({
  type: CartActionTypes.ChangeQuantity,
  payload: {
    id,
    quantity,
  },
});

export type CartActions = AddToCart | ChangeQuantity;
