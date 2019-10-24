import React from 'react';

class Stats extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {JSON.stringify(this.props.stats)}
        </ul>
      </div>
    );
  }
}

export default Stats;
