import React from 'react';
import Range from 'react-range-progress';
import { Progress } from 'semantic-ui-react';

class ProgressBar extends React.Component {
  onRangeChanged = value => {
    this.props.handleSeek(value);
  }

  render() {
    return (
      <Range
          value={this.props.value}
          thumbSize={15}
          fillColor={{
            r: 20,
            g: 150,
            b: 100,
            a: 0.75,
          }}
          trackColor={{
            r: 10,
            g: 10,
            b: 0,
            a: 0.5,
          }}
          height={5}
          width="100%"
          onChange={this.onRangeChanged}
        />
    );
  }
}

export default ProgressBar;
