import React from "react";

function Footer() {
  return (
    <>
      <section>
        <div className="container text-center text-md-start foot">
          <h1>Marketo.</h1>
          <div className="row">
            <div className="col-12 col-md-4 footcol mb-4">
              <h2>Got Question? Call us 24/7</h2>
              <h3>+977 9869100969</h3>
              <p>Kathmandu-4406, Nepal</p>
              <button type="button" className="btn text-white">
                View On Map
              </button>
            </div>

            <div className="col-12 col-md-4 footcol mb-4">
              <h2>We Use Safe Payments</h2>
              <div>
                <img
                  src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/skril-1-1.png"
                  alt="Skrill"
                  className="img-fluid"
                />
                <img
                  className="px-4 img-fluid"
                  src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/palypal-1-1.png"
                  alt="PayPal"
                />
                <img
                  src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/american_express-1-1.png"
                  alt="American Express"
                  className="img-fluid"
                />
              </div>
              <p className="pt-3">Secured by:</p>
              <div className="py-4">
                <img
                  src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/norton_av_logo1-1.png"
                  alt="Norton AV"
                  className="img-fluid"
                />
                <img
                  src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/mcAfee_logo1-1.png"
                  alt="McAfee"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-4 footcol mb-4">
              <div className="row">
                <div className="col-6">
                  <h4>Our Stores</h4>
                  <ul className="footlink list-unstyled">
                    <li><a href="#">New York</a></li>
                    <li><a href="#">London SF</a></li>
                    <li><a href="#">Cockfosters BP</a></li>
                    <li><a href="#">Los Angeles</a></li>
                    <li><a href="#">Chicago</a></li>
                    <li><a href="#">Las Vegas</a></li>
                    <li><a href="#">Albarto</a></li>
                  </ul>
                </div>

                <div className="col-6">
                  <h4>Quick Links</h4>
                  <ul className="footlink list-unstyled">
                    <li><a href="#">Support Center</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Product Returns</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-warning">
        <div className="last container">
          <div> 
          <h4>© 2021 XpeedStudio All Rights Reserved</h4></div>
          <div>  
            <ul className="footlinktwo d-flex flex-wrap justify-content-center justify-content-md-end">
              <li className="me-3"><a href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li className="me-3"><a href="#"><i className="bi bi-twitter"></i> Twitter</a></li>
              <li className="me-3"><a href="#"><i className="bi bi-pinterest"></i> Pinterest</a></li>
              <li className="me-3"><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
            </ul></div>
        </div>
      </section>
    </>
  );
}

export default Footer;
