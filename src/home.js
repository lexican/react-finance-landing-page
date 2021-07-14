import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./assets/images/04.jpg";
import Banner2 from "./assets/images/02.jpg";
import Banner3 from "./assets/images/03.jpg";

import Image4 from "./assets/images/1.png";
import Image5 from "./assets/images/2.png";
import Image6 from "./assets/images/3.png";
import Image7 from "./assets/images/4.png";

import Face1 from "./assets/images/face16.jpg";
import Face2 from "./assets/images/face2.jpg";
import Face3 from "./assets/images/face3.jpg";

import Sidebar from "./components/SideBar"

export default class home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md">
          <Link className="navbar-brand" to="/">
            FinanceM4
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Sidebar/>
        </nav>
        <section className="cid-rOLoYFuEWo">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <div className="card  text-center">
                  <div className="content">
                    <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                      Financial Accounting
                    </h1>
                    <p className="mbr-text pb-3 mbr-semibold mbr-fonts-style display-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec ullamcorper neque dapibus ipsum semper, sit amet
                      luctus turpis porttitor. Ut libero ante, varius quis
                      ligula in.
                    </p>
                    <div className="mbr-section-btn pb-5">
                      <a
                        className="btn btn-sm btn-primary display-4 m-2"
                        href="https://mobirise.co/"
                      >
                        Sign up
                      </a>
                      <a
                        className="btn btn-sm btn-black-outline display-4 m-2"
                        href="https://mobirise.co/"
                      >
                        Learn more
                      </a>
                    </div>
                    <img src={Banner} alt="Mobirise"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info04 cid-rOM7mCDrl7">
          <div className="container align-items-left">
            <div className="row justify-content-center">
              <div className="mbr-black col-md-12 col-lg-12">
                <h1 className="mbr-section-title mbr-bold mbr-fonts-style display-1">
                  Accept online payments today.
                </h1>
                <p className="mbr-text pb-3 mbr-semibold mbr-fonts-style display-1">
                  Start growing your business with effortless payments.
                  <a href="#" className="text-primary">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cid-rOM5I4lxla">
          <div className="container">
            <div className="row">
              <div className="card col-12 col-md-12 col-lg-6 md-pb">
                <div className="card-wrapper text-center">
                  <div className="card-box align-center">
                    <span className="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                    <h4 className="card-title align-center mbr-semibold mbr-white mbr-fonts-style display-2">
                      <strong>Multicurrency</strong>
                    </h4>
                    <p className="mbr-text pb-3 mbr-white mbr-semibold mbr-fonts-style display-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>

                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-4">
                        <a href="#" className="text-white">
                          Learn more
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-12 col-lg-6">
                <div className="card-wrapper text-center">
                  <div className="card-box align-center">
                    <span className="mbr-iconfont mobi-mbri-protect mobi-mbri"></span>
                    <h4 className="card-title align-center mbr-semibold mbr-white mbr-fonts-style display-2">
                      <strong>Security</strong>
                    </h4>
                    <p className="mbr-text pb-3 mbr-semibold mbr-white mbr-fonts-style display-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>

                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-4">
                        <a href="#" className="text-white">
                          Learn more
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cid-rOM7DTApUY">
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-12 col-md-12 col-lg-7">
                <div className="card-wrapper">
                  <div className="card-box text-center">
                    <h4 className="card-title text-center mbr-semibold pb-3 mbr-black mbr-fonts-style display-1">
                      <strong>Timesaving, moneymaking</strong>
                    </h4>
                    <p className="mbr-text pb-3 mbr-semibold mbr-black mbr-fonts-style display-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum in fermentum tellus. Etiam turpis metus, mattis
                      vel ullamcorper sed, convallis eget tellus.
                    </p>

                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-7">
                        <a href="#" className="text-primary">
                          View all our features
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cid-rOM8xNO0gr">
          <div className="container">
            <div className="media-container-row">
              <div className="plan col-12 mx-3 my-3 justify-content-center col-lg-4">
                <div className="plan-header text-center">
                  <h3 className="plan-title mbr-semibold pb-3 mbr-fonts-style display-5">
                    Starting
                  </h3>
                  <div className="plan-price">
                    <h3 className="price-figure color1 pb-1 mbr-fonts-style display-1">
                      $19
                    </h3>
                    <h4 className="price-term pb-3 mbr-fonts-style display-7">
                      Per month
                    </h4>
                  </div>
                </div>
                <div className="plan-body text-center">
                  <div className="plan-list align-center">
                    <ul className="list-group list-group-flush mbr-fonts-style display-7">
                      <li className="list-group-item">Payment</li>
                      <li className="list-group-item">Dashboard</li>
                      <li className="list-group-item">Multicurrency</li>
                      <li className="list-group-item">Security</li>
                    </ul>
                  </div>
                  <div className="mbr-section-btn text-center pt-4">
                    <a
                      href="https://mobirise.co/"
                      className="btn btn-sm btn-primary display-4"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="plan col-12 mx-3 my-3 justify-content-center col-lg-4">
                <div className="plan-header text-center">
                  <h3 className="plan-title mbr-semibold pb-3 mbr-fonts-style display-5">
                    Basic
                  </h3>
                  <div className="plan-price">
                    <h3 className="price-figure color1 pb-1 mbr-fonts-style display-1">
                      $29
                    </h3>
                    <h4 className="price-term pb-3 mbr-fonts-style display-7">
                      Per month
                    </h4>
                  </div>
                </div>
                <div className="plan-body text-center">
                  <div className="plan-list align-center">
                    <ul className="list-group list-group-flush mbr-fonts-style display-7">
                      <li className="list-group-item">Payment</li>
                      <li className="list-group-item">Dashboard</li>
                      <li className="list-group-item">Multicurrency</li>
                      <li className="list-group-item">Security</li>
                    </ul>
                  </div>
                  <div className="mbr-section-btn text-center pt-4">
                    <a
                      href="https://mobirise.co/"
                      className="btn btn-sm btn-primary display-4"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>

              <div className="plan col-12 mx-3 my-3 justify-content-center col-lg-4">
                <div className="plan-header text-center">
                  <h3 className="plan-title mbr-semibold pb-3 mbr-fonts-style display-5">
                    Expert
                  </h3>
                  <div className="plan-price">
                    <h3 className="price-figure color1 pb-1 mbr-fonts-style display-1">
                      $39
                    </h3>
                    <h4 className="price-term pb-3 mbr-fonts-style display-7">
                      Per month
                    </h4>
                  </div>
                </div>
                <div className="plan-body text-center">
                  <div className="plan-list align-center">
                    <ul className="list-group list-group-flush mbr-fonts-style display-7">
                      <li className="list-group-item">Payment</li>
                      <li className="list-group-item">Dashboard</li>
                      <li className="list-group-item">Multicurrency</li>
                      <li className="list-group-item">Security</li>
                    </ul>
                  </div>
                  <div className="mbr-section-btn text-center pt-4">
                    <a
                      href="https://mobirise.co/"
                      className="btn btn-sm btn-primary display-4"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cid-rOMaPAY8vN">
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-12 col-md-12 col-lg-6">
                <div className="card-wrapper">
                  <div className="card-box text-left">
                    <h4 className="card-title text-left mbr-semibold pb-3 mbr-black mbr-fonts-style display-1">
                      <strong>Why partner with us?</strong>
                    </h4>
                    <p className="mbr-text pb-3 mbr-regular mbr-black mbr-fonts-style display-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum in fermentum tellus. Etiam turpis metus,
                      convallis eget tellus sit amet.
                    </p>

                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-7">
                        <a href="#">Become a partner</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="item mbr-flex">
                  <div className="icon-box">
                    <span className="mbr-iconfont mobi-mbri-globe-2 mobi-mbri"></span>
                  </div>
                  <div className="text-box">
                    <h4 className="icon-title mbr-semibold mbr-black mbr-fonts-style display-7">
                      <strong>Easy integration</strong>
                    </h4>
                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur elit.
                    </h5>
                  </div>
                </div>

                <div className="item flex">
                  <div className="icon-box">
                    <span className="mbr-iconfont mobi-mbri-update mobi-mbri"></span>
                  </div>
                  <div className="text-box">
                    <h4 className="icon-title mbr-semibold mbr-black mbr-fonts-style display-7">
                      <strong>Increased conversion</strong>
                    </h4>
                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur elit.
                    </h5>
                  </div>
                </div>

                <div className="item mbr-flex">
                  <div className="icon-box">
                    <span className="mbr-iconfont mobi-mbri-user-2 mobi-mbri"></span>
                  </div>
                  <div className="text-box">
                    <h4 className="icon-title mbr-semibold mbr-black mbr-fonts-style display-7">
                      <strong>Satisfied customers</strong>
                    </h4>
                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur elit.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cid-rOM5rKjpOn">
          <div className="container">
            <div className="row">
              <div className="card col-12 col-md-12 col-lg-6">
                <div className="wrapper text-left">
                  <h4 className="card-title mbr-semibold mbr-white mbr-fonts-style display-5">
                    <strong>A branded experience</strong>
                  </h4>

                  <p className="mbr-text pb-3 mbr-white mbr-semibold mbr-fonts-style display-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in fermentum tellus. Etiam turpis metus, mattis
                    vel ullamcorper sed, convallis eget tellus. Aliquam luctus
                    nisl justo, iaculis maximus tortor hendrerit eget. Quisque
                    vehicula nisl eget tincidunt auctor. Donec vitae justo
                    aliquet est luctus tincidunt eget eu mi. Aenean eget diam a
                    lectus maximus pharetra. Praesent semper, est nec ornare
                    luctus.
                  </p>
                </div>
              </div>
              <div className="card col-12 img-col col-md-12 col-lg-6 p-0 m-0">
                <img src={Banner2} alt="Mobirise" />
              </div>
            </div>
          </div>
        </section>

        <section className="cid-rOM5x06CUO">
          <div className="container">
            <div className="row">
              <div className="card col-12 img-col col-md-12 col-lg-6 m-0 p-0">
                <img src={Banner3} alt="Mobirise" />
              </div>

              <div className="card col-12 col-md-12 col-lg-6">
                <div className="wrapper align-left">
                  <h4 className="card-title mbr-semibold mbr-white mbr-fonts-style display-5">
                    <strong>One-click payments</strong>
                  </h4>

                  <p className="mbr-text pb-3 mbr-white mbr-semibold mbr-fonts-style display-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in fermentum tellus. Etiam turpis metus, mattis
                    vel ullamcorper sed, convallis eget tellus. Aliquam luctus
                    nisl justo, iaculis maximus tortor hendrerit eget. Quisque
                    vehicula nisl eget tincidunt auctor. Donec vitae justo
                    aliquet est luctus tincidunt eget eu mi. Aenean eget diam a
                    lectus maximus pharetra. Praesent semper, est nec ornare
                    luctus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cid-rOM5OI4pFc">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-lg-12">
                <h2 className="mbr-section-title main-title mbr-fonts-style pb-5 text-center mbr-black display-2">
                  <strong>Our Clients</strong>
                </h2>
              </div>
              <div className="card col-12 col-md-6 col-lg-3 md-pb">
                <div className="card-wrapper mbr-flex">
                  <div className="img-wrapper text-center">
                    <img src={Image4} alt="Mobirise" />
                  </div>
                  <div className="card-box text-center">
                    <h4 className="card-title align-center mbr-semibold mbr-fonts-style display-5">
                      <strong>COMFORT</strong>
                    </h4>
                    <p className="mbr-text mbr-semibold mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestium fermentum tellus.
                    </p>
                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-4">
                        <a href="#" className="text-primary">
                          Learn more
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12 col-md-6 col-lg-3">
                <div className="card-wrapper mbr-flex">
                  <div className="img-wrapper text-center">
                    <img src={Image5} alt="Mobirise" />
                  </div>
                  <div className="card-box text-center">
                    <h4 className="card-title align-center mbr-semibold mbr-fonts-style display-5">
                      <strong>GEARHEAD</strong>
                    </h4>
                    <p className="mbr-text mbr-semibold mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestium fermentum tellus.
                    </p>
                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-4">
                        <a href="#" className="text-primary">
                          Learn more
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12 col-md-6 col-lg-3">
                <div className="card-wrapper mbr-flex">
                  <div className="img-wrapper text-center">
                    <img src={Image6} alt="Mobirise" />
                  </div>
                  <div className="card-box text-center">
                    <h4 className="card-title align-center mbr-semibold mbr-fonts-style display-5">
                      <strong>STYLE</strong>
                    </h4>
                    <p className="mbr-text mbr-semibold mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestium fermentum tellus.
                    </p>
                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-4">
                        <a href="#" className="text-primary">
                          Learn more
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12 col-md-6 col-lg-3">
                <div className="card-wrapper mbr-flex">
                  <div className="img-wrapper text-center">
                    <img src={Image7} alt="Mobirise" />
                  </div>
                  <div className="card-box text-center">
                    <h4 className="card-title align-center mbr-semibold mbr-fonts-style display-5">
                      <strong>ORGANIC</strong>
                    </h4>
                    <p className="mbr-text mbr-semibold mbr-fonts-style display-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestium fermentum tellus.
                    </p>
                    <div className="link-wrap">
                      <h5 className="link mbr-bold mbr-black mbr-fonts-style display-4">
                        <a href="#" className="text-primary">
                          Learn more
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cid-rOM7eMwH0f">
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-12 col-md-12 col-lg-6">
                <div className="wrapper text-left">
                  <h4 className="card-title mbr-semibold mbr-white mbr-fonts-style display-5">
                    <strong>Ultimate data protection</strong>
                  </h4>

                  <p className="mbr-text pb-3 mbr-white mbr-semibold mbr-fonts-style display-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in fermentum tellus. Etiam turpis metus, mattis
                    vel ullamcorper sed, convallis eget tellus. Aliquam luctus
                    nisl justo, iaculis maximus tortor hendrerit eget.
                  </p>
                </div>
              </div>

              <div className="card col-12 col-md-12 col-lg-6">
                <div className="wrapper text-left">
                  <h4 className="card-title mbr-semibold mbr-white mbr-fonts-style display-5">
                    <strong>Secure internet payments</strong>
                  </h4>

                  <p className="mbr-text pb-3 mbr-white mbr-semibold mbr-fonts-style display-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in fermentum tellus. Etiam turpis metus, mattis
                    vel ullamcorper sed, convallis eget tellus. Aliquam luctus
                    nisl justo, iaculis maximus tortor hendrerit eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cid-rOM5VhJ4A3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 main-heading pb-5">
                <h2 className="mbr-section-title main-title mbr-fonts-style text-center mbr-black display-2">
                  <strong>Our team</strong>
                </h2>
              </div>
              <div className="col-sm-6 team-card col-lg-4">
                <div className="card-wrap">
                  <div className="image-wrap">
                    <img src={Face1} alt="" />
                  </div>
                  <div className="content-wrap">
                    <h3 className="mbr-section-title card-title mbr-fonts-style text-center mbr-black display-5">
                      John Smith
                    </h3>
                    <h3 className="mbr-section-subtitle mbr-fonts-style mbr-role text-center pt-2 display-4">
                      Programmer
                    </h3>
                    <h3 className="mbr-section-subtitle mbr-fonts-style card-text text-center mbr-lighter pt-3 display-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis, pariatur.
                    </h3>
                    <div className="mbr-section-btn card-btn text-center">
                      <a
                        className="btn btn-md btn-primary display-4"
                        href="https://mobirise.com/"
                      >
                        CONTACT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 team-card col-lg-4">
                <div className="card-wrap">
                  <div className="image-wrap">
                    <img src={Face2} alt="" />
                  </div>
                  <div className="content-wrap">
                    <h3 className="mbr-section-title card-title mbr-fonts-style text-center mbr-black display-5">
                      Ann Brown
                    </h3>
                    <h3 className="mbr-section-subtitle mbr-fonts-style mbr-role text-center pt-2 display-4">
                      Manager
                    </h3>
                    <h3 className="mbr-section-subtitle mbr-fonts-style card-text text-center mbr-lighter pt-3 display-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis, pariatur.
                    </h3>
                    <div className="mbr-section-btn card-btn text-center">
                      <a
                        className="btn btn-md btn-primary display-4"
                        href="https://mobirise.com/"
                      >
                        CONTACT
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 team-card col-lg-4 last-row-card last-card">
                <div className="card-wrap">
                  <div className="image-wrap">
                    <img src={Face3} alt="" />
                  </div>
                  <div className="content-wrap">
                    <h3 className="mbr-section-title card-title mbr-fonts-style text-center mbr-black display-5">
                      Mark Doe
                    </h3>
                    <h3 className="mbr-section-subtitle mbr-fonts-style mbr-role text-center pt-2 display-4">
                      Analyst
                    </h3>
                    <h3 className="mbr-section-subtitle mbr-fonts-style card-text text-center mbr-lighter pt-3 display-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis, pariatur.
                    </h3>
                    <div className="mbr-section-btn card-btn text-center">
                      <a
                        className="btn btn-md btn-primary display-4"
                        href="https://mobirise.com/"
                      >
                        CONTACT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cid-rOM8KK0qFY">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="mbr-white col-md-12 col-lg-8">
                <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-5">
                  Can't find what you're looking for? Please contact our
                  support, for help.
                </h1>

                <div className="mbr-section-btn">
                  <a
                    className="btn btn-sm btn-primary-outline display-4"
                    href="https://mobirise.co/"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 flex justify-content-center">
                <p>
                  I'm a frontend developer{" "}
                  <span className="ml-2">
                    <a
                      className="ml-2"
                      target="_blank"
                      href="https://linkedin.com/in/adekunle-adeyemo-b7530718a
"
                    >
                      linkedin
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
