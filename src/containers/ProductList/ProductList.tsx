import React, { Dispatch, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Product from '../../components/Product/Product';
import { useAppSelector } from '../../hooks/appSelector';
import { selectProducts } from '../../store/selectors/ProductSelector';
import { getProductListThunk } from '../../store/thunks/ProductThunk';
import List from '@mui/material/List';

import style from './ProductList.module.scss';

const ProductList: FC = () => {
  const products = useAppSelector(selectProducts);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getProductListThunk());
  }, [dispatch]);

  return (
    <List className={style.productList}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </List>
  );
};

export default ProductList;
