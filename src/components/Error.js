import React from 'react';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: 'https://www.youtube.com/watch?v=G1IbRujko-A' };
  }

  componentDidMount() {
    window.location.replace(`${this.state.url}`);
  }

  render() {
    return (
      <h1>Surprise</h1>
    );
  }
}

export default Error;
