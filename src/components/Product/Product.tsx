import React, { Dispatch, FC, useCallback } from 'react';

import ProductModel from '../../models/Product';
import { RatingView } from 'react-simple-star-rating';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShowMoreText from 'react-show-more-text';

import style from './Product.module.scss';
import { useAppSelector } from '../../hooks/appSelector';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';
import { addToCart } from '../../store/actions/CartActions';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import CartProduct from '../../models/CartProduct';
import Typography from '@mui/material/Typography';
import { selectIsProductsLoading } from '../../store/selectors/ProductSelector';

interface Props {
  product: ProductModel;
}

const convertToCartProduct = (product: ProductModel): CartProduct => {
  return {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    quantity: 1,
  };
};

const Product: FC<Props> = ({ product }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(convertToCartProduct(product)));
  }, []);

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
          <Typography variant="subtitle2">{product.category}</Typography>
        </div>
        <div>
          {isLoggedIn && (
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Product;
