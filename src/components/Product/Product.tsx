import React, { FC } from 'react';

import ProductModel from '../../models/Product';
import { RatingView } from 'react-simple-star-rating';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShowMoreText from 'react-show-more-text';

import style from './Product.module.scss';

interface Props {
  productItem: ProductModel;
}

const Product: FC<Props> = ({ productItem }) => {
  return (
    <div className={style.productContainer}>
      <Paper className={style.paper} elevation={3}>
        <div className={style.imgContainer}>
          <img className={style.productImage} src={productItem.image} />
        </div>
        <div>{productItem.title}</div>
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
            {productItem.description}
          </ShowMoreText>
        </div>
        <div className={style.ratingContainer}>{productItem.price}$</div>
        <div>
          <RatingView ratingValue={Math.round(productItem.rating.rate)} />
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
