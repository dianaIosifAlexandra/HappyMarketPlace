import React, { Dispatch, FC, useCallback, useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';

import style from './CartItem.module.scss';
import CartProduct from '../../models/CartProduct';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import {
  changeQuantity,
  decreaseQuantity,
  deleteProduct,
  increaseeQuantity,
} from '../../store/actions/CartActions';

interface Props {
  product: CartProduct;
}

const CartItem: FC<Props> = ({ product }) => {
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleChange = useCallback(
    (event) => {
      dispatch(changeQuantity(product.id, event.target.value));
    },
    [product.quantity]
  );

  const handleIncreaseQuantity = useCallback(() => {
    dispatch(increaseeQuantity(product.id, product.quantity));
  }, []);

  const handleDecreaseQuantity = useCallback(() => {
    dispatch(decreaseQuantity(product.id, product.quantity));
    if (product.quantity === 0) {
      dispatch(deleteProduct(product.id));
    }
  }, [product.quantity]);

  const handleDeleteProduct = useCallback(() => {
    dispatch(deleteProduct(product.id));
  }, []);

  return (
    <Grid container spacing={2} className={style.cartItemGrid}>
      <Grid item xs={4} className={style.image}>
        <img src={product.image} className={style.image} />
      </Grid>
      <Grid item xs={8} className={style.description}>
        <Typography variant="subtitle2" className={style.title}>
          {product.title}
        </Typography>
        <div>
          <TextField
            className={style.quantity}
            label="Quantity"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <Paper elevation={1} className={style.total}>
          <Typography variant="subtitle2" className={style.productTotal}>
            Sum for {product.quantity} product/s:{' '}
            {product.quantity * product.price} $
          </Typography>
        </Paper>
        <div className={style.buttons}>
          <Tooltip title="Delete item from cart" onClick={handleDeleteProduct}>
            <Button variant="contained" className={style.cartItemBtn}>
              <DeleteForeverIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Add quanity" onClick={handleIncreaseQuantity}>
            <Button variant="contained" className={style.cartItemBtn}>
              <AddIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Remove quanity" onClick={handleDecreaseQuantity}>
            <Button variant="contained" className={style.cartItemBtn}>
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </Grid>
    </Grid>
  );
};

export default CartItem;
