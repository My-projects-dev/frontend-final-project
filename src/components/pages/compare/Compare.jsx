import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import datas from "../../../Datas";
import NotFound from "../../../pages/NotFound";

const { products } = datas;

function Compare() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const currentPage = Number(id) || 1;

  const product = products.find(function (item) {
    return item.id == currentPage;
  });

  if (!product) {
    return <NotFound />;
  }

  function getRandomProductExcept(products, excludedId) {
    const filtered = products.filter((p) => p.id !== excludedId);

    if (!filtered.length) return null;

    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  const randomProduct = getRandomProductExcept(products, currentPage);

  return (
    <div className="compare_container">
      <div className="compare_wrapper">
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <td>
                <div className="img_area">
                  <Link to={`/product/${product?.id}`}>
                    <figure>
                      <img
                        src={product?.images[0]}
                        alt={product?.productName}
                      />
                    </figure>
                  </Link>
                  <Link
                    className="button"
                    to="/cart"
                    onClick={(e) => {
                      if (product && product?.stock === "Out Stock") {
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
                </div>
              </td>
              <td>
                <div className="img_area">
                  <Link to={`/product/${randomProduct?.id}`}>
                    <figure>
                      <img
                        src={randomProduct?.images[0]}
                        alt={randomProduct?.productName}
                      />
                    </figure>
                  </Link>
                  <Link
                    className="button"
                    to="/cart"
                    onClick={(e) => {
                      if (
                        randomProduct &&
                        randomProduct?.stock === "Out Stock"
                      ) {
                        e.preventDefault();
                        toast.error("This product is out of stock!");
                        return;
                      }

                      dispatch(
                        addToCart({
                          id: randomProduct?.id,
                          quantity: 1,
                        }),
                      );
                      toast.success("Product added to cart!");
                    }}
                  >
                    ADD TO CART
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <th>Product Name</th>
              <td className="title">{product?.productName}</td>
              <td className="title">{randomProduct?.productName}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{product?.description}</td>
              <td>{randomProduct?.description}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{product?.new_price}</td>
              <td>{randomProduct?.new_price}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{product?.color}</td>
              <td>{randomProduct?.color}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{product?.size}</td>
              <td>{randomProduct?.size}</td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>{product?.stock}</td>
              <td>{randomProduct?.stock}</td>
            </tr>
            <tr>
              <th>Rating</th>
              <td>
                <div className="star_container">
                  <ul>
                    {[...Array(product?.rating)].map((_, i) => (
                      <li key={i}>
                        <i className="pe-7s-star star"></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td>
                <div className="star_container">
                  <ul>
                    {[...Array(randomProduct?.rating)].map((_, i) => (
                      <li key={i}>
                        <i className="pe-7s-star star"></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Compare;
