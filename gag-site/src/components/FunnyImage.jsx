import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Image2 from '../assets/lol.jpg';

function Image21() {
  return (
    <Container>
        <Col xs={6} md={4}>
          <Image src={Image2} roundedCircle />
        </Col>
    </Container>
  );
}

export default Image21;