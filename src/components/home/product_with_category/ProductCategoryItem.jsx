import All from "../../../assets/img/all-category-img.webp";

function ProductCategoryItem({
  img = All,
  categoryName = "All Items",
  className = "",
  onClick,
}) {
  return (
    <div className="product_category" onClick={onClick}>
      <figure onClick={onClick}>
        <img src={img} alt={categoryName} />
      </figure>
      <p className={className} onClick={onClick}>
        {categoryName}
      </p>
    </div>
  );
}

export default ProductCategoryItem;
