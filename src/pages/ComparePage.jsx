import BreadCrumb from "../components/common/BreadCrumb";
import Compare from "../components/pages/compare/Compare";

function ComparePage() {
  return (
    <div>
      <BreadCrumb page="Compare" title="Product Related" />
      <Compare />
    </div>
  );
}

export default ComparePage;
