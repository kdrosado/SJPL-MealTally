import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../header/Header'
import SignupComponent from '../signup/SignupComponent'
import LoginComponent from '../login/LoginComponent'
import MealTallyComponent from '../MealTallyComponent/MealTallyComponent'
import ProfileComponent from '../profile/ProfileComponent'
import InAppNavigationComponent from '../navigation/InAppNavigationComponent'

require('./NavigationComponent.css');

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={MealTallyComponent}/>
                <Route path='/signup' component={SignupComponent}/>
                <Route path='/login' component={LoginComponent}/>
                <Route path='/profile' component={InAppNavigationComponent}/>
              </Switch>

            </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default NavigationComponent
