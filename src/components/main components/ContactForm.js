import { Form, Button, Row, Col } from 'react-bootstrap'
import img from '../../images/form.png'
import './ContactForm.css'


function ContactForm() {
    return <>
<div class="d-flex justify-content-center">
                <img 
                        src={img} 
                        alt="formImage" 
                        height="344px"
                    className='formImage' />
                <Form className='p-3'>
                    <Row>
                    <Col lg={6}>
                    <Form.Group className="mb-5">
                        <Form.Control className='borderEffect' type="text" placeholder="First Name" />
                    </Form.Group>
                    </Col>
                     <Col lg={6}>
                    <Form.Group className="mb-5">
                        <Form.Control className='borderEffect' type="text" placeholder="Last Name" />
                    </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Control className='borderEffect' type="email" placeholder="Enter Your Email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                     <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className='borderEffect' as="textarea" placeholder="Message" rows={3} />
                    </Form.Group>
                    <Button variant="success" type="submit" className=' w-100'>
                        Submit
                    </Button>
                </Form>
            </div>
    </>
}

export default ContactForm