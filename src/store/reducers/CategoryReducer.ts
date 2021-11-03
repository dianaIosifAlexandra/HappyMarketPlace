import {
  CategoryAction,
  CategoriesActionType,
} from '../actions/CategoryAction';
import { CategoriesState } from '../types/types';

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const CategoryReducer = (
  state = initialState,
  action: CategoryAction
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionType.GetCategoriesRequest: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CategoriesActionType.GetCategoriesSuccess: {
      return {
        ...state,
        isLoading: false,
        categories: action.payload.categories,
      };
    }

    case CategoriesActionType.GetCategoriesFailure: {
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

export default CategoryReducer;
