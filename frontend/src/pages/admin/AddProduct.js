import "./AddProduct.css";
import { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    product: "",
    brand: "",
    description: "",
    price: 0,
    images: [],
    colors: "",
    categories: [],
    size: "",
    collection: "",
    features: "",
    quantity: 0,
  });

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSizeAdd = () => {
    setSelectedSizes([
      ...selectedSizes,
      { size: formData.size, quantity: formData.quantity },
    ]);
    setFormData({
      ...formData,
      size: "",
      quantity: 0,
    });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        categories: [...formData.categories, value],
      });
    } else {
      setFormData({
        ...formData,
        categories: formData.categories.filter(
          (category) => category !== value
        ),
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        ...formData,
        sizes: selectedSizes,
      };

      const response = await fetch("https://onestep-api.vercel.app/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      console.log("Product added successfully");
      // setFormData({
      //   product: "",
      //   brand: "",
      //   description: "",
      //   price: 0,
      //   images: [],
      //   colors: "",
      //   categories: [],
      //   size: "",
      //   collection: "",
      //   features: "",
      //   quantity: 0,
      // });
      setSelectedSizes([]);
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  const handleImageAdd = () => {
    setFormData({
      ...formData,
      images: [...formData.images, formData.image],
      image: "",
    });
  };

  return (
    <div className="add-product-component">
      <div>Add products</div>
      <form onSubmit={handleFormSubmit} className="add-product">
        <label>Product:</label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleInputChange}
          required
        />
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <label>Images:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleImageAdd}>
          Add Image
        </button>
        <div className="selected-images">
          {formData.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        <label>Colors:</label>
        <input
          type="text"
          name="colors"
          value={formData.colors}
          onChange={handleInputChange}
          placeholder="Enter colors"
        />

        <label>Category:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Men"
              checked={formData.categories.includes("Men")}
              onChange={handleCategoryChange}
            />
            Men
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Women"
              checked={formData.categories.includes("Women")}
              onChange={handleCategoryChange}
            />
            Women
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Unisex"
              checked={formData.categories.includes("Unisex")}
              onChange={handleCategoryChange}
            />
            Unisex
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Kids"
              checked={formData.categories.includes("Kids")}
              onChange={handleCategoryChange}
            />
            Kids
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Sports"
              checked={formData.categories.includes("Sports")}
              onChange={handleCategoryChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="High-Top"
              checked={formData.categories.includes("High-Top")}
              onChange={handleCategoryChange}
            />
            High-Top
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Low-Top"
              checked={formData.categories.includes("Low-Top")}
              onChange={handleCategoryChange}
            />
            Low-Top
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Mid-Top"
              checked={formData.categories.includes("Mid-Top")}
              onChange={handleCategoryChange}
            />
            Mid-Top
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Platform"
              checked={formData.categories.includes("Platform")}
              onChange={handleCategoryChange}
            />
            Platform
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Heeled"
              checked={formData.categories.includes("Heeled")}
              onChange={handleCategoryChange}
            />
            Heeled
          </label>
        </div>

        <div className="size-selection">
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
          />

          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />

          <button type="button" onClick={handleSizeAdd}>
            Add Size
          </button>
        </div>

        <label>Collection:</label>
        <input
          type="text"
          name="collection"
          value={formData.collection}
          onChange={handleInputChange}
        />

        <label>Features:</label>
        <input
          type="text"
          name="features"
          value={formData.features}
          onChange={handleInputChange}
        />

        <div className="selected-sizes">
          {selectedSizes.map((size, index) => (
            <div key={index}>
              {size.size} - {size.quantity}
            </div>
          ))}
        </div>

        <button type="submit" className="tertiary-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
