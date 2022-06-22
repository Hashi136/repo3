import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom"
import { Button, Row, Col } from "react-bootstrap"
import './OmegaClubs.css'
import leoLogo from '../../images/leoLogo.png'
import axios from 'axios'

function OmegaClubs() {
    const [isAdmin,setIsAdmin] =useState(true)

    const [replyList, setReplyList] = useState([])
    const getList = async () => {
        const response = await Axios.get('http://localhost:5000/api/clubdetails');
        const replyList = await response.data;
        setReplyList(replyList)
        // console.log(replyList)
    }
    
    useEffect(() => {
       getList()
    }, [])

    // delete club
    const deleteClub = (id) => {
        if (window.confirm("Are you sure that you wanted to delete the club?")) {
            axios.delete(`http://localhost:5000/api/removeclub/${id}`)
            // setTimeout(() => window.location.reload(),500)
            window.location.reload(false)
        }
    }

    return <>
        {/* <h4>Omega club</h4> */}
        <div className="d-flex justify-content-end">
                <Button variant="success" onClick={()=>{setIsAdmin(!isAdmin)}}>{ isAdmin ? "Admin" : "Guest User"}</Button>
        </div>
        <div className="omegaContainer">
            <div className="omegaclub d-flex justify-content-end">
                <br />
                {isAdmin?<Button variant="success" as={Link} to='/omegaclub'>Add Club</Button>:null}
          
        </div>
            {/* <h2>Omega Club</h2>         */}
        </div>
        <Row>
        {replyList.map(listItem => {
            const { id,image,title,description } = listItem
            return (
                <Col sm={3} key={id} className="leoCol mt-4">
                    <h4>{title}</h4>              
                    {console.log(image)}
                    {image !== null ? 
                            <img 
                            src={`../../../uploads/${image}`}
                            alt="" 
                            height="150px" 
                            className='leoImage'   
                        /> :
                            <img 
                            src={leoLogo} 
                            alt="default" 
                            height="150px"
                            className='leoImage'
                            />}                    
                    <p className='mt-2'>{description}</p>
                    {isAdmin ? <div> <Button variant='primary' as={Link} to={`/updateclub/${id}`}>Edit</Button>{" "}
                    <Button variant='danger' onClick={() => { deleteClub(id) }}>Delete</Button>{" "} </div>:null}
                    
                    <br />
                    <Button variant='info' as={Link} to={`/viewleoclub/${id}`} className="w-50">View</Button>{" "}

                </Col>
            )
        })}
            </Row>
    </>
}

export default OmegaClubs