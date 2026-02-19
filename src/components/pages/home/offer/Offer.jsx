import { Link } from "react-router-dom";

function Offer({ offer }) {
  return (
    <div className="offer">
      <div className="offer__content">
        <span>{offer.discoun}</span>
        <h2>{offer.title}</h2>
        <Link to="/shop">Shop Now</Link>
      </div>
      <img src={offer.img} alt={offer.title} />
    </div>
  );
}

export default Offer;
