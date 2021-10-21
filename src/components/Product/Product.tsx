import React, { FC } from 'react';
import ProductModel from '../../models/Product';

import style from './Product.module.scss';

interface Props {
  productItem: ProductModel;
}

const Product: FC<Props> = ({ productItem }) => {
  return <div>{productItem.title}</div>;
};

export default Product;
