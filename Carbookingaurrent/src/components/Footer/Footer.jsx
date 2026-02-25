import {useNavigate } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  
  const data = [
    {
      title: "Car",
      desc: "Compact and fuel-efficient city cars",
      img: "/assets/laurapuig4-taxi-988348_1920.jpg",
      type: "cars",
    },
    {
      title: "Premium",
      desc: "Premium vehicles by legendary manufacturers",
      img: "/assets/lipetkd-car-49278_1920.jpg",
      type: "premium",
    },
    {
      title: "Electric",
      desc: "Electric, hybrid & plug-in vehicles",
      img: "/assets/andreas160578-electric-car-4381728_1920.jpg",
      type: "electric",
    },
    // {
    //   title: "Vans ",
    //   desc: "SUVs and vans for business or leisure",
    //   img: "/assets/james163-ai-generated-8241739_1920.jpg",
    //   type: "vans",
    // },
  ];
 
  return (
    <>
      <section className="how">
        <p className="how-sub">Search · Select · Book</p>
        <h2 className="how-title">
          How it <span>Works</span>
        </h2>

        <div className="how-steps">
          <div className="step">
            <div className="img-box">
              <img className="img-a" src="/assets/20945933.jpg" />
            </div>
            <div className="dot">1</div>
            <h4>SEARCH</h4>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="img-box">
              <img className="img-a" src="/assets/3671304.jpg" />
            </div>
            <div className="dot">2</div>
            <h4>SELECT</h4>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="img-box">
              <img className="img-a" src="/assets/3676659.jpg" />
            </div>
            <div className="dot">3</div>
            <h4>BOOK</h4>
          </div>
        </div>
      </section>

      <section className="fleet">
        <h1>A fleet that meets your needs</h1>
        <p className="subtitle">Take the opportunity to test the new models</p>

        <div className="fleet-grid">
          {data.map((item, index) => (
            <div key={index} className="fleet-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <button onClick={() => navigate(`/${item.type}`)}>
                See more
              </button>

              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="feature">
            <h3>India’s #1</h3>
            <p>Largest Auto portal</p>
          </div>

          <div className="feature">
            <h3>AI Expert</h3>
            <p>Simplify your car search</p>
          </div>

          <div className="feature">
            <h3>Offers</h3>
            <p>Stay updated pay less</p>
          </div>

          <div className="feature">
            <h3>Compare</h3>
            <p>Decode the right car</p>
          </div>
        </div>

        <div className="footer-main">

          <div className="footer-column">
            <h4>ABOUT CARDEKHO</h4>
            <ul>
              <li>About</li>
              <li>Careers With Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Corporate Policies</li>
              <li>Investors</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>CONNECT WITH US</h4>
            <ul>
              <li>Feedback</li>
              <li>Contact Us</li>
              <li>Advertise with Us</li>
              <li>Become Partner Dealer</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>OTHERS</h4>
            <ul>
              <li>TrucksDekho</li>
              <li>TyreDekho</li>
              <li>TractorsDekho</li>
              <li>Emergency Response</li>
              <li>Car Sales Trends</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>EXPERIENCE CARDEKHO APP</h4>
            <div className="app-buttons">
              <button>App Store</button>
              <button>Google Play</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Girnar Software Pvt. Ltd.</p>
          <div className="social">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>YouTube</span>
            <span>Instagram</span>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
