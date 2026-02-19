import BreadCrumb from "../components/common/BreadCrumb";
import Shop from "../components/pages/shop/Shop";

function ShopPage() {
  return (
    <div>
      <BreadCrumb page="Shop Pages" title="Shop Layout" />
      <Shop />
    </div>
  );
}

export default ShopPage;
