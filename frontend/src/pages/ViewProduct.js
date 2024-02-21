import './ViewProduct.css'

function ViewProduct() {
    return (
      <div className="view-product-component">
        <div className="view-product-container ">
            <div className='img-container shadow'>
                <img src="https://clipart-library.com/image_gallery2/Running-Shoes-Transparent.png" alt="" />
            </div>
            <div className='product-info-container shadow'>
                <h3>LOREM IPSILUM</h3>
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
                <div className='btn-container'>
                    <button className='tertiary-btn shadow'>ADD TO CART</button>
                    <button className='secondary-btn shadow'>CHECKOUT</button>
                </div>
            </div>
            
        </div>

        <div className='spec-container shadow'>
            <h3>SPECIFICATIONS</h3>
                <div className='spec-text-container'>
                    <div className='spec'>
                        <div>Brand</div>
                        <div>Nike</div>
                    </div>
                    <div className='spec'>
                        <div>Collection</div>
                        <div>Summer Vibes</div>
                    </div>
                    <div className='spec'>
                        <div>Features</div>
                        <div>Limited edition color</div>
                    </div>
                    <div className='spec'>
                        <div>Sizes</div>
                        <div>32, 38, 40</div>
                    </div>
                </div>
                <hr/>
                <h3 className='description-title'>DESCRIPTION</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem blanditiis perspiciatis obcaecati facere veritatis reprehenderit quo officiis deleniti cumque iste, recusandae doloribus. Laborum, sint cum blanditiis quis voluptates eaque repudiandae ut fugiat officia odio accusantium esse optio rerum cupiditate, consequuntur provident eum deleniti adipisci praesentium! Veniam id dignissimos ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores perferendis ipsum dolorum dolores cumque unde, iusto eum. Ad ullam consectetur ducimus adipisci aperiam eligendi odit odio eius perferendis. Dignissimos corrupti beatae a? Rem itaque dolorem quod repudiandae quos a, ipsam iste numquam totam dignissimos sapiente illo ducimus, in voluptas. Aut animi sint aperiam dolore delectus debitis asperiores laboriosam praesentium porro tenetur. Eaque, dolore. Minus, consectetur? Provident libero possimus nisi. Aperiam totam labore quisquam asperiores. Ullam voluptatem iusto enim dignissimos sequi veniam exercitationem ex, officiis dicta minima, dolore nostrum maxime libero nisi porro quod velit! Consectetur odit nostrum corrupti quidem facilis illum distinctio non quas dicta quibusdam provident nisi natus est impedit vero architecto sapiente aut harum, minima nulla tempore inventore optio in. Nihil inventore laudantium, assumenda magni porro error. Delectus mollitia nam molestias totam cum corporis eligendi. Ex impedit deserunt pariatur tempora dolor facere repudiandae, non eaque laudantium optio.</p>
            </div>
        </div>
    );
  }
  
  export default ViewProduct;