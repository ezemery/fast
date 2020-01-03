import React from 'react';
import Footer from '../footer';
import ShopBrandHarrisFarm from '../../static/img/shop_brand_harris_farm.png';
import ShopBrandFashionNova from '../../static/img/shop_brand_fashion_nova.png';
import ShopBrand2Hundred from '../../static/img/shop_brand_2hundred.png';
import ShopBrandAmazon from '../../static/img/shop_brand_amazon.png';
import Header from '../header';
import './style.scss';

function Step(props) {
	const { step, title, desc, button } = props;
	return (
		<div className="step">
			<div className="step-heading">{step}</div>
			<div className="step-title">{title}</div>
			<div className="step-desc">{desc}</div>
			<div>
				<div className="step-button">{button}</div>
			</div>
		</div>
	);
}

function HowItWorks() {
	const brands = [ShopBrandHarrisFarm, ShopBrandFashionNova, ShopBrand2Hundred, ShopBrandAmazon, ShopBrandHarrisFarm];
	const steps = [
		{
			step: 'STEP 1',
			title:
				'Fast Login',
			desc: 'Get started by logging in on your favorite shopping platform with our Fast Login. Try it out immediately with the button below.',
			button: 'Get started'
		},
		{
			step: 'STEP 2',
			title:
				'Get shopping',
			desc: 'Shop products on with your favorite brands and add your choices to cart. Feel free to check out any of our featured brands.',
			button: 'Featured Brands'
		},
		{
			step: 'STEP 3',
			title:
				'Checkout and pay easily with Fast',
			desc: 'Checkout and pay with a single click with our Fast Pay feature. First time user? No worries. Get setup in a jiffy, here or at checkout point. Just select Fast Pay.',
			button: 'Get started'
		},
	
	];

	return (
		<div className="howitworks-page">
			<Header themeType="2" buttonName="Go Fast" setup={true}></Header>
			<div className="banner">
				<div className="banner-title">
					Here's how to shop <br /> with Fast
				</div>
				<div className="banner-desc">
					in 3 easy steps
				</div>
			</div>
			<div className="section first">
				<div className='section-step'>
					<Step {...steps[0]} />
				</div>
				<div className='section-phone first'>
				</div>
				<div className='section-green-circle first' />
			</div>
			<div className="section lightblue">
				<div className='section-phone second'>
				</div>
				<div className='section-step mt0'>
					<Step {...steps[1]} />
				</div>
				<div className='section-green-circle second' />
			</div>
			<div className="section">
				<div className='section-step'>
					<Step {...steps[2]} />
				</div>
				<div className='section-phone third'>
				</div>
			</div>
			<div className='shop-brands'>
				<div className='shop-brands-panel'>
					<div className='shop-brands-panel-heading'>
						Shop easily <br/> with Fast
					</div>
					<div className='shop-brands-panel-button'>See Featured Brands</div>
				</div>
				<div className='shop-brands-logos'>
					{
						brands.map(brand=>{
							return (<div className='shop-brands-logos-img'><img src={brand} alt='brand' /></div>)
						})
					}
				</div>
			</div> 
			<Footer></Footer>
		</div>
	);
}

export default HowItWorks;
