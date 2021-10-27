import React, { FC, useCallback, useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

const CustomSlider: FC = () => {
  const [productsNumber, setProductsNumber] = useState(12);

  const handleChangeProductsNumber = useCallback((event) => {
    setProductsNumber(event.target.value);
  }, []);

  const getText = useCallback((value) => {
    return value;
  }, []);

  const customMarks = [
    // {
    //   value: 5,
    //   label: '5',
    // },
    // {
    //   value: 6,
    //   label: '6',
    // },
    // {
    //   value: 7,
    //   label: '7',
    // },
    // {
    //   value: 8,
    //   label: '8',
    // },
    // {
    //   value: 9,
    //   label: '9',
    // },
    {
      value: 10,
      label: '10',
    },
    {
      value: 11,
      label: '11',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 13,
      label: '13',
    },
    {
      value: 14,
      label: '14',
    },
    {
      value: 15,
      label: '15',
    },
    {
      value: 16,
      label: '16',
    },
    {
      value: 17,
      label: '17',
    },
    {
      value: 18,
      label: '18',
    },
    {
      value: 19,
      label: '19',
    },
    {
      value: 20,
      label: '20',
    },
  ];

  useEffect(() => {
    localStorage.setItem('productsNumber', productsNumber.toString());
  }, [productsNumber]);

  return (
    <div>
      <Slider
        min={10}
        max={20}
        value={productsNumber}
        onChange={handleChangeProductsNumber}
        step={1}
        marks={customMarks}
        getAriaValueText={getText}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default CustomSlider;
