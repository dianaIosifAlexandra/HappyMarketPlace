import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import ProductList from '../../containers/ProductList/ProductList';

const Products: FC = () => {
  return (
    <Layout>
      <main>
        <ProductList />
      </main>
    </Layout>
  );
};

export default Products;
