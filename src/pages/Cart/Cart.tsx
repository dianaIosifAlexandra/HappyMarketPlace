import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
// import { useAppSelector } from '../../hooks/appSelector';
// import { selectProducts } from '../../store/selectors/ProductSelector';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import style from './Cart.module.scss';
import CartItem from '../../components/CartItem/CartItem';

const Cart: FC = () => {
  // const products = useAppSelector(selectProducts);
  // const dispatch: Dispatch<any> = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductListThunk());
  // }, [dispatch]);

  return (
    <Layout>
      <Box className={style.cartPageContainer}>
        <h1>My cart</h1>
        <Paper elevation={3} className={style.productContainer}>
          {/* {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))} */}
          <CartItem />
        </Paper>
        <Paper elevation={3}>
          <div>Suma tuturor produselor</div>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Cart;
