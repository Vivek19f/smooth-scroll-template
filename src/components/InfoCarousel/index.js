import {Col, Row, Container, Carousel} from 'react-bootstrap'
import Slider from 'react-slick';
import Icon1 from '../../images/part-load.svg'
import Icon2 from '../../images/parcel2.svg'
import Icon3 from '../../images/door-to-door.svg'
import Icon4 from '../../images/time-bond1.svg'

import React, { Component } from 'react';
import {CarouselContainer, CarouselH1} from './InfoCarousel'

class InfoCarousel extends Component {
    
    render() { 
        return (   
            <CarouselContainer  id="infocarousel">
            <CarouselH1>Services</CarouselH1>
            <Carousel style={{width:"75%"}}  indicators={false} autoplay={false}>
                    <Carousel.Item className="">
                        <Row className="p-5 m-5 justify-content-center">
                            <Col sm={6}>
                                <img
                                    className="d-block w-100"
                                    src={Icon1}
                                    alt="First slide"
                                />
                            
                            </Col>
                            <Col sm={6}>
                                <Carousel.Caption style={{bottom: "0!important", top:"30%", color: "white"}}>
                                    <h3 className="text-white">First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="p-5 m-5 justify-content-center">
                            <Col sm={6}>
                                <img
                                    className="d-block w-100"
                                    src={Icon2}
                                    alt="First slide"
                                />
                            
                            </Col>
                            <Col sm={6}>
                                <Carousel.Caption style={{bottom: "0!important", top:"30%", color: "white"}}>
                                    <h3 >First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="p-5 m-5 justify-content-center">
                            <Col sm={6}>
                                <img
                                    className="d-block w-100"
                                    src={Icon3}
                                    alt="First slide"
                                />
                            
                            </Col>
                            <Col sm={6}>
                                <Carousel.Caption style={{bottom: "0!important", top:"30%", color: "white"}}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="p-5 m-5 justify-content-center">
                            <Col sm={6}>
                                <img
                                    className="d-block w-100"
                                    src={Icon4}
                                    alt="First slide"
                                />
                            
                            </Col>
                            <Col sm={6}>
                                <Carousel.Caption style={{bottom: "0!important", top:"30%", color: "white"}}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Col>
                        </Row>
                    </Carousel.Item>
            </Carousel>
            </CarouselContainer>  
          );
    }
}
 
export default InfoCarousel;