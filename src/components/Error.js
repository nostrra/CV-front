import React from 'react';

class Error extends React.Component {
  componentDidMount() {
    window.location.replace('https://www.youtube.com/watch?v=G1IbRujko-A');
  }

  render() {
    return (
      <h1>Surprise</h1>
    );
  }
}

export default Error;
