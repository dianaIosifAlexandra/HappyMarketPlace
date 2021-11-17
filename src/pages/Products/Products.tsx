import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import ProductList from '../../containers/ProductList/ProductList';
import { useAppSelector } from '../../hooks/appSelector';
import { selectAddedProducts } from '../../store/selectors/CartSelector';

const Products: FC = () => {
  const addedProducts = useAppSelector(selectAddedProducts);

  return (
    <Layout>
      <main>
        <ProductList />
        {addedProducts.length > 0 && <ShoppingCart />}
      </main>
    </Layout>
  );
};

export default Products;
