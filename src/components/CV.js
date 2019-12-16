import { connect } from 'react-redux';
import React, { Component } from 'react';

class CreatingCV extends Component {
  render() {
    // eslint-disable-next-line no-console
    console.log(this.props.technology);
    return (
      <div>
        <p>Check console, bro</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { technologyReducer } = state;
  return { technology: technologyReducer };
};

export default connect(mapStateToProps)(CreatingCV);
