import {useNavigate } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  
  const data = [

     {
      title: "Cars ",
      desc: "All cars ,Electric car ,Premium car ",
      img: "/assets/pexels-egeardaphotos-2148533277-32729922.jpg",
      type: "Allcars",
    },
    {
      title: "City Car",
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

  {/* Top Highlights */}
  <div className="footer-top">
    <div className="feature">
      <h3>🚗 500+ Cars</h3>
      <p>Economy to Luxury vehicles available</p>
    </div>

    <div className="feature">
      <h3>🛡 Fully Insured</h3>
      <p>Safe & secure rides guaranteed</p>
    </div>

    <div className="feature">
      <h3>⏱ Instant Booking</h3>
      <p>Book your car in under 2 minutes</p>
    </div>

    <div className="feature">
      <h3>📞 24/7 Support</h3>
      <p>Customer support anytime, anywhere</p>
    </div>
  </div>


  {/* Main Footer Content */}
  <div className="footer-main">

    <div className="footer-column">
      <h4>COMPANY</h4>
      <ul>
        <li>About Us</li>
        <li>Our Fleet</li>
        <li>Careers</li>
        <li>Testimonials</li>
        <li>Blog</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>RENTAL SERVICES</h4>
      <ul>
        <li>Self Drive Cars</li>
        <li>Luxury Rentals</li>
        <li>Long Term Leasing</li>
        <li>Corporate Rentals</li>
        <li>Airport Pickup</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>SUPPORT</h4>
      <ul>
        <li>Help Center</li>
        <li>Cancellation Policy</li>
        <li>Refund Policy</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>CONTACT US</h4>
      <ul>
        <li>📍 Mohali, Punjab</li>
        <li>📧 support@quickride.com</li>
        <li>📱 +91 98765 43210</li>
      </ul>

      <div className="app-buttons">
        <button>Download App</button>
      </div>
    </div>

  </div>


  {/* Bottom Section */}
  <div className="footer-bottom">
    <p>© 2026 QuickRide Car Rental. All rights reserved.</p>

    <div className="social">
      <span>Facebook</span>
      <span>Instagram</span>
      <span>Twitter</span>
      <span>LinkedIn</span>
    </div>
  </div>

</footer>
    </>
  );
};

export default Footer;
