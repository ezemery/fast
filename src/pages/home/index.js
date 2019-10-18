import React, { useState } from 'react';
import { Textfit } from 'react-textfit';
import Ticker from 'react-ticker';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Testimonial from '../../components/testimonial';
import Brand from '../../components/brand';
import Button from '../../components/button';
import './style.scss';
import WaveImg from '../../assets/img/wave.png';
import GreenWaveImg from '../../assets/img/green_wave.png';
import AppleImg from '../../assets/img/brand_apple.png';
import AmazonImg from '../../assets/img/brand_amazon.png';
import EbayImg from '../../assets/img/brand_ebay.png';
import IkeaImg from '../../assets/img/brand_ikea.png';
import TargetImg from '../../assets/img/brand_target.png';
import Setup1Img from '../../assets/img/setup-1.png';
import Setup2Img from '../../assets/img/setup-2.png';
import Setup3Img from '../../assets/img/setup-3.png';
import SetupArrow1Img from '../../assets/img/setup-arrow1.png';
import SetupArrow2Img from '../../assets/img/setup-arrow2.png';

function Home() {
	const [testimonial, setTestimonial] = useState([
		{
			comment: '"This is literally the fastest f**cking checkout ever"',
			user: 'Catrina via Harrisfarm',
			rating: 3,
		},
		{ comment: '"This is literally the fastest f**cking checkout ever"', user: 'Catrina - Harris Farm', rating: 5 },
		{ comment: '"This is literally the fastest f**cking checkout ever"', user: 'Catrina - Harris Farm', rating: 4 },
	]);
	const [brands, setBrands] = useState([
		{ name: 'Harris Farm', industry: 'Food' },
		{ name: '24Hundred', industry: 'Clothing' },
		{ name: 'Amazon', industry: 'Gadgets' },
		{ name: 'Fashion Nova', industry: 'Gadgets' },
		{ name: 'Amazon', industry: 'Gadgets' },
		{ name: 'Fashion Nova', industry: 'Gadgets' },
		{ name: '24Hundred', industry: 'Clothing' },
		{ name: 'Harris Farm', industry: 'Food' },
	]);

	const [coveredBrands, setCoveredBrands] = useState([
		IkeaImg,
		TargetImg,
		AmazonImg,
		TargetImg,
		AmazonImg,
		EbayImg,
		AppleImg,
	]);
	const featureCategories = ['Popular', 'Trending', 'New Arrivals', 'Services', 'Beauty', 'Electronics'];
	const [currentCategory, setCurrentCategory] = useState('Popular');

	return (
		<div className="home">
			<Header></Header>
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
						<img className="m-auto" src={WaveImg}></img>
					</div>
					<div className="d-flex">
						<div className="section-1-button d-flex">
							<div className="m-auto">Setup Fast Checkout</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-2">
				<Testimonial className="m-auto" comments={testimonial}></Testimonial>
			</div>
			<div className="section-3">
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<div className="title">Shop featured brands</div>
					</div>
					<div className="col-md-8 categories">
						{featureCategories.map(feature => {
							let className = 'category-item-text ' + (feature === currentCategory ? 'active' : '');
							return (
								<div className={'category-item'}>
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
					<Textfit mode="single" max={500} className="section-3-background">
						{currentCategory}
					</Textfit>
					<Brand brands={brands}></Brand>
				</div>
				<div className="row mt-5 mb-5 d-flex justify-content-center">
					<div className="see_all_button">See all</div>
				</div>
			</div>
			<div className="section-4">
				<div className="section-4-1">We've got you covered</div>
				<div className="section-4-2">
					<div className="m-auto">
						<Ticker offset="25%" speed={7} move={true}>
							{({ index }) => (
								<div style={{ height: '30px', paddingLeft: '30px', paddingRight: '30px' }}>
									<img
										src={coveredBrands[index % coveredBrands.length]}
										style={{ height: '30px' }}
									></img>
								</div>
							)}
						</Ticker>
					</div>
				</div>
			</div>
			<div className="section-5">
				<div className={'section-5-title'}>Get it done in 3 Easy steps</div>
				<div className="section-5-wave">
					<img className="m-auto" src={GreenWaveImg}></img>
				</div>
				<div className="section-5-container">
					<div className="setup mt-md-5">
						<div className="setup-img">
							<img src={Setup1Img}></img>
						</div>
						<div className="setup-title">Setup Fast Checkout</div>
						<div className="setup-desc">
							Fill our request form just once and <br /> get your info cookied.
						</div>
					</div>
					<div className="setup-arrow">
						<img src={SetupArrow1Img}></img>
					</div>
					<div className="setup">
						<div className="setup-img">
							<img src={Setup2Img}></img>
						</div>
						<div className="setup-title">
							Browse our featured <br /> brands
						</div>
						<div className="setup-desc">Shop from our partners directly on fast</div>
					</div>
					<div className="setup-arrow">
						<img src={SetupArrow2Img}></img>
					</div>
					<div className="setup mt-md-5">
						<div className="setup-img">
							<img src={Setup3Img}></img>
						</div>
						<div className="setup-title">Superfast checkout</div>
						<div className="setup-desc" style={{ fontSize: '14px' }}>
							Since your info is cookied you dont have <br /> to fill anything. Its as simple as ABC!
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center setup-fast-row">
					<Button type="green" width={244}>
						Setup Fast Checkout
					</Button>
				</div>
			</div>
			<div className="section-6">
				<div className="section-6-container">
					<div className="section-6-title">
						Let's work <br />
						together.
					</div>
					<div className="section-6-desc">Integrate Fast checkout and start boosting your sales.</div>
					<div className="section-6-footer">
						<div className="d-flex justify-content-center">
							<Button type="green" width={189}>
								I want to go fast
							</Button>
						</div>
						<div className="d-flex justify-content-center">
							<a className="learn-more">Learn more ></a>
						</div>
					</div>
				</div>
			</div>
			<div className="section-7">
				<div className="section-7-2">
					<div className="section-7-2-title">Fast is safer than safe</div>
					<div className="section-7-2-desc">
						Sed ut perspiciatis unde omnis iste natus error sit <br />
						voluptatem accusantium doloremque laudantium, totam
						<br />
						rem aperiam.
					</div>
					<div className="section-7-2-footer">
						<Button type="green" width={244}>
							View security details
						</Button>
						<div className="gdpr_compliant"></div>
						<div className="onetime_password"></div>
						<div className="ssl_secure"></div>
						<div className="secure_payments"></div>
					</div>
				</div>
			</div>
			<div className="section-8">
				<div className="section-8-container">
					<div className="section-8-box">
						<div className="section-8-title">
							Download the Fast app.
							<br /> Faster. Easier. More Secure
						</div>
						<div className="section-8-desc">Input your email address, we'll send you a download link.</div>
						<div className="section-8-input">
							<div className="email-input">
								<input placeholder="Email address"></input>
							</div>
							<div className="button">Get Link</div>
						</div>
						<div className="section-8-apps">
							<div className="appstore"></div>
							<div className="googleplay"></div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default Home;
