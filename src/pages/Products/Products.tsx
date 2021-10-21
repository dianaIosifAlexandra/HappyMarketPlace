import React, { Dispatch, FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import { useAppSelector } from '../../hooks/appSelector';
import { selectProduct } from '../../store/selectors/ProductSelector';
import { getProductListThunk } from '../../store/thunks/ProductThunk';

// import style from './Products.module.scss';

const Products: FC = () => {
  const product = useAppSelector(selectProduct);
  const dispatch: Dispatch<any> = useDispatch();

  const getProductListAction = useCallback(
    () => dispatch(getProductListThunk()),
    // () => dispatch(getProductListThunk({ getError: true })),
    [dispatch]
  );

  return (
    <Layout>
      <main>
        Products component works!
        <br />
        <button onClick={getProductListAction}>Get products</button>
        {product.productList.map((prod) => (
          <div key={prod.id}>
            <div>{prod.title}</div>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Products;
