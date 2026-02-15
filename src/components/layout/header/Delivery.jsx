import datas from "../../../Datas";

function Delivery() {
  return (
    <p className="header-top__delivery">
      Free delivery on order over <span>{datas.delivery_price}</span>
    </p>
  );
}
export default Delivery;
