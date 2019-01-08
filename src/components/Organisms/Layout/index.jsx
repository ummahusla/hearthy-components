import React, { Fragment } from 'react';

import Navigation from '../../Organisms/Navigation';

const Layout = ({ children }) => (
  <Fragment>
    <Navigation />
    {children}
  </Fragment>
);

export default Layout;
