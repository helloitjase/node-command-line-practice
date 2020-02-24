import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      watch: false,
      time: 0
    }
  }

  render() {
    return (
      <div>
        <div>
          Time:
          {time}
        </div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    )
  }
}


export default Stopwatch