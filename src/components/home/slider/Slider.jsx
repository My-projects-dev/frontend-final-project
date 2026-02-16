import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import datas from "../../../Datas";
import SliderTopImg from "../../../assets/img/slider/slider-top-img.webp";
import SliderBottomImg from "../../../assets/img/slider/slider-bottom-img.webp";

const { slider } = datas;

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const leftClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  };

  const rightClick = () => {
    setCurrentIndex((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
  };

  const slide = slider[currentIndex];

  return (
    <section className="slider_section">
      <div className="slider_area">
        <i
          className="pe-7s-angle-left btn-left btn-angle"
          onClick={leftClick}
        ></i>

        <div className="slide_wrp">
          <figure className="slider-top-img">
            <img src={SliderTopImg} alt="hot pepper" />
          </figure>

          <div className="slide">
            <div className="slide__data_area">
              <p>{slide.title}</p>
              <h2>{slide.subtitle}</h2>
              <Link to="/shop">SHOP NOW</Link>
            </div>
            <div className="slide__img_area">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>

          <figure className="slider-bottom-img">
            <img src={SliderBottomImg} alt="awocado" />
          </figure>
        </div>

        <div className="dot_area">
          {slider.map((item, index) => (
            <span
              className={index == currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        <i
          className="pe-7s-angle-right btn-rght btn-angle"
          onClick={rightClick}
        ></i>
      </div>
    </section>
  );
}
export default Slider;
