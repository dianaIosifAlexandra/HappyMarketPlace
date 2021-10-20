import React, { Dispatch, FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/appSelector';
import { getProductListThunk } from '../../store/actions/ProductListAction';
import { selectProduct } from '../../store/selectors/ProductSelector';

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
    <div>
      Products component works!
      <button onClick={getProductListAction}>Get Books</button>
      {product.productList.map((prod) => (
        <div key={prod.id}>
          <div>{prod.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
