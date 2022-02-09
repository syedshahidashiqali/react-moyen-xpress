export default function RelatedProducts(props) {
  const { isHome, setIsHome } = props.home;

  if (isHome === true) {
    setIsHome(false);
  }
  return (
    <div className="container">
      <div className="title-link-wrapper mb-2 appear-animate">
        <h2 className="title">Related Products</h2>
        <a href="#" className="font-weight-bold ls-25">
          More Products
          <i className="w-icon-long-arrow-right" />
        </a>
      </div>
      <div
        className="owl-carousel owl-theme top-products row cols-lg-5 cols-md-4 cols-sm-3 cols-2 mb-6 appear-animate"
        data-owl-options="{
        'nav': false,
        'dots': true,
        'margin': 20,
        'responsive': {
            '0': {
                'items': 2
            },
            '576': {
                'items': 3
            },
            '768': {
                'items': 4
            },
            '992': {
                'items': 5
            }
        }
    }"
      >
        <div className="product-wrap">
          <div className="product text-center">
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/pro5b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro5f.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist w-icon-heart"
                  title="Add to wishlist"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-quickview w-icon-search"
                  title="Quickview"
                />
              </div>
              <div className="product-label-group">
                <label className="product-label label-new">-50% OFF</label>
                <label className="product-label label-discount">Best</label>
              </div>
            </figure>
            <div className="product-details">
              <h4 className="product-name">
                <a href="#">WATCH</a>
              </h4>
              <div className="product-price">
                <ins className="new-price">
                  <del>$349.00</del> $349.00
                </ins>
              </div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
            <div className="product-countdown-container">
              <div
                className="product-countdown countdown-compact"
                data-until="2021, 9, 9"
                data-format="DHMS"
                data-compact="false"
                data-labels-short="Days, Hours, Mins, Secs"
              >
                00:00:00:00
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="product text-center">
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/pro6b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro6f.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist w-icon-heart"
                  title="Add to wishlist"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-quickview w-icon-search"
                  title="Quickview"
                />
              </div>
              <div className="product-label-group">
                <label className="product-label label-new">-50% OFF</label>
                <label className="product-label label-discount">Best</label>
              </div>
            </figure>
            <div className="product-details">
              <h4 className="product-name">
                <a href="#">CAMERA</a>
              </h4>
              <div className="product-price">
                <ins className="new-price">
                  <del>$349.00</del> $349.00
                </ins>
              </div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="product text-center">
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/pro7b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro7f.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist w-icon-heart"
                  title="Add to wishlist"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-quickview w-icon-search"
                  title="Quickview"
                />
              </div>
            </figure>
            <div className="product-details">
              <h4 className="product-name">
                <a href="#">PHANTOM DRONE </a>
              </h4>
              <div className="product-price">
                <ins className="new-price">
                  <del>$349.00</del> $349.00
                </ins>
              </div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="product text-center">
            <figure className="product-media">
              <a href={3}>
                <img
                  src="assets/images/pro8b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro8f.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist w-icon-heart"
                  title="Add to wishlist"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-quickview w-icon-search"
                  title="Quickview"
                />
              </div>
              <div className="product-label-group">
                <label className="product-label label-discount">Best</label>
              </div>
            </figure>
            <div className="product-details">
              <h4 className="product-name">
                <a href="#">SPEAKERS</a>
              </h4>
              <div className="product-price">
                <ins className="new-price">
                  <del>$349.00</del> $349.00
                </ins>
              </div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="product text-center">
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/pro1b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro1f.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist w-icon-heart"
                  title="Add to wishlist"
                />
                <a
                  href="#"
                  className="btn-product-icon btn-quickview w-icon-search"
                  title="Quickview"
                />
              </div>
            </figure>
            <div className="product-details">
              <h4 className="product-name">
                <a href="#">SHOES</a>
              </h4>
              <div className="product-price">
                <ins className="new-price">
                  <del>$349.00</del> $349.00
                </ins>
              </div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
