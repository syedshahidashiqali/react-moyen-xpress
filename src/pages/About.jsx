import { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Header from "../components/someCommon/Header";
import Breadcrumb from "../components/someCommon/BreadCrumb";

export default function About(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <main className="main about-us">
      <div className="container">
        <main className="main">
          <Header name={"About Us"} />
          <Breadcrumb name={"About us"} />
          <div className="page-content">
            <div className="container">
              <section className="introduce mb-10 pb-10">
                <h2 className="title title-center">
                  We’re Devoted Marketing
                  <br />
                  Consultants Helping Your Business Grow
                </h2>
                <p className=" mx-auto text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor labore et dolore magna aliqua. Venenatis
                  tellu metus
                </p>
                <figure className="br-lg">
                  <img
                    src="assets/images/pages/about_us/1.jpg"
                    alt="Banner"
                    width={1240}
                    height={540}
                    style={{ backgroundColor: "#D0C1AE" }}
                  />
                </figure>
              </section>
              <CustomerService />
              <CountSection />
            </div>
            <section className="boost-section pt-10 pb-10">
              <div className="container mt-10 mb-9">
                <div className="row align-items-center mb-10">
                  <div className="col-md-6 mb-8">
                    <figure className="br-lg">
                      <img
                        src="assets/images/pages/about_us/3.jpg"
                        alt="Banner"
                        width={610}
                        height={450}
                        style={{ backgroundColor: "#9E9DA2" }}
                      />
                    </figure>
                  </div>
                  <div className="col-md-6 pl-lg-8 mb-8">
                    <h4 className="title text-left">
                      We Boost Our Clients’ Bottom Line by Optimizing Their
                      Growth Potential
                    </h4>
                    <p className="mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Venenatis tellus in. metus vulputate eu
                      scelerisque felis. Vel pretium lectus qua . Arpis massa.
                      Nunc id cursus metus ididunt ut labore metus vulputate
                      episcing.
                    </p>
                    <a href="#" className="btn btn-dark btn-rounded">
                      Visit Our Store
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <OurLeaders />
          </div>
        </main>
      </div>
    </main>
  );
}

