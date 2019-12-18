import Auth from './Auth';
import React, { Component } from 'react';

class ListOfTechnology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  correctAuth = () => {
    this.setState({
      isAuth: true
    });
  }

  render() {
    const { isAuth } = this.state;
    return (
      <>
        <Auth
          isAuth={isAuth}
          correctAuth={this.correctAuth}
        />
        {isAuth ? <div>STUB: list with ListOfTechnology</div> : null}
      </>
    );
  }
}

export default ListOfTechnology;
