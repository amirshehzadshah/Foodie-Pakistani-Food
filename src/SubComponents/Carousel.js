import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import ProfilePic from "../Assets/john-doe-image.png";
import Rating from "./Rating";
import { Card } from "@mui/material";

const slides = [
  {
    image: ProfilePic,
    desc: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.',
    rating: 4,
    title: 'John Doe'
  },
  {
    image: ProfilePic,
    desc: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.',
    rating: 3,
    title: 'John Doe'
  },
  {
    image: ProfilePic,
    desc: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.',
    rating: 5,
    title: 'John Doe'
  },
];

const Carousel = () => {
  return (
    <ReactCarousel
      className="testimonial-react-carousel"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {slides.map((slide) => (
        <Card className="testimonial-card" key={slide.title}>
          <div className="testimonial-section-bottom">
            <div className="testimonial-image-wrapper">
              <img src={ProfilePic} alt="" />
            </div>
            <p className="testimonial-description-wrapper">{slide.desc}</p>
            <div className="testimonials-stars-container">
              <Rating rating={slide.rating} />
            </div>
            <h2>{slide.title}</h2>
          </div>
        </Card>
      ))}
    </ReactCarousel>
  )
};

export default Carousel;
