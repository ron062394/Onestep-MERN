import './ProductView.css'
import ProductList from '../components/ProductList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function ProductView() {
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
                <div className='view-product'>
                    <div className="view-product-container ">
                        <div className='img-container shadow'>
                            <img src={product.image} alt="" />
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
                            <div className='emphasized'>${ product.price }</div>
                            <div className='rate-info'>
                                <span><img className='product-star' src="https://i.imgur.com/XsLLxLD.png" alt="rate-star" />{(product.totalRatings / product.ratings).toFixed(2)}</span>
                                <span>|</span>
                                <span>Ratings: { product.ratings }</span>
                                <span>|</span>
                                <span>Sold: { product.qtySold }</span>
                                <span>|</span>
                                <span>Stocks: { product.stocks }</span>
                            </div>

                            <div className="img-preview-container">
                                <img className="img-preview" src={product.image} alt="" />
                                <img className="img-preview" src={product.image} alt="" />
                                <img className="img-preview" src={product.image} alt="" />
                            </div>
                            <div className='btn-container'>
                                <input className="purchase-qty" type="text" value={1} />
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
                        <p>{product.description}</p>
                    </div>
                    <div className='other-section'>
                        <h3>You might also like</h3>
                        <ProductList/>
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        
       
        </div>
    );
}
  
export default ProductView;