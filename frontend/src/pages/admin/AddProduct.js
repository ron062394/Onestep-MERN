import './AddProduct.css'
function AddProduct() {
    return (
      <div className="add-product">
        <div>Add products</div>
        <label>
          Product:
          <input
            type="text"
            name="product"
          />
        </label>
  
        <label>
          Description:
          <textarea
            name="description"
          />
        </label>
  
        <label>
          Category:
          <input
            type="text"
            name="category"
          />
        </label>
  
        <label>
          Size:
          <input
            type="text"
            name="size"
          />
        </label>
  
        <label>
          Collection:
          <input
            type="text"
            name="collection"
          />
        </label>
  
        <label>
          Features:
          <input
            type="text"
            name="features"
          />
        </label>
  
        <label>
          Price:
          <input
            type="number"
            name="price"
          />
        </label>
        <button type='submit' className='tertiary-btn'>Add Product</button>
      </div>
    );
  }
  
export default AddProduct;
  