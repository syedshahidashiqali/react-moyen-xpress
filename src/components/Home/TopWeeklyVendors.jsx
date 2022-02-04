export default function TopWeeklyVendors() {
  return (
    <>
      <h2 className="title mb-5 appear-animate">Top Weekly Vendors</h2>
      <div
        className="owl-carousel owl-theme vendor-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1 mb-4 appear-animate"
        data-owl-options="{
        'nav': false,
        'dots': true,
        'margin': 20,
        'responsive': {
            '0': {
                'items': 1
            },
            '576': {
                'items': 2
            },
            '768': {
                'items': 3
            },
            '1200': {
                'items': 4
            }
        }
    }"
      >
        <div className="vendor-widget vendor-widget-1">
          <div className="vendor-products grid-type">
            <div className="vendor-product lg-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/collection1.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/collection-2.png"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/collection-3.png"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div className="vendor-details">
            <figure className="vendor-logo">
              <a href="#">
                <img
                  src="assets/images/demos/demo2/vendor-logo/1.jpg"
                  alt="Vendor Logo"
                  width={70}
                  height={70}
                />
              </a>
            </figure>
            <div className="vendor-personal">
              <h4 className="vendor-name">
                <a href="#">Vendor 1</a>
              </h4>
              <span className="vendor-product-count">(27 Products)</span>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor Widget */}
        <div className="vendor-widget vendor-widget-1">
          <div className="vendor-products grid-type">
            <div className="vendor-product lg-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-4.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-5.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-6.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div className="vendor-details">
            <figure className="vendor-logo">
              <a href="#">
                <img
                  src="assets/images/demos/demo2/vendor-logo/2.jpg"
                  alt="Vendor Logo"
                  width={70}
                  height={70}
                />
              </a>
            </figure>
            <div className="vendor-personal">
              <h4 className="vendor-name">
                <a href="#">Vendor 2</a>
              </h4>
              <span className="vendor-product-count">(20 Products)</span>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor Widget */}
        <div className="vendor-widget vendor-widget-1">
          <div className="vendor-products grid-type">
            <div className="vendor-product lg-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-7.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-8.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-9.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div className="vendor-details">
            <figure className="vendor-logo">
              <a href="vendor-dokan-store.html">
                <img
                  src="assets/images/demos/demo2/vendor-logo/3.jpg"
                  alt="Vendor Logo"
                  width={70}
                  height={70}
                />
              </a>
            </figure>
            <div className="vendor-personal">
              <h4 className="vendor-name">
                <a href="vendor-dokan-store.html">Vendor 3</a>
              </h4>
              <span className="vendor-product-count">(16 Products)</span>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor Widget */}
        <div className="vendor-widget vendor-widget-1">
          <div className="vendor-products grid-type">
            <div className="vendor-product lg-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-10.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-11.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
            <div className="vendor-product sm-item">
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/demos/demo2/products/2-12.jpg"
                    alt="Vendor Product"
                    width={300}
                    height={338}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div className="vendor-details">
            <figure className="vendor-logo">
              <a href="vendor-dokan-store.html">
                <img
                  src="assets/images/demos/demo2/vendor-logo/4.jpg"
                  alt="Vendor Logo"
                  width={70}
                  height={70}
                />
              </a>
            </figure>
            <div className="vendor-personal">
              <h4 className="vendor-name">
                <a href="vendor-dokan-store.html">Vendor 4</a>
              </h4>
              <span className="vendor-product-count">(23 Products)</span>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor Widget */}
      </div>
    </>
  );
}
