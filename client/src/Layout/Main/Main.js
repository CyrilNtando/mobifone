import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Landing from '../../Container/Landing/Landing';
import Shop from '../../Container/Shop/Shop';
import Auth from '../../Container/Auth/Auth';
import Product from '../../Container/Product/Product';

const Wrapper = styled.main`
  background-color: ${props => props.theme.colorGreyLight1};
  position: relative;
  height: auto;
  width: 100%;
  margin-top: 7rem;
`;
function Main() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path='/' render={props => <Landing {...props} />} />
        <Route exact path='/signIn' render={props => <Auth {...props} />} />
        <Route exact path='/signup' render={props => <Auth {...props} />} />
        <Route exact path='/products' render={props => <Shop {...props} />} />
        <Route
          exact
          path='/product:id'
          render={props => <Product {...props} />}
        />
        <Route exact path='/checkout' render={props => <Shop {...props} />} />
      </Switch>
    </Wrapper>
  );
}

export default withRouter(Main);
