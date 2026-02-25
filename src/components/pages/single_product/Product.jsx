import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import datas from "../../../Datas";
import InputNumber from "../../common/InputNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faPinterestP,
  faTumblr,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import SlideImages from "./SlideImages";

import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../store/wishlistSlice";
import { addToCart } from "../../../store/cartSlice";

const { products } = datas;

function Product() {
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);

  const { id } = useParams();
  const currentPage = Number(id) || 1;

  const product = products.find(function (item) {
    return item.id == currentPage;
  });

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isLiked) {
      dispatch(removeFromWishlist(product.id));
      toast.warning("Product removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Product added to wishlist");
    }
  };

  return (
    <div className="product_wrapper">
      <div className="product_big_image">
        <img
          src={product.images[imageIndex]}
          alt={product.productName}
          onClick={() => setModal(true)}
        />
      </div>
      <div className="product_datas">
        <div className="product_datas__main">
          <div>
            <h1 className="product_datas__product_name">
              {product?.productName}
            </h1>

            <span className="product_datas__new_price">
              ${product?.new_price}
            </span>
            <span className="product_datas__old_price">${product?.price}</span>

            <ul>
              {[...Array(product?.rating)].map((_, i) => (
                <li key={i}>
                  <i className="pe-7s-star star"></i>
                </li>
              ))}
            </ul>
          </div>
          <p className="product_datas__description">{product?.description}</p>
          <div className="product_datas__shopping_area">
            <InputNumber value={quantity} onChange={setQuantity} />
            <Link
              to="/cart"
              onClick={(e) => {
                if (product && product.stock === "Out Stock") {
                  e.preventDefault();
                  toast.error("This product is out of stock!");
                  return;
                }

                dispatch(
                  addToCart({
                    id: product?.id,
                    quantity: 1,
                  }),
                );
                toast.success("Product added to cart!");
              }}
            >
              ADD TO CART
            </Link>
            <i
              className={`pe-7s-like ${isLiked ? "liked" : ""}`}
              onClick={handleWishlist}
            ></i>
          </div>
          <p className="product_datas__Categories">
            Categories :{product?.category}
          </p>
          <p className="product_datas__tags">
            Product Tags :{product?.product_tags}
          </p>

          <div className="product_datas__shares">
            <p>Share: </p>
            <ul>
              <li>
                <Link to="https://www.pinterest.com/">
                  <FontAwesomeIcon icon={faPinterestP} className="social" />
                </Link>
              </li>
              <li>
                <Link to="https://x.com/">
                  <FontAwesomeIcon icon={faXTwitter} className="social" />
                </Link>
              </li>
              <li>
                <Link to="https://www.tumblr.com/">
                  <FontAwesomeIcon icon={faTumblr} className="social" />
                </Link>
              </li>
              <li>
                <Link to="https://dribbble.com/">
                  <FontAwesomeIcon icon={faDribbble} className="social" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="product_datas__images">
          {product.images.map((img, index) => (
            <figure key={index} onClick={() => setImageIndex(index)}>
              <img src={img} alt={product.productName} />
            </figure>
          ))}
        </div>
      </div>

      {modal && (
        <SlideImages
          images={product.images}
          currentImageIndex={imageIndex}
          setModal={setModal}
        />
      )}
    </div>
  );
}
export default Product;
