import { useState, useEffect } from "react";
import { getApi } from "../../helperFuncs";
import { featuredDefault, Images_API } from "../../urls";
import OwlCarousel from "react-owl-carousel";

export default function DealsOfTheDay() {
  const [deals, setDeals] = useState([]);
  const getDealsOfTheDay = () => {
    getApi(featuredDefault).then((res) => {
      const dealData = res[0].slice(0, 50).map((deal) => ({
        id: deal?.id,
        name: deal?.name,
        images: deal?.images.slice(0, 2),
      }));
      setDeals(dealData);
    });
  };

  useEffect(() => {
    getDealsOfTheDay();
  }, [deals.length]);

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
      <OwlCarousel
        className="owl-carousel owl-theme row cols-lg-5 cols-md-4 cols-2 product-deals-wrapper appear-animate mb-7"
        nav={false}
        dots={true}
        items={5}
        autoplay={false}
        margin={20}
        responsive={{
          0: {
            items: 2,
            nav: false,
          },
          576: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
        }}
      >
        {deals?.length > 0 ? (
          deals?.map((deal) => (
            <Card key={deal?.id} name={deal?.name} images={deal?.images} />
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </OwlCarousel>
    </>
  );
}

function Card({ name, images }) {
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <a href="#">
            <img
              // style={{ width: "300px", height: "338px" }}
              // src="assets/images/pro1b.jpg"
              src={`${Images_API}${images[0]?.name}`}
              alt="Product"
              width={300}
              height={338}
            />
            <img
              // style={{ width: "300px", height: "338px" }}
              src="assets/images/pro1f.jpg"
              // src={`${Images_API}${images[1]?.name}`}
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
            <a href="#">{name}</a>
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
  );
}
