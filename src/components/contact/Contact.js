import React, { Component } from 'react';
import { Container, Form, Button, Header, Input, Select, TextArea, Segment, Label } from 'semantic-ui-react';
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';

const options = [
  { key: 'marriage', text: 'Marriage', value: 'marriage' },
  { key: 'anniversaire', text: 'Anniversaire', value: 'anniversaire' },
  { key: 'animation', text: 'Animation Soirée', value: 'animation' },
  { key: 'materiel', text: 'Location Matériel', value: 'materiel' },
]

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  handleChange = (e, {name, value}) => this.setState({ [name]: value });

  render() {
    const { date } = this.state;
    return (
      <Container>
        <Header size='large' textAlign='center' style={{color: 'white'}}>Contact</Header>
        <Header size='medium' textAlign='center' style={{color: 'white'}}>Une interrogation? Laissez moi un message et je reviendrai vers vous</Header>
        <Segment style={{padding: '3%'}}>
          <Form size='large'>
            <Form.Group>
              <Form.Field required width={8} control={Input} label='Prénom' placeholder='Prénom' />
              <Form.Field required width={8} control={Input} label='Email' placeholder='johndoe@yahoo.fr' />
            </Form.Group>
            <Form.Group>
              <Form.Field width={8} required control={Select} label='Votre demande' options={options} placeholder='Votre demande' />
              <Form.Field width={8}>
                <label>Date</label>
                <ModernDatepicker
                  name="date"
                  date={date}
                  placeholder="Select a date"
                  showBorder
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field control={TextArea} label='Texte' placeholder='Dites moi tout...' />
            <Form.Field control={Button} color='linkedin'>Envoyer</Form.Field>
          </Form>
        </Segment>
      </Container>
    );
  }

}

export default Contact;
