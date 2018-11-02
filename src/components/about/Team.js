import React, { Component } from 'react';
import { Segment, Header, Divider, Grid } from 'semantic-ui-react';

import TeamItem from './TeamItem';

const Team = ({team}) => (
  <Grid.Row>
    <Grid.Column>
      <Segment raised>
        <Header textAlign='center' size='huge'>Mon équipe</Header>
      </Segment>
    </Grid.Column>
    {
      team.map((team, i) =>
        i%2 !== 0 ?
        <TeamItem key={i} floated='right' team={team} />
        :
        <TeamItem key={i} floated='left' team={team} />
      )
    }
  </Grid.Row>
);

export default Team;
