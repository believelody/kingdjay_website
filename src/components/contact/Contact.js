import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as emailjs from 'emailjs-com';
import axios from 'axios';

import { contactLoad } from '../../actions/contactAction';
import { Container, Form, Button, Header, Input, Select, TextArea, Segment, Label, Dimmer, Loader } from 'semantic-ui-react';
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
    // emailjs.init('user_ZAjgu13DldPppkW1OnXBx');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact.contact !== null && nextProps.contact.contact !== undefined && nextProps.contact.contact.background !== undefined) {
      // console.log(nextProps.event.event);
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

  sendEmail = e => {
    const { name, email, request, date, text } = this.state;
    e.preventDefault();
    // console.log({ name, email, request, date, text });
    // let subject = `Nouveau message de ${name}`;
    let body = `
      Requête: ${request}
      Date: ${typeof date === 'string' ? date : 'Non mentionné'}
      ${text}
    `;

    const data = {
      from: `${name} ${email}`,
      to: ['believelody@gmail.com'],
      subject: `Nouveau message de ${name}`,
      text: body
    };

    // mailgun.create(process.env.REACT_APP_MAILGUN_DOMAIN || 'your domain', data)
    //   .then(msg => console.log(msg))
    //   .catch(err => console.error(err));

    // emailjs.send('mailgun', 'email_form', template_params)
    //   .then(res => console.log('SUCCESS', res))
    //   .catch(err => console.log('FAILED...', err));

    // Email.send(
    //   email,
    //   'believelody@gmail.com',
    //   subject,
    //   body,
    //   'smtp.elasticemail.com',
    //   'believelody@gmail.com',
    //   '702e81bd-5ffe-4ee4-a12a-b9bedfebb068'
    // );
  }

  render() {
    const { name, email, request, date, text, options } = this.state;
    const { loading, contact } = this.props.contact;
    console.log(process.env.REACT_APP_MAILGUN_API_KEY, process.env.REACT_APP_MAILGUN_DOMAIN);
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
              <Form id='contactForm' size='large'>
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
  contact: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact
})

export default connect(mapStateToProps, { contactLoad })(Contact);
