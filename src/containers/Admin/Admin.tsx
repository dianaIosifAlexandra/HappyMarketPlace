import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import CustomSlider from '../../components/Slider/Slider';

import style from './Admin.module.scss';

const Admin: FC = () => {
  return (
    <Layout>
      <div className={style.adminPage}>
        This is the admin page!
        <br />
        <CustomSlider />
      </div>
    </Layout>
  );
};

export default Admin;
