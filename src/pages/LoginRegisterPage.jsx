import BreadCrumb from "../components/common/BreadCrumb";
import LoginRegister from "../components/pages/login_register/LoginRegister";

function LoginRegisterPage() {
  return (
    <>
      <BreadCrumb page="Login | Register" title="Login | Register" />
      <LoginRegister />
    </>
  );
}

export default LoginRegisterPage;
