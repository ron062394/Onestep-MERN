import "./AddProduct.css";
import { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    product: "",
    description: "",
    price: 0,
    images: [], // Change to accept an array of strings
    colors: "",
    category: "",
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const productData = {
        ...formData,
        sizes: selectedSizes, // Include selected sizes in the form data
      };
  
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
  
      console.log(formData)
      // Clear form data after successful submission
      setFormData({
        product: "",
        description: "",
        price: 0,
        images: [], // Clear images array
        colors: "",
        category: "",
        size: "",
        collection: "",
        features: "",
        quantity: 0,
      });
      setSelectedSizes([]);
  
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };
  
  const handleImageAdd = () => {
    setFormData({
      ...formData,
      images: [...formData.images, formData.image], // Concatenate new image with existing images
      image: "", // Clear input field after adding image
    });
    console.log(formData)
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

        <label>Images:</label> {/* Change label */}
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleImageAdd}>
          Add Image
        </button>
        <div className="selected-images"> {/* Display selected images */}
          {formData.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        <label>
          Colors:
          <input
            type="text"
            name="colors"
            value={formData.colors}
            onChange={handleInputChange}
            placeholder="Enter colors"
          />
        </label>

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />

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
