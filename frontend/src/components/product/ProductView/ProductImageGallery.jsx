// ProductImageGallery.js
import React from "react";

function ProductImageGallery({ images }) {
  return (
    <div className="img-preview-container">
      {images.map((image, index) => (
        <div key={index} className={index === 0 ? "img-selected" : ""}>
          <img className="img-preview" src={image} alt="img-preview" />
        </div>
      ))}
    </div>
  );
}

export default ProductImageGallery;