import React, { Dispatch, FC, useEffect } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import List from '@mui/material/List';
import Product from '../../components/Product/Product';
import Layout from '../../components/Layout/Layout';

import style from './ProductsInCategory.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductsInCategoryThunk } from '../../store/thunks/ProductThunk';
import {
  selectIsProductsLoading,
  selectProductsInCategory,
} from '../../store/selectors/ProductSelector';
import CircularProgress from '@mui/material/CircularProgress';

const ProductsInCategory: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const productsInCategory = useAppSelector(selectProductsInCategory);
  const isProductsLoading = useAppSelector(selectIsProductsLoading);

  let { category } = useParams<{ category: string }>();

  useEffect(() => {
    dispatch(getProductsInCategoryThunk(category));
  }, [category]);

  if (isProductsLoading) {
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  }

  return (
    <Layout>
      <List className={style.productsList}>
        {productsInCategory.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </List>
    </Layout>
  );
};

export default ProductsInCategory;
