import React, { useState, useEffect } from "react";
import { Textfit } from "react-textfit";
import Ticker from "react-ticker";
import PropTypes from "prop-types";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Testimonial from "../../components/testimonial";
import Brand from "../../components/brand";
import Button from "../../components/button";
import "./style.scss";
import WaveImg from "../../assets/img/wave.png";
import Section7Image from "../../assets/img/hero_3.png";
import GreenWaveImg from "../../assets/img/green_wave.png";
import AppleImg from "../../assets/img/brand_apple.png";
import AmazonImg from "../../assets/img/brand_amazon.png";
import EbayImg from "../../assets/img/brand_ebay.png";
import IkeaImg from "../../assets/img/brand_ikea.png";
import TargetImg from "../../assets/img/brand_target.png";
import Setup1Img from "../../assets/img/setup-1.png";
import Setup2Img from "../../assets/img/setup-2.png";
import Setup3Img from "../../assets/img/setup-3.png";
import SetupArrow1Img from "../../assets/img/setup-arrow1.png";
import SetupArrow2Img from "../../assets/img/setup-arrow2.png";
import { fetchContentfulStartAsync } from "../../redux/contentful/actions";
import { connect } from "react-redux";
import { withModules } from "../../components/shared/modules";

function Home({ fetchContentful, modules }) {
  console.log("modules", modules)
  const testimonials = modules && modules.testimonials;
  const industry = modules && modules.industry.fourColumns;

  const coveredBrands = [
    IkeaImg,
    TargetImg,
    AmazonImg,
    TargetImg,
    AmazonImg,
    EbayImg,
    AppleImg
  ];

  const featureCategories = [
    "Popular",
    "Trending",
    "New Arrivals",
    "Services",
    "Beauty",
    "Electronics"
  ];
  const [currentCategory, setCurrentCategory] = useState("Popular");

  useEffect(() => {
    fetchContentful();
  }, [fetchContentful]);
  return (
    <div className="home">
      <Header themeType="1"></Header>
      <div className="section-1">
        <div className="section-1-container">
          <div className="section-1-title">
            The fastest way to buy <br />
            the things you love.
          </div>
          <div className="section-1-desc">
            Fast lets you check with just one click on all your favorite sites.
          </div>
          <div className="section-1-wave">
            <img className="m-auto" src={WaveImg} alt="wave"></img>
          </div>
          <div className="d-block m-auto">
            <div className="section-1-button">
              <button className="btn-fast">SETUP FAST CHEKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        {testimonials && (
          <Testimonial
            className="m-auto"
            comments={testimonials.threeColumns}
          />
        )}
      </div>
      <div className="section-3 container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1 className="title">Shop featured brands</h1>
          </div>
          <div className="col-md-8 categories">
            {featureCategories.map((feature, indx)=> {
              let className =
                "category-item-text " +
                (feature === currentCategory ? "active" : "");
              return (
                <div key={indx} className={"category-item"}>
                  <div
                    className={className}
                    onClick={() => {
                      setCurrentCategory(feature);
                    }}
                  >
                    <div>{feature}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row clearfix">
          <Textfit mode="single" max={300} className="section-3-background">
            {currentCategory}
          </Textfit>
          {industry && <Brand brands={industry} indus={industry} />}
        </div>
        <div className="row mt-5 mb-5 mt-xs-3 mt-xs-3 d-flex justify-content-center">
          <div className="see_all_button">See all</div>
        </div>
      </div>
      <div className="section-4">
        <div className="section-4-1">We've got you covered</div>
        <div className="section-4-2">
          <div className="m-auto">
            <Ticker offset="25%" speed={7} move={true}>
              {({ index }) => (
                <div
                  style={{
                    height: "30px",
                    paddingLeft: "30px",
                    paddingRight: "30px"
                  }}
                >
                  <img
                    src={coveredBrands[index % coveredBrands.length]}
                    style={{ height: "30px" }}
                    alt="brand"
                  ></img>
                </div>
              )}
            </Ticker>
          </div>
        </div>
      </div>
      <div className="section-5">
        <h1 className="section-5-title">
          Complete your Purchase in 3 Easy Steps
        </h1>
        <div className="section-5-wave">
          <img className="m-auto" src={GreenWaveImg} alt="wave"></img>
        </div>
        <div className="section-5-container container">
          <div className="setup mt-md-5">
            <div className="setup-img">
              <img src={Setup1Img} alt="number"></img>
            </div>
            <h3 className="setup-title">Setup Fast Checkout</h3>
            <p className="setup-desc">
              Fill our request form just once and <br /> get your info cookied.
            </p>
          </div>
          <div className="setup-arrow">
            <img src={SetupArrow1Img} alt="arrow"></img>
          </div>
          <div className="setup">
            <div className="setup-img">
              <img src={Setup2Img} alt="number"></img>
            </div>
            <h3 className="setup-title">
              Browse our featured <br /> brands
            </h3>
            <p className="setup-desc">
              Shop from our partners directly on fast
            </p>
          </div>
          <div className="setup-arrow">
            <img src={SetupArrow2Img} alt="arrow"></img>
          </div>
          <div className="setup mt-md-5">
            <div className="setup-img">
              <img src={Setup3Img} alt="number"></img>
            </div>
            <h3 className="setup-title">Superfast checkout</h3>
            <p className="setup-desc">
              Since your info is cookied you dont have <br /> to fill anything.
              Its as simple as ABC!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center setup-fast-row">
          <Button type="green" width={244}>
            SETUP FAST
          </Button>
        </div>
      </div>
      <div className="section-6">
        <div className="section-6-container container">
          <h3 className="section-6-title">
            Let's work <br />
            together.
          </h3>
          <p className="section-6-desc">
            Integrate Fast checkout and start boosting your sales.
          </p>
          <div className="section-6-footer">
            <div className="d-flex justify-content-center">
              <Button type="green" width={189}>
                GO FAST
              </Button>
            </div>
            <div className="d-flex justify-content-center">
              <a className="learn-more" href="/#">
                Learn more >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-7 container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-7-2">
              <div className="section-7-2-title">
                Safe & <br />
                Secure.
              </div>
              <div className="section-7-2-desc">
              Safety and security is one of our highest priorities at Fast. Your information is fully encrypted and we are compliant with payments privacy standards.
              </div>
              <div className="section-7-2-footer">
                <Button type="green" width={244}>
                  VIEW SECURITY DETAILS
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Section7Image} alt="Section 7 image"></img>
          </div>
        </div>
      </div>
      <div className="section-8">
        <div className="section-8-container container">
          <div className="section-8-box">
            <div className="section-8-title">
              Fast app is coming soon. <br /> Its Faster and more secure
            </div>
            <div className="section-8-desc">
              Input your email address, we'll send you a download link.
            </div>
            <div className="section-8-input">
              <div className="email-input">
                <input placeholder="Email address"></input>
              </div>
              <div className="button">NOTIFY ME</div>
            </div>
            {/* <div className="section-8-apps">
              <div className="appstore"></div>
              <div className="googleplay"></div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

Home.propTypes = {
  fetchContentful: PropTypes.func.isRequired,
  modules: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchContentful: () => dispatch(fetchContentfulStartAsync("/index"))
});

export default withModules(connect(null, mapDispatchToProps)(Home));
