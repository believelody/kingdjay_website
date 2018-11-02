import React from 'react';
import { Segment, Image, Header, Divider, Grid } from 'semantic-ui-react';

const TeamItem = ({team, floated}) => (
  <Grid.Column className='team-item'>
    <Segment raised className='team-segment'>
      {
        window.screen.width >= 1024 && <Image floated={floated} src={team.fields.file.url} size='medium' rounded />
      }
      {
        window.screen.width < 1024 && <Image centered src={team.fields.file.url} size='medium' rounded />
      }
      <Divider horizontal>
        <Header size='large' textAlign='center'>{team.fields.title}</Header>
      </Divider>
      <Header size='small'>
        {team.fields.description}
      </Header>
    </Segment>
  </Grid.Column>
);

export default TeamItem;
