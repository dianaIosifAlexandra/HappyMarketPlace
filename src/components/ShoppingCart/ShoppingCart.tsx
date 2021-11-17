import React, { FC, useCallback, useMemo } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './ShoppingCart.module.scss';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from '../../hooks/appSelector';
import { selectAddedProducts } from '../../store/selectors/CartSelector';
import { Routes } from '../../Routes';
import { useHistory } from 'react-router';

const ShoppingCart: FC = () => {
  const history = useHistory();
  const addedProducts = useAppSelector(selectAddedProducts);

  const addedItemsNumber = useMemo(() => {
    // let result = 0;
    // addedProducts.forEach((element) => {
    //   result += element.quantity;
    // });

    // return result;

    return addedProducts.reduce((prevValue, current) => {
      return prevValue + current.quantity;
    }, 0);
  }, [addedProducts]);

  const handleClickShoppingCart = useCallback(() => {
    history.push(Routes.cart);
  }, []);

  return (
    <div className={style.shoppingCart}>
      <span className={style.itemsNumber}>
        {addedItemsNumber > 10 ? <span>10+</span> : addedItemsNumber}
      </span>
      <IconButton onClick={handleClickShoppingCart}>
        <ShoppingCartIcon className={style.cartIcon} />
      </IconButton>
    </div>
  );
};

export default ShoppingCart;
