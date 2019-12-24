import { connect } from 'react-redux';
import createTechnology from './store/actions/technologyAction';
import createTips from './store/actions/tipsAction';
import CreatingCV from './components/CV';
import Error from './components/Error';
import { fetchData } from './Utils/connect';
import { getFullURL } from './Utils/Utils';
import Home from './components/Home';
import ListOfTechnology from './components/ListOfTechnology';
import Navigation from './components/Navigation';
import Tips from './components/Tips';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import * as config from './config/config';
import './style/style.css';

class App extends Component {
  componentDidMount = () => {
    const technology = fetchData(getFullURL(config.backURL, config.endPointTechnology));
    technology.then((value) => {
      this.props.createTechnology(value);
    });

    const tips = fetchData(getFullURL(config.backURL, config.endPointTips));
    tips.then((value) => {
      this.props.createTips(value);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route
              path='/'
              component={Home}
              exact
            />
            <Route
              path='/tips'
              component={Tips}
            />
            <Route
              path='/list'
              component={ListOfTechnology}
            />
            <Route
              path='/creationCV'
              component={CreatingCV}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  createTechnology,
  createTips
};

export default connect(null, mapDispatchToProps)(App);
