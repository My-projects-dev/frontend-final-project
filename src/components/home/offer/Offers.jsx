import datas from "../../../Datas";
import Offer from "./Offer";

const { offers } = datas;
function Offers() {
  return (
    <section className="offer_section">
      {offers.map((offer) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </section>
  );
}
export default Offers;
