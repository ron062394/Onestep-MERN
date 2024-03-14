import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductList from "../components/ProductList";
import "./ProductView.css";
import Loading from "../components/Loading";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useAuthContext();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true); // State to track loading status
  const [mainImage, setMainImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://onestep-api.vercel.app/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Calculate total stocks based on sizes
        const totalStocks = data.sizes.reduce(
          (acc, size) => acc + size.quantity,
          0
        );
        // Merge the calculated total stocks into the product data
        const updatedProduct = { ...data, stocks: totalStocks };
        setProduct(updatedProduct);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleAddToCart = async () => {
    // Check if a size has been selected
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const cartData = {
      products: [
        {
          product: id,
          size: selectedSize, // Include the selected size
          quantity: quantity,
        },
      ],
    };

    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(cartData),
    });

    if (response.ok) {
      console.log("success");
      navigate("/cart");
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    // Find the selected size object
    const selectedSizeObj = product.sizes.find(
      (sizeObj) => sizeObj.size === size
    );
    // Update the product data with the new stock information
    const updatedProduct = { ...product, stocks: selectedSizeObj.quantity };
    setProduct(updatedProduct);
    setQuantity(1);
  };

  const handleMainImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className="view-product-component">
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        product && (
          <div className="view-product">
            <div className="view-product-container">
              <div className="img-container shadow">
                <img
                  src={mainImage || product.images[0]}
                  alt="product-main-img-view"
                />
              </div>

              <div className="product-info-container shadow">
                <h3>{product.product}</h3>
                <div>
                  <span>Sizes: </span>
                  {product.sizes.map((sizeObj, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="size"
                        value={sizeObj.size}
                        checked={selectedSize === sizeObj.size}
                        onChange={() => handleSizeChange(sizeObj.size)}
                      />
                      {sizeObj.size}
                    </label>
                  ))}
                </div>

                <div className="emphasized">${product.price}</div>
                <div className="rate-info">
                  <span>
                    <img
                      className="product-star"
                      src="https://i.imgur.com/XsLLxLD.png"
                      alt="rate-star"
                    />
                    {product.ratings !== 0
                      ? (product.totalRatings / product.ratings).toFixed(2)
                      : 0}
                  </span>

                  <span>|</span>
                  <span>Ratings: {product.ratings}</span>
                  <span>|</span>
                  <span>Sold: {product.qtySold}</span>
                  <span>|</span>
                  <span>Stocks: {product.stocks}</span>
                </div>
                <div className="img-preview-container">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={index === 0 ? "img-selected" : ""}
                    >
                      <img
                        className="img-preview"
                        src={image}
                        alt="img-preview"
                        onClick={() => handleMainImageChange(image)}
                      />
                    </div>
                  ))}
                </div>

                <div className="btn-container">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    max={product.stocks}
                    className="purchase-qty"
                    disabled={!selectedSize} // Disable the input if no size is selected
                  />

                  <button
                    className="tertiary-btn shadow"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                  <button className="secondary-btn shadow">
                    {" "}
                    <Link
                      to={`/cart/${product._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      CHECK OUT
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="spec-container shadow">
              <h3>SPECIFICATIONS</h3>
              <div className="spec-text-container">
                <div className="spec">
                  <div>Product Name</div>
                  <div>{product.product}</div>
                </div>
                <div className="spec">
                  <div>Brand</div>
                  <div>{product.brand}</div>
                </div>
                <div className="spec">
                  <div>Collection</div>
                  <div>{product.collection}</div>
                </div>
              </div>
              <div className="spec">
                <div>Features</div>
                <div>{product.features}</div>
              </div>
              <hr />
              <h3 className="description-title">DESCRIPTION</h3>
              <p>{product.description}</p>
            </div>
            <div className="other-section">
              <h3>You might also like</h3>
              <ProductList />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductView;
