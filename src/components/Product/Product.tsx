import React, { FC } from 'react';

import ProductModel from '../../models/Product';
import { RatingView } from 'react-simple-star-rating';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShowMoreText from 'react-show-more-text';

import style from './Product.module.scss';

interface Props {
  product: ProductModel;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <div className={style.productContainer}>
      <Paper className={style.paper} elevation={3}>
        <div className={style.imgContainer}>
          <img className={style.productImage} src={product.image} />
        </div>
        <div>{product.title}</div>
        <div>
          <ShowMoreText
            lines={2}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class"
            expanded={false}
            width={280}
            truncatedEndingComponent={'... '}
          >
            {product.description}
          </ShowMoreText>
        </div>
        <div className={style.ratingContainer}>{product.price}$</div>
        <div>
          <RatingView ratingValue={Math.round(product.rating.rate)} />
        </div>
        <div>
          <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
            Add to cart
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Product;
