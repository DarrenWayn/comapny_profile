import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Darren (Showtime)">
        Darren and this test company profile are meant to be the modern cool ui
        site that will always catch your attention
      </Review>
    </CarouselItem>

    <CarouselItem index={1}>
      <Review by="Darren (Showtime)">
        Darren and this test company profile are meant to be the modern cool ui
        site that will always catch your attention
      </Review>
    </CarouselItem>

    <CarouselItem index={2}>
      <Review by="Darren (Showtime)">
        Darren and this test company profile are meant to be the modern cool ui
        site that will always catch your attention
      </Review>
    </CarouselItem>

    <CarouselItem index={3}>
      <Review by="Darren (Showtime)">
        Darren and this test company profile are meant to be the modern cool ui
        site that will always catch your attention
      </Review>
    </CarouselItem>

    <CarouselItem index={4}>
      <Review by="Darren (Showtime)">
        Darren and this test company profile are meant to be the modern cool ui
        site that will always catch your attention
      </Review>
    </CarouselItem>
  </Carousel>
);
export default Testimonials;
