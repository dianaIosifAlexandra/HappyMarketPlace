import ProductModel from '../../models/Product';

export enum ProductActionTypes {
  GetProductListRequest = 'PRODUCT-LIST--GET-PRODUCTS-REQUEST',
  GetProductListFailure = 'PRODUCT-LIST--GET-PRODUCTS-FAILURE',
  GetProductListSuccess = 'PRODUCT-LIST--GET-PRODUCTS-SUCCESS',
}

interface GetProductListRequest {
  type: typeof ProductActionTypes.GetProductListRequest;
}

interface GetProductListFailure {
  type: typeof ProductActionTypes.GetProductListFailure;
  payload: {
    error: string;
  };
}

interface GetProductListSuccess {
  type: typeof ProductActionTypes.GetProductListSuccess;
  payload: {
    productList: ProductModel[];
  };
}

export const getProductListRequest = (): GetProductListRequest => ({
  type: ProductActionTypes.GetProductListRequest,
});

export const getProductListFailure = ({
  error,
}: {
  error: string;
}): GetProductListFailure => ({
  type: ProductActionTypes.GetProductListFailure,
  payload: {
    error,
  },
});

export const getProductListSuccess = ({
  productList,
}: {
  productList: ProductModel[];
}): GetProductListSuccess => ({
  type: ProductActionTypes.GetProductListSuccess,
  payload: {
    productList: productList,
  },
});

export type ProductListActions =
  | GetProductListRequest
  | GetProductListFailure
  | GetProductListSuccess;
