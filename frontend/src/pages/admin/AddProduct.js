import './AddProduct.css'
import { useState } from 'react';

function AddProduct() {
    const [formData, setFormData] = useState({
        product: '',
        description: '',
        price: 0,
        image: '',
        colors: '',
        category: '',
        size: '',
        collection: '',
        features: '',
        quantity: 0
    });

    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSizeAdd = () => {
        setSelectedSizes([...selectedSizes, { size: formData.size, quantity: formData.quantity }]);
        setFormData({
            ...formData,
            size: '',
            quantity: 0
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted", formData);

        
    };

    return (
        <div className="add-product-component">
            <div>Add products</div>
            <form onSubmit={handleFormSubmit} className='add-product'>
                <label>
                    Product:
                    <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Image:
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Colors:
                    <input
                        type="text"
                        name="colors"
                        value={formData.colors}
                        onChange={handleInputChange}
                        placeholder="Enter multiple colors separated by commas"
                    />
                </label>

                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </label>

                <div className="size-selection">
                    <label>
                        Size:
                        <input
                            type="text"
                            name="size"
                            value={formData.size}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Quantity:
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="button" onClick={handleSizeAdd}>Add Size</button>
                </div>

                <label>
                    Collection:
                    <input
                        type="text"
                        name="collection"
                        value={formData.collection}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Features:
                    <input
                        type="text"
                        name="features"
                        value={formData.features}
                        onChange={handleInputChange}
                    />
                </label>

                <div className="selected-sizes">
                    {selectedSizes.map((size, index) => (
                        <div key={index}>{size.size} - {size.quantity}</div>
                    ))}
                </div>

                <button type='submit' className='tertiary-btn'>Add Product</button>

            </form>

        </div>
    );
}

export default AddProduct;
