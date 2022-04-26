import { Container, Card, Button } from "react-bootstrap"
import leadership from '../../images/leadership.png'
import './Home.css'
function Home() {
    return <>
    <Container>
        <Card className="card gap-5">
            <Card.Img variant="top" src={leadership} className="cardImg"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>  
            <Card className="card gap-5" id="leadership">
            <Card.Img variant="top" src={leadership} className="cardImg"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card> 
            <Card className="card gap-5">
            <Card.Img variant="top" src={leadership} className="cardImg"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> 
    </Container>
    </>
}

export default Home