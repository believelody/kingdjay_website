import React, { Fragment } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ShuffleRepeat = ({handleClick, value}) => (
  <Fragment>
    {(value === 'shuffle' || value=== '') && <Button onClick={() => handleClick('shuffle')} icon='shuffle' />}
    {value === 'repeat' && <Button onClick={() => handleClick('repeat')} icon='repeat' />}
    {value === 'repeat-one' && <Button onClick={() => handleClick('repeat-one')} icon='repeat' />}  
  </Fragment>
);

export default ShuffleRepeat;
