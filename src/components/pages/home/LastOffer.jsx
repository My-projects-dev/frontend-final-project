import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function LastOffer() {
  const targetDate = new Date("2026-05-10T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(e) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;

    setOffset({ x, y });
  }

  return (
    <section className="last_offer_section" onMouseMove={handleMouseMove}>
      <div className="img_container">
        <figure>
          <img
            src="https://template.hasthemes.com/harmic/harmic/assets/images/banner/inner-img/2-1-503x430.png"
            alt="pepper"
            style={{
              transform: `translate(${offset.x * -5}px, ${offset.y * -5}px)`,
              transition: "transform 0.15s ease-out",
            }}
          />
        </figure>
      </div>

      <div className="data_container">
        <h4>NEW OFFER PRODUCTS</h4>
        <h2>SAVE 20% OFF</h2>

        <div className="date_container">
          <div className="date">
            <p className="date__time">{timeLeft.days}</p>
            <div className="date__line"></div>
            <p className="date__text">Day</p>
          </div>

          <div className="date">
            <p className="date__time">{timeLeft.hours}</p>
            <div className="date__line"></div>
            <p className="date__text">Hr</p>
          </div>

          <div className="date">
            <p className="date__time">{timeLeft.minutes}</p>
            <div className="date__line"></div>
            <p className="date__text">Mins</p>
          </div>

          <div className="date">
            <p className="date__time">{timeLeft.seconds}</p>
            <div className="date__line"></div>
            <p className="date__text">Secs</p>
          </div>
        </div>

        <Link to="/shop/1">SHOP NOW</Link>
      </div>
    </section>
  );
}

export default LastOffer;
