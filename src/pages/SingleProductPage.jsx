import BreadCrumb from "../components/common/BreadCrumb";
import Product from "../components/pages/single_product/Product";

function SingleProductPage() {
  return (
    <div>
      <BreadCrumb page="Shop Pages" title="Shop Layout" />
      <Product />
    </div>
  );
}

export default SingleProductPage;
