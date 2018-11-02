import React, { Fragment } from 'react';
import { Grid, Segment, Item, Divider, Header } from 'semantic-ui-react';

import ToolItem from './ToolItem';

const Tools = ({tools}) => (
  <Grid.Row>
    <Grid.Column>
      <Segment>
        <Header textAlign='center' size='huge'>Mon matériel</Header>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Item.Group>
          {
            tools.map((tool, i) =>
              i !== tools.length - 1 ?
              <Fragment key={i}>
                <ToolItem tool={tool} />
                <Divider />
              </Fragment>
              :
              <Fragment key={i}>
                <ToolItem tool={tool} />
              </Fragment>
            )
          }
        </Item.Group>
      </Segment>
    </Grid.Column>
  </Grid.Row>
);

export default Tools;
