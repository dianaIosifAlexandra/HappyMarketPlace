import React, { FC, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/Category';
import Button from '@mui/material/Button';

import style from './CategoryItem.module.scss';

interface Props {
  category: string;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const handleClick = useCallback((event) => {
    const categoryTxt: string = event.target.textContent;
    console.log(categoryTxt.toLocaleLowerCase());
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
