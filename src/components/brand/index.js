<<<<<<< HEAD
import React from 'react';
import Swiper from 'react-id-swiper';
import AspectRatio from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './style.scss';
import 'swiper/css/swiper.css';
import HarrisFarmImg from '../../assets/img/harris_farm.png';
import Hundred24Img from '../../assets/img/24hundred.png';
import AmazonImg from '../../assets/img/amazon.png';
import FashionNovaImg from '../../assets/img/fashion_nova.png';
import HarrisFarmBackImg from '../../assets/img/harris_farm_back.png';
import Hundred24BackImg from '../../assets/img/24hundred_back.png';
import AmazonBackImg from '../../assets/img/amazon_back.png';
import FashionNovaBackImg from '../../assets/img/fashion_nova_back.png';
=======
import React from "react";
import Swiper from "react-id-swiper";
import AspectRatio from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";
import "react-id-swiper/lib/styles/css/swiper.css";
import "./style.scss";
>>>>>>> develop

function BrandItem(props) {
  const { name, industry, backImg } = props;
  return (
    <div className="brand-item">
      <AspectRatio
        ratio="1"
        className="brand-item-img"
        style={{ backgroundImage: `url(${backImg})` }}
      ></AspectRatio>
      <div className={"brand-item-name"}>{name}</div>
      <div className={"brand-item-industry"}>{industry}</div>
    </div>
  );
}

export const getBrandStyles = brands => {
  return brands.reduce((accum, curr) => {
    if (curr.bgImg) {
      accum[curr.name] = {
        img: curr.bgImg.file.url,
        backImg: curr.image.file.url
      };
    }
    return accum;
  }, {});
};

function Brand(props) {
  let { brands } = props;
  
  const brandStyles = getBrandStyles(brands);

	const swiperParams = {
    spaceBetween: 0,
    slidesPerView: 2,
    slidesPerColumn: 2,
    pagination: {
      el: ".customized-swiper-pagination",
      clickable: true
    }
  };
  return (
    <div className="brand-panel">
      <div className="mobile-layout">
        <Swiper {...swiperParams}>
          {brands.map((brand, indx) => {
            return (
              <div key={indx} className="swiper-slide">
                <BrandItem {...brandStyles[brand.name]} {...brand}></BrandItem>
              </div>
            );
          })}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      <div className="desktop-layout row">
        {brands.map((brand,indx) => {
          return (
            <div key={indx} className="col-md-3">
              <BrandItem {...brandStyles[brand.name]} {...brand}></BrandItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brand;
