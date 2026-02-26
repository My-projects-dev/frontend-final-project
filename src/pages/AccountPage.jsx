import BreadCrumb from "../components/common/BreadCrumb";
import Account from "../components/pages/account/Account";

function AccountPage() {
  return (
    <>
      <BreadCrumb page="My Account" title="My Account" />
      <Account />
    </>
  );
}
export default AccountPage;
