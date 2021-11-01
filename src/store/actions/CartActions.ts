import CartProduct from '../../models/CartProduct';

export enum CartActionTypes {
  AddToCart = 'CART--ADD-TO-CART',
  ChangeQuantity = 'CART--CHANGE-QUANTITY',
  IncreaseQuantity = 'CART--INCREASE-QUANTITY',
  DecreaseQuantity = 'CART--DECREASE-QUANTITY',
  DeleteProduct = 'CART--DELETE-PRODUCT',
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

interface IncreaseQuantity {
  type: typeof CartActionTypes.IncreaseQuantity;
  payload: {
    id: string;
    quantity: number;
  };
}

interface DecreaseQuantity {
  type: typeof CartActionTypes.DecreaseQuantity;
  payload: {
    id: string;
    quantity: number;
  };
}

interface DeleteProduct {
  type: typeof CartActionTypes.DeleteProduct;
  payload: {
    id: string;
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

export const increaseeQuantity = (
  id: string,
  quantity: number
): IncreaseQuantity => ({
  type: CartActionTypes.IncreaseQuantity,
  payload: {
    id,
    quantity,
  },
});

export const decreaseQuantity = (
  id: string,
  quantity: number
): DecreaseQuantity => ({
  type: CartActionTypes.DecreaseQuantity,
  payload: {
    id,
    quantity,
  },
});

export const deleteProduct = (id: string): DeleteProduct => ({
  type: CartActionTypes.DeleteProduct,
  payload: {
    id,
  },
});

export type CartActions =
  | AddToCart
  | ChangeQuantity
  | IncreaseQuantity
  | DecreaseQuantity
  | DeleteProduct;
