import React, { Dispatch, FC, useCallback, useState } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/Category';
import Button from '@mui/material/Button';

import style from './CategoryItem.module.scss';
import { getProductsInCategoryThunk } from '../../store/thunks/ProductsInCategoryThunk';
import { useDispatch } from 'react-redux';
import ProductsInCategory from '../../pages/ProductsInCategory/ProductsInCategory';

interface Props {
  category: string;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [showProducts, setShowProducts] = useState(false);

  const handleClick = useCallback(() => {
    dispatch(getProductsInCategoryThunk(category));
    setShowProducts(true);
  }, [dispatch]);

  return (
    <div className={style.categoryContainer}>
      <Button variant="text" onClick={handleClick}>
        <Paper elevation={3} className={style.categoryItem}>
          <CategoryIcon />
          <Typography variant="subtitle2">{category.toUpperCase()}</Typography>
        </Paper>
      </Button>
      {showProducts ? <ProductsInCategory /> : <div></div>}
    </div>
  );
};

export default CategoryItem;
