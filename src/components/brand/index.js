import React from "react";
import Swiper from "react-id-swiper";
import AspectRatio from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";
import "react-id-swiper/lib/styles/css/swiper.css";
import styled from 'styled-components'
const BrandStyle =  styled.div`
.brand-panel {
	margin-top: 6px;
	width: 100%;

	@media screen and (max-width: 600px) {
		margin-top: 50px;
	}

	.swiper-pagination-bullet-active {
		background: #7cb342;
	}

	.customized-swiper-pagination{
		display: flex;
		justify-content: center;
		margin-top: 24px;
	}
	.swiper-slide {
		padding: 10px;
	}

	.brand-item {
		transition: all 1s ease;
		margin:2.5rem 1.5rem;

		@media screen and (max-width: 600px) {
			width: 100%;
			margin: 0;
		}

		&-img {
			border-radius: 10px;
			display: flex;
			background-size: 100% 100%;
		}

		&-name {
			color: #363636;
			font-family: Graphik;
			font-size: 18px;
			line-height: 25px;
			text-align: center;
			margin-top: 40px;
		}

		&-industry {
			text-align: center;
			font-size: 16px;
			line-height: 18px;
			color: #c8c8c8;
		}
	}
	.col-md-3{
		transition: all 1s ease;
		cursor: pointer;
		&:hover{
			background: #FFFFFF;
			box-shadow: 0px 0px 70px rgba(43, 68, 3, 0.1);
			border-radius: 10px;
		}
	}
	.brand-item:last-child {
		
	}
}

.mobile-layout {
	display: none;
	width: 100%;

	@media screen and (max-width: 600px) {
		display: block;
	}
}

.desktop-layout {
	@media screen and (max-width: 600px) {
		display: none !important;
	}
}
`;

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
    <BrandStyle>
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
    </BrandStyle>
  );
}

export default Brand;
