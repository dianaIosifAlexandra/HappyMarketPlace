import React, { FC, useCallback, useState } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const CustomSlider: FC = () => {
  const [productsNumber, setProductsNumber] = useState(20);

  const handleChangeProductsNumber = useCallback((event) => {
    setProductsNumber(event.target.value);
  }, []);

  const handleDragStop = () => {
    console.log('handleDragStop');
  };

  return (
    <div>
      <PrettoSlider
        key={`slider-${productsNumber}`}
        step={1}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={productsNumber}
        onChange={handleChangeProductsNumber}
      />
    </div>
  );
};

export default CustomSlider;
