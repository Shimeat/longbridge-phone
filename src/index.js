import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';

import * as skeleton from 'skeleton-elements/react';

// Import F7-React Plugin
import { App, View, Page, Navbar, Toolbar, Link } from 'framework7-react';

import IOS from './IOS';
Framework7.use(Framework7React);

const f7params = {
  name: 'Phone',
  id: 'com.longbridge.phone',
  theme: 'ios',
  // routes
  routes: [
    // {
    //   path: '/about/',
    //   component: AboutPage,
    // },
    // {
    //   path: '/services/',
    //   component: ServicesPage,
    // },
  ],
  // ... other params
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App {...f7params}>
      <IOS />
    </App>
  </StrictMode>
);
