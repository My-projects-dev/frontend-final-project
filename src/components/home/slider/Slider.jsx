import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import datas from "../../../Datas";
import SliderTopImg from "../../../assets/img/slider/slider-top-img.webp";
import SliderBottomImg from "../../../assets/img/slider/slider-bottom-img.webp";

const { slider } = datas;

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((currentIndex + 1) % slider.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const changeSlide = (i) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(i);
      setVisible(true);
    }, 400);
  };

  const slide = slider[currentIndex];

  return (
    <section className="slider_section">
      <div className="slider_area">
        <i
          className="pe-7s-angle-left btn-left btn-angle"
          onClick={() =>
            changeSlide(
              currentIndex - 1 < 0 ? slider.length - 1 : currentIndex - 1,
            )
          }
        ></i>

        <div className="slide_wrp">
          <figure className="slider-top-img">
            <img src={SliderTopImg} alt="hot pepper" />
          </figure>

          <div className="slide">
            <div className="slide__data_area">
              <p className={visible ? "title-enter" : ""}>{slide.title}</p>
              <h2 className={visible ? "subtitle-enter" : ""}>
                {slide.subtitle}
              </h2>
              <Link to="/shop" className={visible ? "btn-enter" : ""}>
                SHOP NOW
              </Link>
            </div>

            <div
              className={`slide__img_area ${visible ? "fade-in" : "fade-out"}`}
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>

          <figure className="slider-bottom-img">
            <img src={SliderBottomImg} alt="awocado" />
          </figure>
        </div>

        <div className="dot_area">
          {slider.map((_, idx) => (
            <span
              className={idx === currentIndex ? "active" : ""}
              onClick={() => changeSlide(idx)}
            ></span>
          ))}
        </div>

        <i
          className="pe-7s-angle-right btn-rght btn-angle"
          onClick={() => changeSlide((currentIndex + 1) % slider.length)}
        ></i>
      </div>
    </section>
  );
}

export default Slider;
