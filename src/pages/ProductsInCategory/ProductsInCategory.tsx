import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import { useAppSelector } from '../../hooks/appSelector';
import { selectProductsInCategory } from '../../store/selectors/ProductsInCategorySelector';
import List from '@mui/material/List';
import Product from '../../components/Product/Product';

const ProductsInCategory: FC = () => {
  const productsInCategory = useAppSelector(selectProductsInCategory);

  console.log(productsInCategory);

  return (
    <List>
      {productsInCategory.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </List>
  );
};

export default ProductsInCategory;
