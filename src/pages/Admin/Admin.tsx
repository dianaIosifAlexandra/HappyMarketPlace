import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import CustomSlider from '../../components/Slider/Slider';

import style from './Admin.module.scss';

const Admin: FC = () => {
  return (
    <Layout>
      <div className={style.adminPage}>
        <div className={style.title}>Please select the number of products!</div>
        <div>
          <CustomSlider />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
