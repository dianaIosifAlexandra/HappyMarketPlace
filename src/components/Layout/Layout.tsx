import React, { FC } from 'react';

import Navbar from '../Navbar/Navbar';

const Layout: FC = ({ children }) => {
  return (
    <>
      {/* aici pui doar partile comune (care se repeta in mai multe componente) */}
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
