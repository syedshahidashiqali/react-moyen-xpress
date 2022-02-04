export default function NavBar() {
  return (
    <div className="page-wrapper">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMid />
      <HeaderBot />
      <SideBarForMobile />
    </header>
  );
}
function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">Welcome to Moyen Xpress!</p>
        </div>
        <div className="header-right pr-0">
          {/* End of Dropdown Menu */}
          <a href="#" className="d-lg-show">
            Contact Us
          </a>
          <a href="#" className="d-lg-show">
            My Account
          </a>
          <a
            href="javascrip;"
            className="d-lg-show login sign-in"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="w-icon-account" />
            Sign In
            <span className="delimiter d-lg-show">/</span> Register
          </a>
          {/* End of DropDown Menu */}
          <div className="dropdown">
            <a href="#language">User</a>
            <div className="dropdown-box">
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}
function HeaderMid() {
  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left">
          <a href="#" className="mobile-menu-toggle w-icon-hamburger">
            {" "}
          </a>
          <a href="index.html" className="logo ml-lg-0">
            <img
              src="assets/images/header-logo.png"
              alt="logo"
              width={144}
              height={45}
            />
          </a>
          <nav className="main-nav ms-auto">
            <ul className="menu">
              <li className="active">
                <a href="#">
                  <img
                    className="imgbox"
                    src="assets/images/new2.gif"
                    alt="logo"
                  />
                </a>
              </li>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
                {/* Start of Megamenu */}
                <ul className="megamenu">
                  <li>
                    <h4 className="menu-title">Shop Pages</h4>
                    <ul>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">
                          Horizontal Filter
                          <span className="tip tip-hot">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="menu-title">Shop Layouts</h4>
                    <ul>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">
                          Horizontal Filter
                          <span className="tip tip-hot">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="menu-title">Product Pages</h4>
                    <ul>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">
                          Horizontal Filter
                          <span className="tip tip-hot">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="menu-title">Product Layouts</h4>
                    <ul>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">
                          Horizontal Filter
                          <span className="tip tip-hot">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                      <li>
                        <a href="#">Lorem Ipsum dummy Text</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* End of Megamenu */}
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right ml-4">
          <a className="wishlist label-down link d-xs-show" href="#">
            <i className="w-icon-account" />
          </a>
          <a className="compare label-down link d-xs-show" href="#">
            <i className="w-icon-heart" />
          </a>
          <div className="dropdown cart-dropdown mr-0 mr-lg-2">
            <div className="cart-overlay" />
            <a href="#" className="cart-toggle label-down link">
              <i className="w-icon-cart">
                <span className="cart-count">2</span>
              </i>
              <span className="cart-label">Cart</span>
            </a>
            <div className="dropdown-box">
              <div className="products">
                <div className="product product-cart">
                  <div className="product-detail">
                    <a href="#" className="product-name">
                      Beige knitted elas
                      <br />
                      tic runner shoes
                    </a>
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
                    <a href="#" className="product-name">
                      Blue utility pina
                      <br />
                      fore denim dress
                    </a>
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
        </div>
      </div>
    </div>
  );
}
function HeaderBot() {
  return (
    <div className="header-bottom sticky-content fix-top sticky-header">
      <div className="container">
        <div className="inner-wrap">
          <div className="header-left flex-1">
            <div
              className="dropdown category-dropdown has-border"
              data-visible="true"
            >
              <a
                href="#"
                className="category-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                data-display="static"
                title="Browse Categories"
              >
                <i className="w-icon-category" />
                <span>Browse Categories</span>
              </a>
              <div className="dropdown-box">
                <ul className="menu vertical-menu category-menu">
                  <li>
                    <a href="#">
                      <i className="w-icon-tshirt2" />
                      Fashion
                    </a>
                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">Women</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">New Arrivals</a>
                          </li>
                          <li>
                            <a href="#">Best Sellers</a>
                          </li>
                          <li>
                            <a href="#">Trending</a>
                          </li>
                          <li>
                            <a href="#">Clothing</a>
                          </li>
                          <li>
                            <a href="#">Shoes</a>
                          </li>
                          <li>
                            <a href="#">Bags</a>
                          </li>
                          <li>
                            <a href="#">Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewlery &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Sale</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">Men</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">New Arrivals</a>
                          </li>
                          <li>
                            <a href="#">Best Sellers</a>
                          </li>
                          <li>
                            <a href="#">Trending</a>
                          </li>
                          <li>
                            <a href="#">Clothing</a>
                          </li>
                          <li>
                            <a href="#">Shoes</a>
                          </li>
                          <li>
                            <a href="#">Bags</a>
                          </li>
                          <li>
                            <a href="#">Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewlery &amp; Watches</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="banner-fixed menu-banner menu-banner2">
                          <figure>
                            <img
                              src="assets/images/menu/banner-2.jpg"
                              alt="Menu Banner"
                              width={235}
                              height={347}
                            />
                          </figure>
                          <div className="banner-content">
                            <div className="banner-price-info mb-1 ls-normal">
                              Get up to
                              <strong className="text-primary text-uppercase">
                                20%Off
                              </strong>
                            </div>
                            <h3 className="banner-title ls-normal">
                              Hot Sales
                            </h3>
                            <a
                              href="#"
                              className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                            >
                              Shop Now
                              <i className="w-icon-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-home" />
                      Home &amp; Garden
                    </a>
                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">Bedroom</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Beds, Frames &amp; Bases</a>
                          </li>
                          <li>
                            <a href="#">Dressers</a>
                          </li>
                          <li>
                            <a href="#">Nightstands</a>
                          </li>
                          <li>
                            <a href="#">Kid's Beds &amp; Headboards</a>
                          </li>
                          <li>
                            <a href="#">Armoires</a>
                          </li>
                        </ul>
                        <h4 className="menu-title mt-1">Living Room</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Coffee Tables</a>
                          </li>
                          <li>
                            <a href="#">Chairs</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">Futons &amp; Sofa Beds</a>
                          </li>
                          <li>
                            <a href="#">Cabinets &amp; Chests</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">Office</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Office Chairs</a>
                          </li>
                          <li>
                            <a href="#">Desks</a>
                          </li>
                          <li>
                            <a href="#">Bookcases</a>
                          </li>
                          <li>
                            <a href="#">File Cabinets</a>
                          </li>
                          <li>
                            <a href="#">Breakroom Tables</a>
                          </li>
                        </ul>
                        <h4 className="menu-title mt-1">
                          Kitchen &amp; Dining
                        </h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Dining Sets</a>
                          </li>
                          <li>
                            <a href="#">Kitchen Storage Cabinets</a>
                          </li>
                          <li>
                            <a href="#">Bashers Racks</a>
                          </li>
                          <li>
                            <a href="#">Dining Chairs</a>
                          </li>
                          <li>
                            <a href="#">Dining Room Tables</a>
                          </li>
                          <li>
                            <a href="#">Bar Stools</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="menu-banner banner-fixed menu-banner3">
                          <figure>
                            <img
                              src="assets/images/menu/banner-3.jpg"
                              alt="Menu Banner"
                              width={235}
                              height={461}
                            />
                          </figure>
                          <div className="banner-content">
                            <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                              Restroom
                            </h4>
                            <h3 className="banner-title font-weight-bolder text-white ls-normal">
                              Furniture Sale
                            </h3>
                            <div className="banner-price-info text-white font-weight-normal ls-25">
                              Up to
                              <span className="text-secondary text-uppercase font-weight-bold">
                                25% Off
                              </span>
                            </div>
                            <a
                              href="#"
                              className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                            >
                              Shop Now
                              <i className="w-icon-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-electronics" />
                      Electronics
                    </a>
                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">Laptops &amp; Computers</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Desktop Computers</a>
                          </li>
                          <li>
                            <a href="#">Monitors</a>
                          </li>
                          <li>
                            <a href="#">Laptops</a>
                          </li>
                          <li>
                            <a href="#">Hard Drives &amp; Storage</a>
                          </li>
                          <li>
                            <a href="#">Computer Accessories</a>
                          </li>
                        </ul>
                        <h4 className="menu-title mt-1">TV &amp; Video</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">TVs</a>
                          </li>
                          <li>
                            <a href="#">Home Audio Speakers</a>
                          </li>
                          <li>
                            <a href="#">Projectors</a>
                          </li>
                          <li>
                            <a href="#">Media Streaming Devices</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">Digital Cameras</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Digital SLR Cameras</a>
                          </li>
                          <li>
                            <a href="#">Sports &amp; Action Cameras</a>
                          </li>
                          <li>
                            <a href="#">Camera Lenses</a>
                          </li>
                          <li>
                            <a href="#">Photo Printer</a>
                          </li>
                          <li>
                            <a href="#">Digital Memory Cards</a>
                          </li>
                        </ul>
                        <h4 className="menu-title mt-1">Cell Phones</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Carrier Phones</a>
                          </li>
                          <li>
                            <a href="#">Unlocked Phones</a>
                          </li>
                          <li>
                            <a href="#">Phone &amp; Cellphone Cases</a>
                          </li>
                          <li>
                            <a href="#">Cellphone Chargers</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="menu-banner banner-fixed menu-banner4">
                          <figure>
                            <img
                              src="assets/images/menu/banner-4.jpg"
                              alt="Menu Banner"
                              width={235}
                              height={433}
                            />
                          </figure>
                          <div className="banner-content">
                            <h4 className="banner-subtitle font-weight-normal">
                              Deals Of The Week
                            </h4>
                            <h3 className="banner-title text-white">
                              Save On Smart EarPhone
                            </h3>
                            <div className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                              20% Off
                            </div>
                            <a
                              href="#"
                              className="btn btn-white btn-outline btn-sm btn-rounded"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-furniture" />
                      Furniture
                    </a>
                    <ul className="megamenu type2">
                      <li className="row">
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Furniture</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">Sofas &amp; Couches</a>
                            </li>
                            <li>
                              <a href="#">Armchairs</a>
                            </li>
                            <li>
                              <a href="#">Bed Frames</a>
                            </li>
                            <li>
                              <a href="#">Beside Tables</a>
                            </li>
                            <li>
                              <a href="#">Dressing Tables</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Lighting</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">Light Bulbs</a>
                            </li>
                            <li>
                              <a href="#">Lamps</a>
                            </li>
                            <li>
                              <a href="#">Celling Lights</a>
                            </li>
                            <li>
                              <a href="#">Wall Lights</a>
                            </li>
                            <li>
                              <a href="#">Bathroom Lighting</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Home Accessories</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">Decorative Accessories</a>
                            </li>
                            <li>
                              <a href="#">Candals &amp; Holders</a>
                            </li>
                            <li>
                              <a href="#">Home Fragrance</a>
                            </li>
                            <li>
                              <a href="#">Mirrors</a>
                            </li>
                            <li>
                              <a href="#">Clocks</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Garden &amp; Outdoors</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">Garden Furniture</a>
                            </li>
                            <li>
                              <a href="#">Lawn Mowers</a>
                            </li>
                            <li>
                              <a href="#">Pressure Washers</a>
                            </li>
                            <li>
                              <a href="#">All Garden Tools</a>
                            </li>
                            <li>
                              <a href="#">Outdoor Dining</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="row">
                        <div className="col-6">
                          <div className="banner banner-fixed menu-banner5 br-xs">
                            <figure>
                              <img
                                src="assets/images/menu/banner-5.jpg"
                                alt="Banner"
                                width={410}
                                height={123}
                                style={{ backgroundColor: "#d2d2d2" }}
                              />
                            </figure>
                            <div className="banner-content text-right y-50">
                              <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                New Arrivals
                              </h4>
                              <h3 className="banner-title font-weight-bolder text-capitalize ls-normal">
                                Amazing Sofa
                              </h3>
                              <div className="banner-price-info font-weight-normal ls-normal">
                                Starting at <strong>$125.00</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="banner banner-fixed menu-banner5 br-xs">
                            <figure>
                              <img
                                src="assets/images/menu/banner-6.jpg"
                                alt="Banner"
                                width={410}
                                height={123}
                                style={{ backgroundColor: "#9f9888" }}
                              />
                            </figure>
                            <div className="banner-content y-50">
                              <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                Best Seller
                              </h4>
                              <h3 className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                Chair &amp; Lamp
                              </h3>
                              <div className="banner-price-info font-weight-normal ls-normal text-white">
                                From <strong>$165.00</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-heartbeat" />
                      Healthy &amp; Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="w-icon-gift" />
                      Gift Ideas{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-gamepad" />
                      Toy &amp; Games
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-ice-cream" />
                      Cooking
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="w-icon-ios" />
                      Smart Phones{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-camera" />
                      Cameras &amp; Photo
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="w-icon-ruby" />
                      Accessories{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-weight-bold text-primary text-uppercase ls-25"
                    >
                      View All Categories
                      <i className="w-icon-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <form
              method="get"
              action="#"
              className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4"
            >
              <div className="select-box">
                <select id="category" name="category">
                  <option value="">All Categories</option>
                  <option value={4}>Fashion</option>
                  <option value={5}>Furniture</option>
                  <option value={6}>Shoes</option>
                  <option value={7}>Sports</option>
                  <option value={8}>Games</option>
                  <option value={9}>Computers</option>
                  <option value={10}>Electronics</option>
                  <option value={11}>Kitchen</option>
                  <option value={12}>Clothing</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search in..."
                required=""
              />
              <button className="btn btn-search" type="submit">
                <i className="w-icon-search" />
              </button>
            </form>
          </div>
          <div className="header-right pr-0 ml-4">
            <a href="#">
              <i className="w-icon-sale" />
              Daily Deals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// hamburger menu when cliked, this will be shown from left as a sidebar
function SideBarForMobile() {
  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-overlay" />
      {/* End of .mobile-menu-overlay */}
      <a href="#" className="mobile-menu-close">
        <i className="close-icon" />
      </a>
      {/* End of .mobile-menu-close */}
      <div className="mobile-menu-container scrollable">
        <form action="#" method="get" className="input-wrapper">
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
        {/* End of Search Form */}
        <div className="tab">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a href="#main-menu" className="nav-link active">
                Main Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#categories" className="nav-link">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active" id="main-menu">
            <ul className="mobile-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
                <ul>
                  <li>
                    <a href="#">Shop Pages</a>
                    <ul>
                      <li>
                        <a href="#">Banner With Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Boxed Banner</a>
                      </li>
                      <li>
                        <a href="#">Full Width Banner</a>
                      </li>
                      <li>
                        <a href="#">
                          Horizontal Filter
                          <span className="tip tip-hot">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Off Canvas Sidebar
                          <span className="tip tip-new">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Infinite Ajax Scroll</a>
                      </li>
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Both Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>
                        <a href="#">3 Columns Mode</a>
                      </li>
                      <li>
                        <a href="#">4 Columns Mode</a>
                      </li>
                      <li>
                        <a href="#">5 Columns Mode</a>
                      </li>
                      <li>
                        <a href="#">6 Columns Mode</a>
                      </li>
                      <li>
                        <a href="#">7 Columns Mode</a>
                      </li>
                      <li>
                        <a href="#">8 Columns Mode</a>
                      </li>
                      <li>
                        <a href="#">List Mode</a>
                      </li>
                      <li>
                        <a href="#">List Mode With Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Product Pages</a>
                    <ul>
                      <li>
                        <a href="#">Variable Product</a>
                      </li>
                      <li>
                        <a href="#">Featured &amp; Sale</a>
                      </li>
                      <li>
                        <a href="#">Data In Accordion</a>
                      </li>
                      <li>
                        <a href="#">Data In Sections</a>
                      </li>
                      <li>
                        <a href="#">Image Swatch</a>
                      </li>
                      <li>
                        <a href="#">Extended Info</a>
                      </li>
                      <li>
                        <a href="#">Without Sidebar</a>
                      </li>
                      <li>
                        <a href="#">
                          360<sup>o</sup> &amp; Video
                          <span className="tip tip-new">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Product Layouts</a>
                    <ul>
                      <li>
                        <a href="#">
                          Default<span className="tip tip-hot">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Vertical Thumbs</a>
                      </li>
                      <li>
                        <a href="#">Grid Images</a>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">Sticky Info</a>
                      </li>
                      <li>
                        <a href="#">Sticky Thumbs</a>
                      </li>
                      <li>
                        <a href="#">Sticky Both</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Vendor</a>
                <ul>
                  <li>
                    <a href="#">Store Listing</a>
                    <ul>
                      <li>
                        <a href="#">Store listing 1</a>
                      </li>
                      <li>
                        <a href="#">Store listing 2</a>
                      </li>
                      <li>
                        <a href="#">Store listing 3</a>
                      </li>
                      <li>
                        <a href="#">Store listing 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Vendor Store</a>
                    <ul>
                      <li>
                        <a href="#">Vendor Store 1</a>
                      </li>
                      <li>
                        <a href="#">Vendor Store 2</a>
                      </li>
                      <li>
                        <a href="#">Vendor Store 3</a>
                      </li>
                      <li>
                        <a href="#">Vendor Store 4</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul>
                  <li>
                    <a href="#">Classic</a>
                  </li>
                  <li>
                    <a href="#">Listing</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="#">Grid 2 columns</a>
                      </li>
                      <li>
                        <a href="#">Grid 3 columns</a>
                      </li>
                      <li>
                        <a href="#">Grid 4 columns</a>
                      </li>
                      <li>
                        <a href="#">Grid sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="#">Masonry 2 columns</a>
                      </li>
                      <li>
                        <a href="#">Masonry 3 columns</a>
                      </li>
                      <li>
                        <a href="#">Masonry 4 columns</a>
                      </li>
                      <li>
                        <a href="#">Masonry sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="#">Blog mask grid</a>
                      </li>
                      <li>
                        <a href="#">Blog mask masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Become A Vendor</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Error 404</a>
                  </li>
                  <li>
                    <a href="#">Coming Soon</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Elements</a>
                <ul>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Titles</a>
                  </li>
                  <li>
                    <a href="#">Typography</a>
                  </li>
                  <li>
                    <a href="#">Product Category</a>
                  </li>
                  <li>
                    <a href="#">Buttons</a>
                  </li>
                  <li>
                    <a href="#">Accordions</a>
                  </li>
                  <li>
                    <a href="#">Alert &amp; Notification</a>
                  </li>
                  <li>
                    <a href="#">Tabs</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Blog Posts</a>
                  </li>
                  <li>
                    <a href="#">Instagrams</a>
                  </li>
                  <li>
                    <a href="#">Call to Action</a>
                  </li>
                  <li>
                    <a href="#">Vendors</a>
                  </li>
                  <li>
                    <a href="#">Icon Boxes</a>
                  </li>
                  <li>
                    <a href="#">Icons</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="categories">
            <ul className="mobile-menu">
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-tshirt2" />
                  Fashion{" "}
                </a>
                <ul>
                  <li>
                    <a href="#">Women</a>
                    <ul>
                      <li>
                        <a href="#">New Arrivals</a>
                      </li>
                      <li>
                        <a href="#">Best Sellers</a>
                      </li>
                      <li>
                        <a href="#">Trending</a>
                      </li>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                      <li>
                        <a href="#">Bags</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Jewlery &amp; Watches</a>
                      </li>
                      <li>
                        <a href="#">Sale</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Men</a>
                    <ul>
                      <li>
                        <a href="#">New Arrivals</a>
                      </li>
                      <li>
                        <a href="#">Best Sellers</a>
                      </li>
                      <li>
                        <a href="#">Trending</a>
                      </li>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                      <li>
                        <a href="#">Bags</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Jewlery &amp; Watches</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-home" />
                  Home &amp; Garden{" "}
                </a>
                <ul>
                  <li>
                    <a href="#">Bedroom</a>
                    <ul>
                      <li>
                        <a href="#">Beds, Frames &amp; Bases</a>
                      </li>
                      <li>
                        <a href="#">Dressers</a>
                      </li>
                      <li>
                        <a href="#">Nightstands</a>
                      </li>
                      <li>
                        <a href="#">Kid's Beds &amp; Headboards</a>
                      </li>
                      <li>
                        <a href="#">Armoires</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Living Room</a>
                    <ul>
                      <li>
                        <a href="#">Coffee Tables</a>
                      </li>
                      <li>
                        <a href="#">Chairs</a>
                      </li>
                      <li>
                        <a href="#">Tables</a>
                      </li>
                      <li>
                        <a href="#">Futons &amp; Sofa Beds</a>
                      </li>
                      <li>
                        <a href="#">Cabinets &amp; Chests</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Office</a>
                    <ul>
                      <li>
                        <a href="#">Office Chairs</a>
                      </li>
                      <li>
                        <a href="#">Desks</a>
                      </li>
                      <li>
                        <a href="#">Bookcases</a>
                      </li>
                      <li>
                        <a href="#">File Cabinets</a>
                      </li>
                      <li>
                        <a href="#">Breakroom Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Kitchen &amp; Dining</a>
                    <ul>
                      <li>
                        <a href="#">Dining Sets</a>
                      </li>
                      <li>
                        <a href="#">Kitchen Storage Cabinets</a>
                      </li>
                      <li>
                        <a href="#">Bashers Racks</a>
                      </li>
                      <li>
                        <a href="#">Dining Chairs</a>
                      </li>
                      <li>
                        <a href="#">Dining Room Tables</a>
                      </li>
                      <li>
                        <a href="#">Bar Stools</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-electronics" />
                  Electronics{" "}
                </a>
                <ul>
                  <li>
                    <a href="#">Laptops &amp; Computers</a>
                    <ul>
                      <li>
                        <a href="#">Desktop Computers</a>
                      </li>
                      <li>
                        <a href="#">Monitors</a>
                      </li>
                      <li>
                        <a href="#">Laptops</a>
                      </li>
                      <li>
                        <a href="#">Hard Drives &amp; Storage</a>
                      </li>
                      <li>
                        <a href="#">Computer Accessories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">TV &amp; Video</a>
                    <ul>
                      <li>
                        <a href="#">TVs</a>
                      </li>
                      <li>
                        <a href="#">Home Audio Speakers</a>
                      </li>
                      <li>
                        <a href="#">Projectors</a>
                      </li>
                      <li>
                        <a href="#">Media Streaming Devices</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Digital Cameras</a>
                    <ul>
                      <li>
                        <a href="#">Digital SLR Cameras</a>
                      </li>
                      <li>
                        <a href="#">Sports &amp; Action Cameras</a>
                      </li>
                      <li>
                        <a href="#">Camera Lenses</a>
                      </li>
                      <li>
                        <a href="#">Photo Printer</a>
                      </li>
                      <li>
                        <a href="#">Digital Memory Cards</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Cell Phones</a>
                    <ul>
                      <li>
                        <a href="#">Carrier Phones</a>
                      </li>
                      <li>
                        <a href="#">Unlocked Phones</a>
                      </li>
                      <li>
                        <a href="#">Phone &amp; Cellphone Cases</a>
                      </li>
                      <li>
                        <a href="#">Cellphone Chargers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-furniture" />
                  Furniture{" "}
                </a>
                <ul>
                  <li>
                    <a href="#">Furniture</a>
                    <ul>
                      <li>
                        <a href="#">Sofas &amp; Couches</a>
                      </li>
                      <li>
                        <a href="#">Armchairs</a>
                      </li>
                      <li>
                        <a href="#">Bed Frames</a>
                      </li>
                      <li>
                        <a href="#">Beside Tables</a>
                      </li>
                      <li>
                        <a href="#">Dressing Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="#">Lighting</a>
                    <ul>
                      <li>
                        <a href="#">Light Bulbs</a>
                      </li>
                      <li>
                        <a href="#">Lamps</a>
                      </li>
                      <li>
                        <a href="#">Celling Lights</a>
                      </li>
                      <li>
                        <a href="#">Wall Lights</a>
                      </li>
                      <li>
                        <a href="#">Bathroom Lighting</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="#">Home Accessories</a>
                    <ul>
                      <li>
                        <a href="#">Decorative Accessories</a>
                      </li>
                      <li>
                        <a href="#">Candals &amp; Holders</a>
                      </li>
                      <li>
                        <a href="#">Home Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Mirrors</a>
                      </li>
                      <li>
                        <a href="#">Clocks</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="#">Garden &amp; Outdoors</a>
                    <ul>
                      <li>
                        <a href="#">Garden Furniture</a>
                      </li>
                      <li>
                        <a href="#">Lawn Mowers</a>
                      </li>
                      <li>
                        <a href="#">Pressure Washers</a>
                      </li>
                      <li>
                        <a href="#">All Garden Tools</a>
                      </li>
                      <li>
                        <a href="#">Outdoor Dining</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-heartbeat" />
                  Healthy &amp; Beauty
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-gift" />
                  Gift Ideas{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-gamepad" />
                  Toy &amp; Games{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-ice-cream" />
                  Cooking{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-ios" />
                  Smart Phones{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-camera" />
                  Cameras &amp; Photo{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="w-icon-ruby" />
                  Accessories{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-weight-bold text-primary text-uppercase ls-25"
                >
                  View All Categories
                  <i className="w-icon-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Login Register
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="registerModal">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        aria-label="User Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="Password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="forgot">
                        <a href="#">Forgot Password?</a>
                        <button>Login</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        aria-label="User Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Create Password"
                        aria-label="Create Password"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="forgot">
                        <button>Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
