import {Container,Form,Button} from 'react-bootstrap'
import './FormRight.css'
function FormRight() {
    return <>
        <Container className='formRightContainer'>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='inputBox' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className='inputBox' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" className='inputBox' rows={3} />
                </Form.Group>
                <div className='d-grid'>
                <Button variant="secondary" type="submit">
                    Send
                </Button>
                </div>
            </Form>
        </Container>
    </>
}

export default FormRight;