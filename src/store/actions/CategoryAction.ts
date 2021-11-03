import { getProductListRequest } from './ProductListAction';
export enum CategoriesActionType {
  GetCategoriesRequest = 'CATEGORIES--GET-CATEGORIES-REQUEST',
  GetCategoriesSuccess = 'CATEGORIES--GET-CATEGORIES-SUCCESS',
  GetCategoriesFailure = 'CATEGORIES--GET-CATEGORIES-FAILURE',
}

interface GetCategoriesRequest {
  type: typeof CategoriesActionType.GetCategoriesRequest;
}

interface GetCategoriesSuccess {
  type: typeof CategoriesActionType.GetCategoriesSuccess;
  payload: {
    categories: string[];
  };
}

interface GetCategoriesFailure {
  type: typeof CategoriesActionType.GetCategoriesFailure;
  payload: {
    error: string;
  };
}

export const getCategoriesRequest = (): GetCategoriesRequest => ({
  type: CategoriesActionType.GetCategoriesRequest,
});

export const getCategoriesSuccess = (
  categories: string[]
): GetCategoriesSuccess => ({
  type: CategoriesActionType.GetCategoriesSuccess,
  payload: {
    categories: categories,
  },
});

export const getCategoriesFailure = (error: string): GetCategoriesFailure => ({
  type: CategoriesActionType.GetCategoriesFailure,
  payload: {
    error,
  },
});

export type CategoryAction =
  | GetCategoriesRequest
  | GetCategoriesSuccess
  | GetCategoriesFailure;
