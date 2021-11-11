import React, { Dispatch, FC, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/Category';
import Button from '@mui/material/Button';

import style from './CategoryItem.module.scss';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../Routes';

interface Props {
  category: string;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(Routes.productsInCategories.replace(':category', category));
  }, []);

  return (
    <div className={style.categoryContainer}>
      <Button variant="text" onClick={handleClick}>
        <Paper elevation={3} className={style.categoryItem}>
          <CategoryIcon />
          <Typography variant="subtitle2">{category.toUpperCase()}</Typography>
        </Paper>
      </Button>
    </div>
  );
};

export default CategoryItem;
