import { Container, Row, Col } from 'react-bootstrap'
import './Form.css'
import FormLeft from "../FormLeft"
import FormRight from "../FormRight"

function Form() {
    return <>
        <Container className='border formContainer d-flex align-items-center justify-content-center'>
        <Row>
            <Col sm={4} className='leftColumn'>
                <FormLeft />
            </Col>
            <Col sm={8} className='rightColumn'>
                    <h2>Contact Us</h2>
                <FormRight />
            </Col>
        </Row>
        </Container>
    </>
}

export default Form