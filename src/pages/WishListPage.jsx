import BreadCrumb from "../components/common/BreadCrumb";
import Wishlist from "../components/pages/Wishlist";

function WishListPage() {
  return (
    <>
      <BreadCrumb page="Wishlist" title="Product Related" />
      <Wishlist />
    </>
  );
}

export default WishListPage;
