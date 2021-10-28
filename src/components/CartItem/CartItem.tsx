import React, { FC, useCallback, useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import style from './CartItem.module.scss';

const CartItem: FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = useCallback((event) => {
    setQuantity(event.target.value);
  }, []);

  console.log(typeof quantity);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4} className={style.image}>
          <div>Poza</div>
        </Grid>
        <Grid item xs={8} className={style.description}>
          <div className={style.title}>Descriere produs</div>
          <div>
            <TextField
              className={style.quantity}
              label="Quantity"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <div className={style.total}>
            <Paper elevation={1}>
              <div>Suma unui produs de X ori</div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartItem;
