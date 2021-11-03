import React, { Dispatch, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryItem from '../../components/Category/CategoryItem';
import Layout from '../../components/Layout/Layout';
import { useAppSelector } from '../../hooks/appSelector';
import { selectCategories } from '../../store/selectors/CategoriesSelector';
import { getCategorieThunk } from '../../store/thunks/CategoryThunk';
import List from '@mui/material/List';

import style from './Categories.module.scss';

const Categories: FC = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getCategorieThunk());
  }, [dispatch]);

  return (
    <Layout>
      <List className={style.categories}>
        {categories.map((item) => {
          return <CategoryItem category={item} key={item} />;
        })}
      </List>
    </Layout>
  );
};

export default Categories;
