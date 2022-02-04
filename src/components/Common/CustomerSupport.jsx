export default function CustomerSupport() {
  return (
    <div
      className="owl-carousel owl-theme row cols-md-4 cols-sm-3 cols-1 icon-box-wrapper appear-animate br-sm mt-6 mb-10 appear-animate"
      data-owl-options="{
        'nav': false,
        'dots': false,
        'loop': true,
        'autoplay': true,
        'autoplayTimeout': 4000,
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
            '992': {
                'items': 3
            },
            '1200': {
                'items': 4
            }
        }
    }"
    >
      <div className="icon-box icon-box-side text-dark">
        <span className="icon-box-icon icon-shipping">
          <i className="w-icon-truck" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Free Shipping &amp; Returns</h4>
          <p className="text-default">For all orders over $99</p>
        </div>
      </div>
      <div className="icon-box icon-box-side text-dark">
        <span className="icon-box-icon icon-payment">
          <i className="w-icon-bag" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Secure Payment</h4>
          <p className="text-default">We ensure secure payment</p>
        </div>
      </div>
      <div className="icon-box icon-box-side text-dark icon-box-money">
        <span className="icon-box-icon icon-money">
          <i className="w-icon-money" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Money Back Guarantee</h4>
          <p className="text-default">Any back within 30 days</p>
        </div>
      </div>
      <div className="icon-box icon-box-side text-dark icon-box-chat">
        <span className="icon-box-icon icon-chat">
          <i className="w-icon-chat" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Customer Support</h4>
          <p className="text-default">Call or email us 24/7</p>
        </div>
      </div>
    </div>
  );
}
