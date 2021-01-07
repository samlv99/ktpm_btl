import React from 'react';
import { Grid } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Header />

      <Route exact path="/">
        <Home />
      </Route>

      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Route exact path="/products">
            <Product />
          </Route>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </>
  );
}

export default App;
