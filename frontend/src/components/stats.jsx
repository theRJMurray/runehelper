import React from 'react';

class Stats extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.stats.map(stats => <li key={ stats }>{ stats }</li>)}
        </ul>
      </div>
    );
  }
}

export default Stats;
