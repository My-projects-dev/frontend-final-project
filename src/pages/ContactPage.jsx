import BreadCrumb from "../components/common/BreadCrumb";
import Contact from "../components/pages/contact/Contact";
import Features from "../components/pages/home/feature/Features";

function ContactPage() {
  return (
    <>
      <BreadCrumb page="Contact" title="Contact Us" />
      <Features />
      <Contact />
    </>
  );
}

export default ContactPage;
