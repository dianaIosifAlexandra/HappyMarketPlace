import { ProductsInCategoryState } from '../types/types';
import {
  ProductsInCategoryAction,
  ProductsInCategoryActionType,
} from '../actions/ProductsInCategoryAction';

const initialState: ProductsInCategoryState = {
  productsInCategory: [],
  isLoading: false,
  error: null,
};

const ProductsInCategoryReducer = (
  state = initialState,
  action: ProductsInCategoryAction
): ProductsInCategoryState => {
  switch (action.type) {
    case ProductsInCategoryActionType.GetProductsInCategoryRequest: {
      return {
        ...state,
        productsInCategory: [],
        isLoading: true,
      };
    }

    case ProductsInCategoryActionType.GetProductsInCategorySuccess: {
      return {
        ...state,
        isLoading: false,
        productsInCategory: action.payload.productsInCategory,
      };
    }

    case ProductsInCategoryActionType.GetProductsInCategoryFailure: {
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

export default ProductsInCategoryReducer;
