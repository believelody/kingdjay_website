import React, { Fragment } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const ShuffleRepeat = ({handleClick, value}) => (
  <Fragment>
    {value === 0 && <Button inverted color='green' circular onClick={handleClick} icon='shuffle' />}
    {value === 1 && <Button circular onClick={handleClick} color='green' icon='shuffle' />}
    {value === 2 && <Button circular onClick={handleClick} color='green' icon='repeat' />}
    {
      value === 3 &&
      <Button circular onClick={handleClick} color='green'>
        <Label color='green' icon='repeat' content='1' />
      </Button>
    }
  </Fragment>
);

export default ShuffleRepeat;
