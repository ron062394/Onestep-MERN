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
            
        </div>

        <div className='spec-container'>
            <div>SPECIFICATIONS</div>
                <div className='spec-text-container'>
                    <div>
                        <div>Brand</div>
                        <div>Lorem Ipsilum</div>
                    </div>
                    <div>
                        <div>Collection</div>
                        <div>Lorem Ipsilum</div>
                    </div>
                    <div>
                        <div>Features</div>
                        <div>Lorem Ipsilum</div>
                    </div>
                    <div>
                        <div>Sizes</div>
                        <div>Lorem Ipsilum</div>
                    </div>
                </div>
                <div>DESCRIPTION</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem blanditiis perspiciatis obcaecati facere veritatis reprehenderit quo officiis deleniti cumque iste, recusandae doloribus. Laborum, sint cum blanditiis quis voluptates eaque repudiandae ut fugiat officia odio accusantium esse optio rerum cupiditate, consequuntur provident eum deleniti adipisci praesentium! Veniam id dignissimos ducimus.</div>
            </div>
        </div>
    );
  }
  
  export default ViewProduct;