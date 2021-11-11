import React, { FC, useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/Product';
import CategoryService from '../../services/CategoryService';
import List from '@mui/material/List';

import style from './InfiniteScrollList.module.scss';
import ProductModel from '../../models/Product';

const InfiniteScrollList: FC = () => {
  const [listItems, setListItems] = useState<ProductModel[]>(
    CategoryService.getProductsByCategoryMock()
  );
  const [isFetching, setIsFetching] = useState(false);

  // innerHeight = interior height of the window
  // document.documentElement.scrollTop =  Get the number of pixels scrolled.
  // HTMLElement.offsetHeight = integer obtained from the height of an element, including vertical padding and borders

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setIsFetching(true);
  };

  //adauga la lista de produse, alte produse
  const fetchMoreListItems = () => {
    setTimeout(() => {
      setListItems((prevItems) => [
        ...prevItems,
        ...CategoryService.getProductsByCategoryMock(),
      ]);
      setIsFetching(false);
    }, 2000);
  };

  useEffect(() => {
    // la scroll se va apela mereu metoda handleScroll
    // ma abonez la event-ul de scroll cu handleScroll ca si listener
    window.addEventListener('scroll', handleScroll);

    //prin acest return se face un cleanup a "effectelor" pe care eu le folosesc
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }

    fetchMoreListItems();
  }, [isFetching]);

  return (
    <Layout>
      <List className={style.productsList}>
        {listItems.map((item) => {
          return <Product product={item} key={Math.random()} />;
        })}
      </List>
      {isFetching && 'Fetching more list items...'}
    </Layout>
  );
};

export default InfiniteScrollList;
