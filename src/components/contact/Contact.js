import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactLoad, sendEmail } from '../../actions/contactAction';
import {
  Container,
  Form,
  Button,
  Header,
  Input,
  Select,
  TextArea,
  Segment,
  Label,
  Dimmer,
  Loader,
  Message
} from 'semantic-ui-react';
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';

// const options = [
//   { key: 'marriage', text: 'Marriage', value: 'marriage' },
//   { key: 'anniversaire', text: 'Anniversaire', value: 'anniversaire' },
//   { key: 'animation', text: 'Animation Soirée', value: 'animation' },
//   { key: 'materiel', text: 'Location Matériel', value: 'materiel' },
// ]

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      request: '',
      date: moment(),
      text: '',
      options: []
    };
  }

  componentDidMount() {
    this.props.contactLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact.contact && nextProps.contact.contact.background) {
      this.props.setBackgroundImage(nextProps.contact.contact.background.fields.file.url);
      if (nextProps.contact.contact.requests.length > 0) {
        this.setState({
          options: nextProps.contact.contact.requests.map(request => ({
            key: request.toLowerCase(),
            value: request.toLowerCase(),
            text: request,
          }))
        });
      }
    }
  }

  handleChange = (e, {name, value}) => this.setState({ [name]: value });

  handleDate = date => this.setState({ date });

  handleSubmit = e => {
    const { name, email, request, date, text } = this.state;
    e.preventDefault();
    let body = `
      <h3>Requête: ${request}</h3>
      <br />
      <br />
      <i>Date: ${typeof date === 'string' ? date : 'Non mentionné'}</i>
      <br />
      <p>${text}</p>
    `;

    const data = {
      from: name,
      to: ['believelody@gmail.com'],
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: body
    };

    this.props.sendEmail(data);
  }

  render() {
    const { name, email, request, date, text, options } = this.state;
    const { loading, contact, status } = this.props.contact;
    return (
      <Fragment>
        {
          loading &&
          <Dimmer>
            <Loader content='Chargement' />
          </Dimmer>
        }
        {
          !loading && contact &&
          <Container>
            <Header size='large' textAlign='center' style={{color: 'white'}}>Contact</Header>
            <Header size='medium' textAlign='center' style={{color: 'white'}}>Une interrogation? Laissez moi un message et je reviendrai vers vous</Header>
            <Segment style={{padding: '3%'}}>
              <Form loading={loading} onSubmit={this.handleSubmit} size='large'>
                <Form.Group>
                  <Form.Field required name='name' value={name} onChange={this.handleChange} width={8} control={Input} label='Prénom' placeholder='Prénom' />
                  <Form.Field required name='email' value={email} onChange={this.handleChange} width={8} control={Input} label='Email' placeholder='johndoe@yahoo.fr' />
                </Form.Group>
                <Form.Group>
                  <Form.Field width={8} required name='request' value={request} onChange={this.handleChange} control={Select} label='Votre demande' options={options} placeholder='Votre demande' />
                  <Form.Field width={8}>
                    <label>Date</label>
                    <ModernDatepicker
                      date={date}
                      placeholder="Select a date"
                      showBorder
                      onChange={date => this.handleDate(date)}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Field required name='text' value={text} onChange={this.handleChange} control={TextArea} label='Texte' placeholder='Dites moi tout...' />
                {
                  !loading && status === 200 &&
                  <Message
                    success
                    header='Message envoyé'
                    content='Merci pour votre message. Nous vous rappellons après avoir étudier votre demande'
                  />
                }
                {
                  !loading && status === 404 &&
                  <Message
                    error
                    header='Message non envoyé'
                    content="Désolé, votre requête n'a pu nous être transmis. Veuillez réessayer ultérieurement"
                  />
                }
                <Form.Field control={Button} color='linkedin'>Envoyer</Form.Field>
              </Form>
            </Segment>
          </Container>
        }
      </Fragment>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  contactLoad: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(mapStateToProps, { contactLoad, sendEmail })(Contact);
