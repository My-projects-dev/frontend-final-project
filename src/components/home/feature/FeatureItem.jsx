function FeatureItem({ item }) {
  return (
    <div className="feature">
      <div className="feature__border"></div>

      <figure className="features__img">
        <img src={item.img} alt={item.title} />
      </figure>

      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
