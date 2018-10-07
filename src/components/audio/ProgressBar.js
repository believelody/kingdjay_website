import React from 'react';
import { Progress } from 'semantic-ui-react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.currentTime
    };
  }

  seekTime = (e) => {
    let progressElement = document.getElementById('seek');
    let widthPlayer = progressElement.clientWidth;
    let widthScreen = window.screen.width;
    let playerStartLeftPosition = (widthScreen - widthPlayer) / 2;
    let playerEndLeftPosition = playerStartLeftPosition + widthPlayer;
    // console.log(widthPlayer, playerStartLeftPosition, playerEndLeftPosition);
    if (e.clientX >= playerStartLeftPosition && e.clientX <= playerEndLeftPosition) {
      let value = (e.clientX - playerStartLeftPosition);
      let currentTime = value * this.props.duration / widthPlayer;
      // console.log(currentTime);
      this.setState((state, props) => ({value}), this.props.handleSeek(currentTime));
    }
  }

  render() {
    const { value } = this.state;
    const {currentTime, duration} = this.props;
    // console.log(value);
    return (
      <Progress
        id='seek'
        onClick={this.seekTime}
        className='progress'
        success
        active
        size='tiny'
        value={currentTime}
        total={duration}
      />
    );
  }
}

export default ProgressBar;
