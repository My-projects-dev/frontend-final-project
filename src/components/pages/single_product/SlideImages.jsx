import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function SlideImages({ images = [], currentImageIndex = 0, setModal }) {
  const [index, setIndex] = useState(currentImageIndex);

  let imageCount = images.length;

  function previousImage() {
    if (index == 0) {
      setIndex(imageCount - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function nextImage() {
    if (index == imageCount - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="slayd-images" onClick={() => setModal(false)}>
      <FontAwesomeIcon
        icon={faCaretLeft}
        className="left"
        onClick={(e) => {
          e.stopPropagation();
          previousImage();
        }}
      />
      <div
        className="slayd-images__img_are"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon icon={faXmark} onClick={() => setModal(false)} />
        <figure>
          <img src={images[index]} />
        </figure>
        <span>
          {index + 1} of {images.length}
        </span>
      </div>
      <FontAwesomeIcon
        icon={faCaretRight}
        className="right"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      />
    </div>
  );
}

export default SlideImages;
