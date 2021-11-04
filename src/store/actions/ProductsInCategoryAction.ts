import ProductModel from '../../models/Product';

export enum ProductsInCategoryActionType {
  GetProductsInCategoryRequest = 'CATEGORIES--GET-PRODUCTS-IN-CATEGORY-REQUEST',
  GetProductsInCategorySuccess = 'CATEGORIES--GET-PRODUCTS-IN-CATEGORY-SUCCESS',
  GetProductsInCategoryFailure = 'CATEGORIES--GET-PRODUCTS-IN-CATEGORY-FAILURE',
}

interface GetProductsInCategoryRequest {
  type: typeof ProductsInCategoryActionType.GetProductsInCategoryRequest;
}

interface GetProductsInCategorySuccess {
  type: typeof ProductsInCategoryActionType.GetProductsInCategorySuccess;
  payload: {
    productsInCategory: ProductModel[];
  };
}

interface GetProductsInCategoryFailure {
  type: typeof ProductsInCategoryActionType.GetProductsInCategoryFailure;
  payload: {
    error: string;
  };
}

export const getProductsInCategoryRequest =
  (): GetProductsInCategoryRequest => ({
    type: ProductsInCategoryActionType.GetProductsInCategoryRequest,
  });

export const getProductsInCategorySuccess = (
  productsInCategory: ProductModel[]
): GetProductsInCategorySuccess => ({
  type: ProductsInCategoryActionType.GetProductsInCategorySuccess,
  payload: {
    productsInCategory: productsInCategory,
  },
});

export const getProductsInCategoryFailure = (
  error: string
): GetProductsInCategoryFailure => ({
  type: ProductsInCategoryActionType.GetProductsInCategoryFailure,
  payload: {
    error,
  },
});

export type ProductsInCategoryAction =
  | GetProductsInCategoryRequest
  | GetProductsInCategorySuccess
  | GetProductsInCategoryFailure;
