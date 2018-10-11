import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Image, Segment, Item, Header, Loader, Dimmer } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';

import { homeLoad } from '../../actions/homeAction';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.homeLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.home.home !== null && nextProps.home.home !== undefined && nextProps.home.home.background !== undefined) {
      console.log(nextProps.home.home);
      this.props.setBackgroundImage(nextProps.home.home.background.fields.file.url);

    }
  }

  render() {
    const { loading, home } = this.props.home;
    return (
      <Container textAlign='center' fluid={window.screen.width < 750 ? true : false}>
        {
          loading &&
            <Dimmer active>
              <Loader content="Chargement" />
            </Dimmer>
        }
        {
          !loading && home !== null && home !== undefined &&
          <Fragment>
            {
              home.carousel.length > 0 &&
              <Carousel
                className='carousel'
                infiniteLoop
                autoPlay
                showThumbs={false}
                showIndicators={false}
                swipeable={window.screen.width < 750 ? true : false}
                showArrows={window.screen.width >= 750 ? true : false}
              >
                {
                  home.carousel.map((carousel, i) =>
                    <div key={i}>
                      <Image src={carousel.fields.file.url} />
                    </div>
                  )
                }
              </Carousel>
            }
            <Segment>
              <Header size='large' textAlign='center' content='Témoignanges' subheader='Ils nous ont fait confiance' />
            </Segment>
            {
              home.testimony.length > 0 &&
              home.testimony.map((testimony, i) =>
                <Segment key={i}>
                  <Item.Group>
                    <Item>
                      <Item.Image size='small' src={testimony.fields.file.url} />
                      <Item.Content>
                        <Item.Header as='h3'>{testimony.fields.title}</Item.Header>
                        <Item.Description>
                          {testimony.fields.description}
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              )
            }
          </Fragment>
        }
      </Container>
    );
  }
}

Home.propTypes = {
  home: PropTypes.object.isRequired,
  homeLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, {homeLoad})(Home);
