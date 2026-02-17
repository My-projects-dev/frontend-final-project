import datas from "../../Datas";

const { features } = datas;

function Features() {
  return (
    <section className="features_section">
      {features.map((item) => (
        <div className="feature" key={item.id}>
          <div className="feature__border"></div>
          <figure className="features__img">
            <img src={item.img} alt={item.title} />
          </figure>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;
