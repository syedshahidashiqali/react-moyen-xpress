import { useEffect, useState } from "react";
import Header from "../components/someCommon/Header";
import Breadcrumb from "../components/someCommon/BreadCrumb";

export default function ContactUs(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <div className="container">
      <main className="main">
        <Header name={"Contact Us"} />
        <Breadcrumb name={"Contact us"} />
        <div className="page-content contact-us">
          <div className="container">
            <section className="content-title-section mb-10">
              <h3 className="title title-center mb-3">Contact Information</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </section>
            <section className="contact-information-section mb-10">
              <ContactInfo />
            </section>
            <hr className="divider mb-10 pb-1" />
            <section className="contact-section">
              <div className="row gutter-lg pb-3">
                <div className="col-lg-6 mb-8">
                  <h4 className="title mb-3">People usually ask these</h4>
                  <Accordion />
                </div>
                <div className="col-lg-6 mb-8">
                  <h4 className="title mb-3">Send Us a Message</h4>
                  <Form />
                </div>
              </div>
            </section>
          </div>
          {/* Google Maps - Go to the bottom of the page to change settings and map location. */}
          <div className="google-map contact-google-map" id="googlemaps" />
          {/* End Map Section */}
        </div>
      </main>
    </div>
  );
}

function Accordion() {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion accordion-bg accordion-gutter-md accordion-border">
      <div
        className="card"
        onClick={(e) => {
          e.preventDefault();
          setShow("1");
        }}
      >
        <div className="card-header">
          <a href="#collapse1" className={show === "1" ? "collapse" : "expand"}>
            How can I cancel my order?
          </a>
        </div>
        <div
          id="collapse1"
          className={
            show === "1" ? "card-body expanded" : "card-body collapsed"
          }
        >
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp orincid idunt ut labore et dolore magna aliqua.
            Venenatis tellus in metus vulp utate eu sceler isque felis. Vel
            pretium.
          </p>
        </div>
      </div>
      <div
        className="card"
        onClick={(e) => {
          e.preventDefault();
          setShow("2");
        }}
      >
        <div className="card-header">
          <a href="#collapse2" className={show === "2" ? "collapse" : "expand"}>
            Why is my registration delayed?
          </a>
        </div>
        <div
          id="collapse2"
          className={
            show === "2" ? "card-body expanded" : "card-body collapsed"
          }
        >
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp orincid idunt ut labore et dolore magna aliqua.
            Venenatis tellus in metus vulp utate eu sceler isque felis. Vel
            pretium.
          </p>
        </div>
      </div>
      <div
        className="card"
        onClick={(e) => {
          e.preventDefault();
          setShow("3");
        }}
      >
        <div className="card-header">
          <a href="#collapse3" className={show === "3" ? "collapse" : "expand"}>
            What do I need to buy products?
          </a>
        </div>
        <div
          id="collapse3"
          className={
            show === "3" ? "card-body expanded" : "card-body collapsed"
          }
        >
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp orincid idunt ut labore et dolore magna aliqua.
            Venenatis tellus in metus vulp utate eu sceler isque felis. Vel
            pretium.
          </p>
        </div>
      </div>
      <div
        className="card"
        onClick={(e) => {
          e.preventDefault();
          setShow("4");
        }}
      >
        <div className="card-header">
          <a href="#collapse4" className={show === "4" ? "collapse" : "expand"}>
            How can I track an order?
          </a>
        </div>
        <div
          id="collapse4"
          className={
            show === "4" ? "card-body expanded" : "card-body collapsed"
          }
        >
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp orincid idunt ut labore et dolore magna aliqua.
            Venenatis tellus in metus vulp utate eu sceler isque felis. Vel
            pretium.
          </p>
        </div>
      </div>
      <div
        className="card"
        onClick={(e) => {
          e.preventDefault();
          setShow("5");
        }}
      >
        <div className="card-header">
          <a href="#collapse5" className={show === "5" ? "collapse" : "expand"}>
            How can I get money back?
          </a>
        </div>
        <div
          id="collapse5"
          className={
            show === "5" ? "card-body expanded" : "card-body collapsed"
          }
        >
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp orincid idunt ut labore et dolore magna aliqua.
            Venenatis tellus in metus vulp utate eu sceler isque felis. Vel
            pretium.
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form className="form contact-us-form" action="#" method="post">
      <div className="form-group">
        <label htmlFor="username">Your Name</label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email_1">Your Email</label>
        <input
          type="email"
          id="email_1"
          name="email_1"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={5}
          className="form-control"
          defaultValue={""}
        />
      </div>
      <button type="submit" className="btn btn-dark btn-rounded">
        Send Now
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div
      className="row owl-carousel owl-theme cols-xl-4 cols-md-3 cols-sm-2 cols-1"
      data-owl-options="{
      'items': 4,
      'nav': false,
      'dots': false,
      'loop': false,
      'margin': 20,
      'responsive': {
          '0': {
              'items': 1
          },
          '480': {
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
      <div className="icon-box text-center icon-box-primary">
        <span className="icon-box-icon icon-email">
          <i className="w-icon-envelop-closed" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">E-mail Address</h4>
          <p>mail@example.com</p>
        </div>
      </div>
      <div className="icon-box text-center icon-box-primary">
        <span className="icon-box-icon icon-headphone">
          <i className="w-icon-headphone" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Phone Number</h4>
          <p>(123) 456-7890 / (123) 456-9870</p>
        </div>
      </div>
      <div className="icon-box text-center icon-box-primary">
        <span className="icon-box-icon icon-map-marker">
          <i className="w-icon-map-marker" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Address</h4>
          <p>Lawrence, NY 11345, USA</p>
        </div>
      </div>
      <div className="icon-box text-center icon-box-primary">
        <span className="icon-box-icon icon-fax">
          <i className="w-icon-fax" />
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title">Fax</h4>
          <p>1-800-570-7777</p>
        </div>
      </div>
    </div>
  );
}
