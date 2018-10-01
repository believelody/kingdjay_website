import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.setBackgroundImage('https://www.studio-m.fr/sites/default/files/2017-12/formation-dj_0.jpg');
  }

  render() {
    return (
      <Container textAlign='center' fluid={window.screen.width < 750 ? true : false}>
        <Carousel
          className='carousel'
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
          swipeable={window.screen.width < 750 ? true : false}
        >
          <div>
            <img src="https://faceafrique.com/wp-content/uploads/2017/11/dj_arafat_au_bataclan_en_decembre.jpg" />
          </div>
          <div>
            <img src="http://www.boraclub.fr/rep/rep_article/2011-04-26_152336_Dj-Assad.jpg" />
          </div>
          <div>
            <img src="http://static1.purepeople.com/articles/3/20/93/73/@/2804895-trey-smith-dj-ace-fils-aine-de-will-s-950x0-1.jpg" />
          </div>
        </Carousel>
        <p style={{fontSize: '2em'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
          In ultricies blandit pretium. Nullam tempor varius nisl, vel cursus odio tempor eget. Integer viverra rhoncus rhoncus. Aenean at ultrices metus. Donec vel eros ac quam sodales ultrices in nec erat. Vestibulum euismod quis arcu at congue. Vestibulum tristique tincidunt quam, in tincidunt nisl gravida eu. Donec mi est, sollicitudin sed risus sed, tempus tristique nisi. Suspendisse sed tellus a eros molestie gravida. Aenean vel elit non diam blandit fermentum eu eu nulla. Aliquam consectetur lacus eu lorem aliquet, sit amet aliquet tellus gravida. Duis pellentesque justo at dui euismod, quis viverra nunc interdum. Nam enim ex, aliquet eu urna in, fringilla porttitor ligula.
          Praesent tempus sit amet libero in mattis. Suspendisse tristique enim justo, et gravida nunc aliquet at. Sed at nibh id risus hendrerit porta. Nunc mi velit, tempus ut fringilla nec, cursus vel sem. Donec blandit mattis blandit. Nunc imperdiet eleifend eros, sit amet tincidunt diam euismod ac. Ut neque libero, tristique ut efficitur at, dapibus eu erat. Nulla lorem leo, dignissim eu mauris fringilla, malesuada ultrices sapien. Etiam pellentesque nisl sed ante tempus semper. Morbi ornare, nibh ac posuere hendrerit, sem metus eleifend leo, et rhoncus diam justo quis elit.
          Suspendisse scelerisque sed risus a pretium. Vivamus vitae diam posuere, mollis dolor at, mollis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum, quam vitae vehicula tristique, felis metus pulvinar risus, eget dictum urna neque nec arcu. Ut mattis laoreet ex sed consectetur. Fusce nec felis ante. Aenean non porta mauris. Ut suscipit, erat id vulputate accumsan, justo turpis aliquam nibh, non efficitur risus risus sit amet mi. Proin justo lectus, egestas porttitor porta sit amet, ultrices sed lectus. Donec aliquet pretium felis id euismod.
        </p>
      </Container>
    );
  }

}

export default Home;
