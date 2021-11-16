import React, { FC, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/Category';
import Button from '@mui/material/Button';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

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

  let categoryIcon;

  switch (category) {
    case 'electronics': {
      categoryIcon = <ElectricalServicesIcon />;
      break;
    }
    case "women's clothing": {
      categoryIcon = <FemaleIcon />;
      break;
    }
    case "men's clothing": {
      categoryIcon = <MaleIcon />;
      break;
    }
    default:
      categoryIcon = <CategoryIcon />;
  }

  return (
    <div className={style.categoryContainer}>
      <Button variant="text" onClick={handleClick}>
        <Paper elevation={3} className={style.categoryItem}>
          {categoryIcon}
          <Typography variant="subtitle2">{category.toUpperCase()}</Typography>
        </Paper>
      </Button>
    </div>
  );
};

export default CategoryItem;
