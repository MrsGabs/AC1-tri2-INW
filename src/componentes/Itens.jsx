import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgProduto from '../../img/mochila.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import json from "../../db.json"

function Item(){
    return(
        <div>
          <br />
    <Row xs={1} md={2} className="g-0">
      {json.products.map((id) => (
        <Col className='centro' key={id}>
        <Card style={{ width: '80%'}}>
          <Card.Img alt="imagem produto exemplo" variant="top" src={imgProduto} />
          <Card.Body>
            <Card.Title>{id.name}</Card.Title>
            <Card.Text>
              {id.price}
            </Card.Text>
            <Button style={{ width: '100%'}} variant="dark">Comprar</Button>
          </Card.Body>
        </Card>
      </Col>
      )
      
      )}
    </Row>
      </div>
    )
}

export default Item