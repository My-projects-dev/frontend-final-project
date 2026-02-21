import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ lastPage }) {
  const navigate = useNavigate();

  const { page } = useParams();

  const currentPage = Number(page) || 1;

  function prevPage() {
    if (currentPage > 1) {
      navigate(`/shop/${currentPage - 1}`);
    }
  }

  function nextPage() {
    if (currentPage < lastPage) {
      navigate(`/shop/${currentPage + 1}`);
    }
  }

  return (
    <div className="pagination">
      <ul>
        <li onClick={prevPage}>
          <FontAwesomeIcon icon={faChevronLeft} size="xs" />
        </li>
        {[...Array(lastPage)].map((_, i) => (
          <li
            key={i}
            onClick={() => {
              navigate(`/shop/${i + 1}`);
            }}
          >
            {i + 1}
          </li>
        ))}
        <li onClick={nextPage}>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </li>
      </ul>
    </div>
  );
}
export default Pagination;
