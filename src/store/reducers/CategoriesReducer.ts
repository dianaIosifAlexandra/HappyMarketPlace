import {
  CategoriesAction,
  CategoriesActionType,
} from '../actions/CategoriesAction';
import { CategoriesState } from '../types/types';

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const CategoriesReducer = (
  state = initialState,
  action: CategoriesAction
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

export default CategoriesReducer;
