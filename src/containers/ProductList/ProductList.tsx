import List from '@mui/material/List';
import React, { Dispatch, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Product from '../../components/Product/Product';
import { useAppSelector } from '../../hooks/appSelector';
import { selectProduct } from '../../store/selectors/ProductSelector';
import { getProductListThunk } from '../../store/thunks/ProductThunk';

import style from './ProductList.module.scss';

const ProductList: FC = () => {
  const product = useAppSelector(selectProduct);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getProductListThunk());
  }, [dispatch]);

  return (
    <List className={style.productList}>
      {product.productList.map((prod) => (
        <Product productItem={prod} key={prod.id} />
      ))}
    </List>
  );
};

export default ProductList;
