import Carousel from 'react-bootstrap/Carousel';
import imgBone from '../../img/bone.jpg'
import imgBola from '../../img/bola.jpg'
import imgTenis from '../../img/tenis.jpg'

function Slide(){
    return(
        <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgBone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Boné</h2>
          <p>Boné Pike</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgBola}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Bola</h2>
          <p>Bola Copa do Mundo 2014</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgTenis}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Tênis</h2>
          <p>
            Tênis Air Jordan One
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
export default Slide