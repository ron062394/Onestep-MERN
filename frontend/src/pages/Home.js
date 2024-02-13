function Home() {
  return (
    <div className="homepage">
        <div className="hero-section">
            <div className="hero-text-container">
                <h1 className="hero-text">
                    <div>Stepping into</div>
                    <div className="yellow-color">TRENDSETTING</div>
                </h1>
                <p className="hero-subtext">Get ready for innovation and style that sets the pace.</p>
                <button className="Shop-now-btn">Shop Now</button>
            </div>

            <div className="img-container">
                <img className="hero-image" src="https://i.imgur.com/JEi3BZJ.png" alt="banner-shoe" />
            </div>

            <div className="hero-text-container-2">
                <div className="hero-text-2">Step into style at</div>
                <div className="hero-text-2">your <span className="yellow-color">One Step Shop</span></div>
                <p className="hero-subtext-2">Your go-to destination for all your needs, where every step counts.</p>
            </div>
        </div>
        <div>
            <img className="shoe-icon" src="https://i.imgur.com/d7T9Bd4.png" alt="shoe-icon" />
            <span> Over 5000 shoes sold worldwide</span>
        </div>
    </div>
  );
}

export default Home;
