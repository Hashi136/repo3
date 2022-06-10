import { useState } from 'react';
import { Container, Form, InputGroup,Button } from 'react-bootstrap'
import { Axios } from 'axios';
function ReplyToFeedback(props) {
    // firstName={fName} lastName={lName} emailAddress={ email }
    const {firstName,lastName,emailAddress} = props
    const [subject, setSubject] = useState('')
    const [reply, setReply] = useState('')
     const submitDetails = () => {
        Axios.post('http://localhost:5000/api/sendreplies', {
            subject: subject,
            reply:reply
        }).then(() => {
            alert('Successfully sent reply!')
        })
    }
    console.log(props);
 
    return <>
        <Container>
            <h2>Reply</h2>
                <Form className='p-3'>
                <fieldset disabled>
                <Form.Group className="mb-5">
                    <InputGroup className="mb-3">
                            <InputGroup.Text>Name</InputGroup.Text>       
                            <Form.Control className='borderEffect' type="text" value={ firstName }/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-5">
                    <InputGroup className="mb-3">
                    <InputGroup.Text>Email to</InputGroup.Text>       
                        <Form.Control className='borderEffect' type="text" value="shazina"/>
                    </InputGroup>
                </Form.Group>
                </fieldset>
                <Form.Group className="mb-5">
                    <InputGroup className="mb-3">
                    <InputGroup.Text>Subject</InputGroup.Text>       
                        <Form.Control className='borderEffect' type="text" onChange={(e) => {
                            setSubject(e.target.value)
                        }} />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Control as="textarea" aria-label="With textarea" placeholder='Reply message...' onChange={(e) => {
                            setReply(e.target.value)
                        }} />
                </Form.Group>
                    <Button variant="primary" type="submit" className=' w-100' onClick={submitDetails}>
                        Send Reply
                    </Button>
                </Form>
        </Container>
    </>
}

export default ReplyToFeedback;