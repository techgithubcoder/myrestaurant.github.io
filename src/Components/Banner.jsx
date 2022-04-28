import React from 'react'
import { CarouselItem } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <Carousel>

            <CarouselItem>
            <img src="../images/banner/first.jpg"  alt="FirstImage"  height={"250px"} className="w-100" />
            </CarouselItem>

            <CarouselItem>
            <img src="../images/banner/second.jpg"  alt="FirstImage"  height={"250px"} className="w-100" />
            </CarouselItem>

            <CarouselItem>
            <img src="../images/banner/third.jpg"  alt="FirstImage"  height={"250px"} className="w-100" />
            </CarouselItem>


        </Carousel>

            )
}

export default Banner