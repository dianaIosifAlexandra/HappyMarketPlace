import React, { FC } from 'react';

import Navbar from '../Navbar/Navbar';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
