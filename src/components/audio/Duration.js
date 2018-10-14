import React from 'react';
import { Label } from 'semantic-ui-react';

function formatTime(time) {
    var hours = Math.floor(time / 3600);
    var mins  = Math.floor((time % 3600) / 60);
    var secs  = Math.floor(time % 60);

    if (secs < 10) {
        secs = "0" + secs;
    }

    if (hours) {
        if (mins < 10) {
            mins = "0" + mins;
        }

        return hours + ":" + mins + ":" + secs; // hh:mm:ss
    } else {
        return mins + ":" + secs; // mm:ss
    }
}

const Duration = ({currentTime, duration}) => (
  <span style={{ color: 'black' }}>{formatTime(currentTime)} / {formatTime(duration)}</span>
);

export default Duration;
