import datas from "../../../Datas";
import FeatureItem from "./FeatureItem";

const { features } = datas;

function Features() {
  return (
    <section className="features_section">
      {features.map((item) => (
        <FeatureItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default Features;
