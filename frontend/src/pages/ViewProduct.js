import './ViewProduct.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function ViewProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id)
    useEffect(() => {
        fetch(`/api/product/${id}`, {
        })
        .then((response) => response.json())
        .then((data) => {
            setProduct(data)
        })
        .catch((error) => console.error(error));
    }, [id]);

    console.log(product)

    return (
        <div className="view-product-component">
            {product ? (
                <div>
                    <div className="view-product-container ">
                        <div className='img-container shadow'>
                            <img src="https://clipart-library.com/image_gallery2/Running-Shoes-Transparent.png" alt="" />
                        </div>
                        <div className='product-info-container shadow'>
                            <h3>{ product.product }</h3>
                            <div className=''>
                                <span>Sizes: </span>
                                {product.size.map((size, index) => (
                                <span key={index}>
                                    {size}
                                    {index !== product.size.length - 1 && ', '}
                                </span>
                                ))}
                            </div>
                            <div>${ product.price }</div>
                            <div className='rate-info'>
                                <span>{ product.totalRatings / product.ratings }s</span>
                                <span>|</span>
                                <span>Ratings: { product.ratings }</span>
                                <span>|</span>
                                <span>Sold: { product.qtySold }</span>
                                <span>|</span>
                                <span>Stocks: { product.stocks }</span>
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
                                <div>Product Name</div>
                                <div>{ product.product }</div>
                            </div>                            <div className='spec'>
                            <div>Brand</div>
                                <div>{ product.brand }</div>
                            </div>
                            <div className='spec'>
                                <div>Collection</div>
                                <div>{ product.collection }</div>
                            </div>
                        </div>
                        <div className='spec'>
                            <div>Features</div>
                            <div>{ product.features }</div>
                        </div>
                        <hr/>
                        <h3 className='description-title'>DESCRIPTION</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem blanditiis perspiciatis obcaecati facere veritatis reprehenderit quo officiis deleniti cumque iste, recusandae doloribus. Laborum, sint cum blanditiis quis voluptates eaque repudiandae ut fugiat officia odio accusantium esse optio rerum cupiditate, consequuntur provident eum deleniti adipisci praesentium! Veniam id dignissimos ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores perferendis ipsum dolorum dolores cumque unde, iusto eum. Ad ullam consectetur ducimus adipisci aperiam eligendi odit odio eius perferendis. Dignissimos corrupti beatae a? Rem itaque dolorem quod repudiandae quos a, ipsam iste numquam totam dignissimos sapiente illo ducimus, in voluptas. Aut animi sint aperiam dolore delectus debitis asperiores laboriosam praesentium porro tenetur. Eaque, dolore. Minus, consectetur? Provident libero possimus nisi. Aperiam totam labore quisquam asperiores. Ullam voluptatem iusto enim dignissimos sequi veniam exercitationem ex, officiis dicta minima, dolore nostrum maxime libero nisi porro quod velit! Consectetur odit nostrum corrupti quidem facilis illum distinctio non quas dicta quibusdam provident nisi natus est impedit vero architecto sapiente aut harum, minima nulla tempore inventore optio in. Nihil inventore laudantium, assumenda magni porro error. Delectus mollitia nam molestias totam cum corporis eligendi. Ex impedit deserunt pariatur tempora dolor facere repudiandae, non eaque laudantium optio.</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        
       
        </div>
    );
}
  
export default ViewProduct;