import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import AspectRatio from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './style.scss';
import HarrisFarmImg from '../../assets/img/harris_farm.png';
import Hundred24Img from '../../assets/img/24hundred.png';
import AmazonImg from '../../assets/img/amazon.png';
import FashionNovaImg from '../../assets/img/fashion_nova.png';
import HarrisFarmBackImg from '../../assets/img/harris_farm_back.png';
import Hundred24BackImg from '../../assets/img/24hundred_back.png';
import AmazonBackImg from '../../assets/img/amazon_back.png';
import FashionNovaBackImg from '../../assets/img/fashion_nova_back.png';

function BrandItem(props) {
	const { img, name, industry, backImg } = props;
	return (
		<div className={'brand-item'}>
			<AspectRatio
				ratio="1"
				className={'brand-item-img'}
				style={{ backgroundImage: `url(${backImg})` }}
			></AspectRatio>
			<div className={'brand-item-name'}>{name}</div>
			<div className={'brand-item-industry'}>{industry}</div>
		</div>
	);
}

function Brand(props) {
	let { brands } = props;
	const brandStyles = {
		'Harris Farm': { img: HarrisFarmImg, backImg: HarrisFarmBackImg },
		'24Hundred': { img: Hundred24Img, backImg: Hundred24BackImg },
		Amazon: { img: AmazonImg, backImg: AmazonBackImg },
		'Fashion Nova': { img: FashionNovaImg, backImg: FashionNovaBackImg },
	};
	const swiperParams = {
		slidesPerView: 'auto',
		spaceBetween: 0,
		slidesPerView: 2,
		slidesPerColumn: 2,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	};
	return (
		<div className="brand-panel">
			<div className="mobile-layout">
				<Swiper {...swiperParams}>
					{brands.map(brand => {
						return (
							<div className="swiper-slide">
								<BrandItem {...brandStyles[brand.name]} {...brand}></BrandItem>
							</div>
						);
					})}
				</Swiper>
			</div>
			<div className="desktop-layout">
				{brands.map(brand => {
					return <BrandItem {...brandStyles[brand.name]} {...brand}></BrandItem>;
				})}
			</div>
		</div>
	);
}

export default Brand;
