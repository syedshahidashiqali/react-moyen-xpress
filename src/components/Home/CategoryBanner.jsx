export default function CategoryBanner() {
  return (
    <div className="row category-wrapper electronics-cosmetics appear-animate mb-7">
      <div className="col-md-6 mb-4">
        <div className="banner banner-fixed br-sm">
          <figure>
            <img
              src="assets/images/categories1.jpg"
              alt="Category Banner"
              width={640}
              height={200}
              style={{ backgroundColor: "#25282d" }}
            />
          </figure>
          <div className="banner-content banner-content1 y-50">
            <h3 className="banner-title text-black ls-25 mb-0">
              Cosmetic Sets
            </h3>
            <div className="banner-price-info text-grey font-weight-bold text-uppercase mb-1">
              Cosmetic Sets
              <strong className="text-secondary">30% Off</strong>
            </div>
            <hr className="banner-divider bg-dark" />
            <a
              href="#"
              className="btn text-black btn-link btn-underline btn-icon-right"
            >
              Shop Now
              <i className="w-icon-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="banner banner-fixed br-sm">
          <figure>
            <img
              src="assets/images/categories2.jpg"
              alt="Category Banner"
              width={640}
              height={200}
              style={{ backgroundColor: "#eeedec" }}
            />
          </figure>
          <div className="banner-content y-50">
            <h3 className="banner-title ls-25 text-white text-capitalize mb-0">
              Electronic
            </h3>
            <div className="banner-price-info text-dark font-weight-bold text-uppercase mb-1">
              Best Seller
            </div>
            <hr className="banner-divider bg-white" />
            <a
              href="#"
              className="btn text-white btn-link btn-underline btn-icon-right"
            >
              Shop Now
              <i className="w-icon-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
