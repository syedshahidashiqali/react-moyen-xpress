export default function DealsOfTheDay() {
  return (
    <>
      <div className="title-link-wrapper mb-3 appear-animate">
        <h2 className="title title-deals mb-1">Deals Of The Day</h2>
        <div className="product-countdown-container font-size-sm text-dark align-items-center">
          <label>Offer Ends in: </label>
          <div
            className="product-countdown countdown-compact ml-1 font-weight-bold"
            data-until="+10d"
            data-relative="true"
            data-compact="true"
          >
            10days,00:00:00
          </div>
        </div>
        <a href="#" className="font-weight-bold ls-25">
          More Products
          <i className="w-icon-long-arrow-right" />
        </a>
      </div>
      {/* End of title-link-wrapper */}
      <div
        className="owl-carousel owl-theme row cols-lg-5 cols-md-4 cols-2 product-deals-wrapper appear-animate mb-7"
        data-owl-options="{
        'nav': false,
        'dots': true,
        'items': 5,
        'autoplay': false,
        'margin': 20,
        'responsive': {
            '0': {
                'items': 2,
                'nav': false
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
              <div className="product-label-group">
                <label className="product-label label-new">-50% OFF</label>
                <label className="product-label label-discount">Best</label>
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
        <div className="product-wrap">
          <div className="product text-center">
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/pro2b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro2f.jpg"
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
                <a href="#">T - SHIRTS</a>
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
                  src="assets/images/pro3b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro3f.jpg"
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
                <a href="#">HEADPHONES</a>
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
                  src="assets/images/pro4b.jpg"
                  alt="Product"
                  width={300}
                  height={338}
                />
                <img
                  src="assets/images/pro4f.jpg"
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
                <label className="product-label label-new">New</label>
              </div>
            </figure>
            <div className="product-details">
              <h4 className="product-name">
                <a href="#">Mobile Phone</a>
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
                  src="assets/images/demos/demo2/products/1-5.jpg"
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
                <a href="#">USB Charger</a>
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
    </>
  );
}
