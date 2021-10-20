import {
  ProductActionTypes,
  ProductListActions,
} from '../actions/ProductListAction';
import { ProductListState } from '../types/types';

const initialState: ProductListState = {
  productList: [],
  isLoading: false,
  error: null,
};

const ProductReducer = (state = initialState, action: ProductListActions) => {
  switch (action.type) {
    case ProductActionTypes.GetProductListRequest: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ProductActionTypes.GetProductListSuccess: {
      return {
        ...state,
        isLoading: false,
        productList: action.payload.newProductList,
      };
    }

    case ProductActionTypes.GetProductListFailure: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};

export default ProductReducer;
