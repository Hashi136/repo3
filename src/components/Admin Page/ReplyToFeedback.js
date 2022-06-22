import { useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import { Container, Form, InputGroup,Button } from 'react-bootstrap'
import  Axios  from 'axios';
function ReplyToFeedback({ data }) {

    const { id } = useParams();

    const newPerson = data.filter((person) => person.id === parseInt(id))
    const name = newPerson[0].fName + " " + newPerson[0].lName;
    const email = newPerson[0].email;

    const [subject, setSubject] = useState('')
    const [reply, setReply] = useState('')
    const submitDetails = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/sendreplies', {
            name: name,
            email : email,
            subject: subject,
            reply: reply
        }).then(() => {
                console.log(name,email,subject,reply)
            alert('Successfully sent reply!')
        })
    }

    return <>
        <Container>
            <h2>Reply</h2>
                <Form className='p-3'>
                <fieldset disabled>
                <Form.Group className="mb-5">
                    <InputGroup className="mb-3">
                            <InputGroup.Text>Name</InputGroup.Text>       
                            <Form.Control className='borderEffect' type="text" value={name} readOnly />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-5">
                    <InputGroup className="mb-3">
                    <InputGroup.Text>Email to</InputGroup.Text>       
                            <Form.Control className='borderEffect' type="text" value={email} readOnly/>
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
                        Send Email
                </Button>
                <Button variant="dark" as={Link} to='/repliesofcontactUs' className=' w-100 mt-5'>Go Back</Button>
                </Form>
        </Container>
    </>
}

export default ReplyToFeedback;