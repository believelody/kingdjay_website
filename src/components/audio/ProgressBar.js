import React from 'react';
import { Progress } from 'semantic-ui-react';

class ProgressBar extends React.Component {
  seekTime = e => {
    let progressElement = document.getElementById('seek');
    console.log(progressElement.clientWidth);
  }

  render() {
    const {currentTime, duration} = this.props;
    return (
      <Progress
        id='seek'
        ref={progress => this.progressElement = progress}
        onClick={this.seekTime}
        attached='top'
        className='progress'
        success
        active
        size='small'
        value={currentTime}
        total={duration}
      />
    );
  }
}

export default ProgressBar;
