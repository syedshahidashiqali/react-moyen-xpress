export default function Footer() {
  return (
    <>
      <footer
        className="footer appear-animate"
        data-animation-options="{
      'name': 'fadeIn'
  }"
      >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget-about">
                  <a href="demo2.html" className="logo-footer">
                    <img
                      src="assets/images/logo_footer.png"
                      alt="logo-footer"
                      width={144}
                      height={45}
                    />
                  </a>
                  <div className="widget-body">
                    <p className="widget-about-desc text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                    <div className="social-icons social-icons-colored">
                      <a
                        href="#"
                        className="social-icon social-facebook w-icon-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon social-twitter w-icon-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon social-instagram w-icon-instagram"
                      />
                      <a
                        href="#"
                        className="social-icon social-youtube w-icon-youtube"
                      />
                      <a
                        href="#"
                        className="social-icon social-pinterest w-icon-pinterest"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h3 className="widget-title">SERVICES</h3>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                    <li>
                      <a href="#">Lorem Ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">
                        <i className="fas fa-home" /> 123 Lorem Ipsum Rd, Lorem
                        Ipsum, LI 12345
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-envelope-open-text" />
                        info@loremipsum.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-phone-alt" /> +1 234 567 8900
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="copytext">
              <p>Copyright © 2021 Demo link</p>
            </div>
          </div>
        </div>
      </footer>
      <StickyFooter />
    </>
  );
}

function StickyFooter() {
  return (
    <div className="sticky-footer sticky-content fix-bottom">
      <a href="demo2.html" className="sticky-link active">
        <i className="w-icon-home" />
        <p>Home</p>
      </a>
      <a href="shop-banner-sidebar.html" className="sticky-link">
        <i className="w-icon-category" />
        <p>Shop</p>
      </a>
      <a href="my-account.html" className="sticky-link">
        <i className="w-icon-account" />
        <p>Account</p>
      </a>
      <div className="cart-dropdown dir-up">
        <a href="cart.html" className="sticky-link">
          <i className="w-icon-cart" />
          <p>Cart</p>
        </a>
        <div className="dropdown-box">
          <div className="products">
            <div className="product product-cart">
              <div className="product-detail">
                <h3 className="product-name">
                  <a href="#">
                    Beige knitted elas
                    <br />
                    tic runner shoes
                  </a>
                </h3>
                <div className="price-box">
                  <span className="product-quantity">1</span>
                  <span className="product-price">$25.68</span>
                </div>
              </div>
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/cart/product-1.jpg"
                    alt="product"
                    height={84}
                    width={94}
                  />
                </a>
              </figure>
              <button className="btn btn-link btn-close">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="product product-cart">
              <div className="product-detail">
                <h3 className="product-name">
                  <a href="#">
                    Blue utility pina
                    <br />
                    fore denim dress
                  </a>
                </h3>
                <div className="price-box">
                  <span className="product-quantity">1</span>
                  <span className="product-price">$32.99</span>
                </div>
              </div>
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/cart/product-2.jpg"
                    alt="product"
                    width={84}
                    height={94}
                  />
                </a>
              </figure>
              <button className="btn btn-link btn-close">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="cart-total">
            <label>Subtotal:</label>
            <span className="price">$58.67</span>
          </div>
          <div className="cart-action">
            <a href="#" className="btn btn-dark btn-outline btn-rounded">
              View Cart
            </a>
            <a href="#" className="btn btn-primary btn-rounded">
              Checkout
            </a>
          </div>
        </div>
        {/* End of Dropdown Box */}
      </div>
      <div className="header-search hs-toggle dir-up">
        <a href="#" className="search-toggle sticky-link">
          <i className="w-icon-search" />
          <p>Search</p>
        </a>
        <form action="#" className="input-wrapper">
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search"
            required=""
          />
          <button className="btn btn-search" type="submit">
            <i className="w-icon-search" />
          </button>
        </form>
      </div>
    </div>
  );
}
