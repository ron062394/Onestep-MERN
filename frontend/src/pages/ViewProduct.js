import './ViewProduct.css'

function ViewProduct() {
    return (
      <div className="view-product-component">
        <div className="view-product-container">
            <div className='img-container'>
                <img src="https://clipart-library.com/image_gallery2/Running-Shoes-Transparent.png" alt="" />
            </div>
            <div className='product-info-container'>
                <div>LOREM IPSILUM</div>
                <div>$195.00</div>
                <div className='rate-info'>
                    <span>4.5s</span>
                    <span>|</span>
                    <span>Ratings: 20</span>
                    <span>|</span>
                    <span>Sold: 40</span>
                </div>

                <div className="img-preview-container">
                    <img className="img-preview" src="https://clipart-library.com/image_gallery2/Running-Shoes-Transparent.png" alt="" />
                    <img className="img-preview" src="https://clipart-library.com/image_gallery2/Running-Shoes-Transparent.png" alt="" />
                    <img className="img-preview" src="https://clipart-library.com/image_gallery2/Running-Shoes-Transparent.png" alt="" />
                </div>
                <div>
                    <button>ADD TO CART</button>
                    <button>CHECKOUT</button>
                </div>
            </div>
            <div>

            </div>
        </div>

      </div>
    );
  }
  
  export default ViewProduct;