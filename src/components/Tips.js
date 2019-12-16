import { connect } from 'react-redux';
import React, { Component } from 'react';

class Tips extends Component {
  render() {
    // eslint-disable-next-line no-console
    console.log(this.props.tips);
    return (
      <div>
        <p>Check console, bro</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tipsReducer } = state;
  return { tips: tipsReducer };
};

export default connect(mapStateToProps)(Tips);
