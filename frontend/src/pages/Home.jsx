import "./Home.css";
import ProductList from "../components/ProductList";
import Background from "../components/Background";

function Home() {
  return (
    <div className="homepage">
      <Background />
      <div className="hero-section">
        <div className="hero-section-container">
          <div className="hero-text-container">
            <h1 className="hero-text">
              <div>Stepping into</div>
              <div className="yellow-color">TRENDSETTING</div>
            </h1>
            <p className="hero-subtext">
              Get ready for innovation and style that sets the pace.
            </p>
            <button class="button">
              <span class="text">Shop Now</span>
              <svg
                class="arrow"
                viewBox="0 0 448 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </div>

          <div className="hero-img-container">
            <img
              className="hero-shape"
              src="https://i.imgur.com/EgXCip1.png"
              alt=""
            />
            <img
              className="hero-image"
              src="https://i.imgur.com/JEi3BZJ.png"
              alt="banner-shoe"
            />
            {/* <img className="seal" src="https://png.pngtree.com/png-vector/20220123/ourmid/pngtree-authentic-stamp-icon-mark-post-postmark-vector-png-image_15759446.png" alt="" /> */}
          </div>

          <div className="hero-text-container-2">
            <div className="hero-text-2">Step into style at</div>
            <div className="hero-text-2">
              your{" "}
              <span className="yellow-color one-step-shop">One Step Shop</span>
            </div>
            <p className="hero-subtext-2">
              Your go-to destination for all your needs, where every step
              counts.
            </p>
          </div>
        </div>
        <div className="hero-section-footer">
          <span>
            <img
              className="shoe-icon"
              src="https://i.imgur.com/d7T9Bd4.png"
              alt="shoe-icon"
            />
            <span> Over 5000 shoes sold worldwide</span>
          </span>

          <span className="icon-container">
            <img src="https://i.imgur.com/c00oQA1.png" alt="youtube-icon" />
            <img src="https://i.imgur.com/ZKAHPs7.png" alt="x-icon" />
            <img src="https://i.imgur.com/XMYunWm.png" alt="facebook-icon" />
            <img src="https://i.imgur.com/81SdpZo.png" alt="instragram-icon" />
          </span>
        </div>
      </div>
      
        <div className='category-section'>
          <div className="category-container">
          <div className="category-items category-1">
            <img src="https://www.gearpatrol.com/wp-content/uploads/sites/2/2022/11/motivation-fuels-the-human-engine-royalty-free-image-1663796397-jpg.webp?w=1920&crop=0,0,100,100" alt="" />
          </div>
          <div className="category-items category-2">
            <img src="https://i.imgur.com/EmFLj9c.png" alt="" />
          </div>
          <div className="category-items category-3">
            <img src="https://www.hamricks.com/wp-content/uploads/2021/09/shoes-header.jpg" alt="" />
          </div>
          <div className="category-items category-4">
            <img src="https://www.lakhanifootwear.com/media/catalog/category/02-Recovered03_1_1.jpg" alt="" />
          </div>
          <div className="category-items category-5">See All Categories</div>
          </div>
        </div>

      <ProductList />
    </div>
  );
}

export default Home;