function CustomerService() {
  return (
    <section className="customer-service mb-7">
      <div className="row align-items-center">
        <div className="col-md-6 pr-lg-8 mb-8">
          <h2 className="title text-left">
            We Provide Continuous &amp; Kind Service for Customers
          </h2>
          <div className="accordion accordion-simple accordion-plus">
            <div className="card border-no">
              <div className="card-header">
                <a href="#collapse3-1" className="collapse">
                  Customer Service
                </a>
              </div>
              <div className="card-body expanded" id="collapse3-1">
                <p className="mb-0">
                  Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                  sed do eius mod tempor incididunt ut labore et dolore magna
                  aliqua. Venenatis tell us in metus vulputate eu scelerisque
                  felis. Vel pretium vulp.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a href="#collapse3-2" className="expand">
                  Online Consultation
                </a>
              </div>
              <div className="card-body collapsed" id="collapse3-2">
                <p className="mb-0">
                  Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                  sed do eius mod tempor incididunt ut labore et dolore magna
                  aliqua. Venenatis tell us in metus vulputate eu scelerisque
                  felis. Vel pretium vulp.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a href="#collapse3-3" className="expand">
                  Sales Management
                </a>
              </div>
              <div className="card-body collapsed" id="collapse3-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                  sed do eius mod tempor incididunt ut labore et dolore magna
                  aliqua. Venenatis tell us in metus vulputate eu scelerisque
                  felis. Vel pretium vulp.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-8">
          <figure className="br-lg">
            <img
              src="assets/images/pages/about_us/2.jpg"
              alt="Banner"
              width={610}
              height={500}
              style={{ backgroundColor: "#CECECC" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
function CountSection() {
  const [focus, setFocus] = useState(false);
  return (
    <section className="count-section mb-10 pb-5">
      <div
        className="owl-carousel owl-theme row cols-lg-3 cols-md-2 cols-1"
        data-owl-options="{
          'nav': false,
          'dots': true,
          'responsive': {
              '0': {
                  'items': 1
              },
              '768': {
                  'items': 2
              },
              '992': {
                  'items': 3
              }
          }
      }"
      >
        <div className="counter-wrap">
          <VisibilitySensor
            onChange={(isVisible) => {
              console.log(
                "count 1st is now %s",
                isVisible ? "visible" : "hidden"
              );
              if (isVisible) {
                setFocus(true);
                console.log("1st", isVisible);
              } else {
                setFocus(false);
              }
            }}
          >
            <>
              <div className="counter text-center">
                <>
                  {focus ? (
                    <CountUp
                      // redraw={true}
                      start={focus ? 0 : null}
                      end={focus ? 15 : null}
                      duration={2}
                    />
                  ) : null}
                  <span>M+</span>
                  <h4 className="title title-center">Products For Sale</h4>
                  <p>
                    Diam maecenas ultricies mi eget mauris
                    <br />
                    Nibh tellus molestie nunc non
                  </p>
                </>
              </div>
            </>
          </VisibilitySensor>
        </div>
        <div className="counter-wrap">
          <VisibilitySensor
            onChange={(isVisible) => {
              console.log(
                "count 2nd is now %s",
                isVisible ? "visible" : "hidden"
              );
              if (isVisible) {
                setFocus(true);
                console.log("2nd", isVisible);
              } else {
                setFocus(false);
              }
            }}
          >
            <>
              <div className="counter text-center">
                <>
                  {focus ? (
                    <>
                      <span>$</span>
                      <CountUp
                        // redraw={true}
                        start={focus ? 0 : null}
                        end={focus ? 25 : null}
                        duration={2}
                      />
                    </>
                  ) : null}
                  <span>B+</span>
                  <h4 className="title title-center">Community Earnings</h4>
                  <p>
                    Diam maecenas ultricies mi eget mauris
                    <br />
                    Nibh tellus molestie nunc non
                  </p>
                </>
              </div>
            </>
          </VisibilitySensor>
        </div>
        <div className="counter-wrap">
          <VisibilitySensor
            onChange={(isVisible) => {
              console.log(
                "count 3rd is now %s",
                isVisible ? "visible" : "hidden"
              );
              if (isVisible) {
                setFocus(true);
                console.log("3rd", isVisible);
              } else {
                setFocus(false);
              }
            }}
          >
            <div className="counter text-center">
              <>
                {focus ? (
                  <>
                    <CountUp
                      // redraw={true}
                      start={focus ? 0 : null}
                      end={focus ? 100 : null}
                      duration={2}
                    />
                  </>
                ) : null}
                <span>M+</span>
                <h4 className="title title-center">Growing Buyers</h4>
                <p>
                  Diam maecenas ultricies mi eget mauris
                  <br />
                  Nibh tellus molestie nunc non
                </p>
              </>
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
}
function OurLeaders() {
  return (
    <section className="member-section mt-10 pt-9 mb-10 pb-4">
      <div className="container">
        <h4 className="title title-center mb-3">Meet Our Leaders</h4>
        <p className="text-center mb-8">
          Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget.
          Aliquam
          <br />
          maecenas ultricies mi eget mauris. Volutpat ac
        </p>
        <div
          className="owl-carousel owl-theme row cols-xl-4 cols-lg-3 cols-sm-2 cols-1"
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
                          '992': {
                              'items': 4
                          }
                      }
                  }"
        >
          <div className="member-wrap">
            <figure className="br-lg">
              <img
                src="assets/images/pages/about_us/4.jpg"
                alt="Member"
                width={295}
                height={332}
              />
              <div className="overlay">
                <div className="social-icons">
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
                </div>
              </div>
            </figure>
            <div className="member-info text-center">
              <h4 className="member-name">John Doe</h4>
              <p className="text-uppercase">Founder &amp; CEO</p>
            </div>
          </div>
          <div className="member-wrap">
            <figure className="br-lg">
              <img
                src="assets/images/pages/about_us/5.jpg"
                alt="Member"
                width={295}
                height={332}
              />
              <div className="overlay">
                <div className="social-icons socialcenter">
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
                </div>
              </div>
            </figure>
            <div className="member-info text-center">
              <h4 className="member-name">Jessica Doe</h4>
              <p className="text-uppercase">Marketing</p>
            </div>
          </div>
          <div className="member-wrap">
            <figure className="br-lg">
              <img
                src="assets/images/pages/about_us/6.jpg"
                alt="Member"
                width={295}
                height={332}
              />
              <div className="overlay">
                <div className="social-icons">
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
                </div>
              </div>
            </figure>
            <div className="member-info text-center">
              <h4 className="member-name">Rick Edward Doe</h4>
              <p className="text-uppercase">Developer</p>
            </div>
          </div>
          <div className="member-wrap">
            <figure className="br-lg">
              <img
                src="assets/images/pages/about_us/7.jpg"
                alt="Member"
                width={295}
                height={332}
              />
              <div className="overlay">
                <div className="social-icons">
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
                </div>
              </div>
            </figure>
            <div className="member-info text-center">
              <h4 className="member-name">Melinda Wolosky</h4>
              <p className="text-uppercase">Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
