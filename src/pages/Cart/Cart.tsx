import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
// import { useAppSelector } from '../../hooks/appSelector';
// import { selectProducts } from '../../store/selectors/ProductSelector';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import style from './Cart.module.scss';
import CartItem from '../../components/CartItem/CartItem';
import { useAppSelector } from '../../hooks/appSelector';
import {
  selectAddedProducts,
  selectTotal,
} from '../../store/selectors/CartSelector';

const Cart: FC = () => {
  const addedProducts = useAppSelector(selectAddedProducts);
  const total = useAppSelector(selectTotal);

  return (
    <Layout>
      <Box className={style.cartPageContainer}>
        <h1>My cart</h1>
        <Paper elevation={3} className={style.productContainer}>
          {addedProducts.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </Paper>
        <Paper elevation={3}>
          <div>Suma tuturor produselor: {total}</div>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Cart;
