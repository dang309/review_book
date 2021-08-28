/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { createContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/Loadable';
import NotFoundPage from './pages/NotFoundPage/Loadable';
import BookDetail from './pages/BookDetail/Loadable';

import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import GlobalStyle from './global-styles';

export const DeviceContext = createContext();

export default function App() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <DeviceContext.Provider value={isMobile}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/book" component={BookDetail} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </DeviceContext.Provider>
  );
}
