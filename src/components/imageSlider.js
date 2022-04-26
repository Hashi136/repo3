import { Carousel,Button } from "react-bootstrap";
import imgSlider1 from '../images/imgSlider1.png'
import imgSlider2 from '../images/imgSlider2.png'
import imgSlider3 from '../images/imgSlider3.png'
import './imageSlider.css'
function ImageSlider() {
    return <>
        <Carousel fade className="my-carousel">
            <Carousel.Item>
                <img
                className="d-block w-100 my-img"
                src={imgSlider1}
                alt="First slide"
                height="300px"
                width="100%"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui sit nihil, recusandae deserunt officiis? Provident dicta et architecto neque.</p>
                    <Button variant="outline-primary" className="mb-2" href="#">Register Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 my-img"
                src={imgSlider2}
                alt="Second slide"
                height="300px"
                width="100%"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="outline-warning" className="mb-2" href="#">Donate</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 my-img"
                src={imgSlider3}
                alt="Third slide"
                height="300px"
                width="100%"
                />

            
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button variant="outline-danger" className="mb-2" href="#">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </>
}

export default ImageSlider