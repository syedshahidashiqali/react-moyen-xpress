export default function OurVendor() {
  return (
    <div className="container">
      <h2 className="text-center title mb-5 appear-animate">Our Vendors</h2>
      <div
        className="owl-carousel owl-theme row cols-xl-8 cols-lg-6 cols-md-4 cols-sm-3 cols-2 brands-wrapper br-sm mb-10 appear-animate"
        data-owl-options="{
          'nav': false,
          'dots': false,
          'autoplay': true,
          'autoplayTimeout': 4000,
          'loop': true,
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
                  'items': 6
              },
              '1200': {
                  'items': 6
              }
          }
      }"
      >
        <figure>
          <img
            src="assets/images/vendor1.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor2.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor3.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor4.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor5.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor6.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor1.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
        <figure>
          <img
            src="assets/images/vendor2.png"
            alt="Brand"
            width={290}
            height={100}
          />
        </figure>
      </div>
    </div>
  );
}
