import React from 'react';
import Footer from '../footer';
import styled from 'styled-components'
import ShopBrandHarrisFarm from '../../assets/img/shop_brand_harris_farm.png';
import ShopBrandFashionNova from '../../assets/img/shop_brand_fashion_nova.png';
import ShopBrand2Hundred from '../../assets/img/shop_brand_2hundred.png';
import ShopBrandAmazon from '../../assets/img/shop_brand_amazon.png';
import Header from '../header';
const HowItWorksStyle = styled.div`
.howitworks-page {
	font-family: 'Graphik';
	@media screen and (max-width: 600px) {
	}
  
	.banner {
	  padding-top: 159px;
	  padding-bottom: 49px;
	  text-align: center;
	  justify-content: center;
  
	  @media screen and (max-width: 600px) {
		padding-top: 129px;
		padding-bottom: 5px;
	  }
  
	  &-title {
		font-size: 60px;
		font-weight: 900;
		line-height: 125%;
		text-align: center;
		color: #363636;
		margin-bottom: 33px;
  
		@media screen and (max-width: 600px) {
		  width:100%;
		  font-size: 37px;
		  margin-bottom: 10px;
		}
	  }
  
	  &-desc{
		font-size: 24px;
		line-height: 25px;
		text-align: center;
		padding-bottom:24px;
		border-bottom: 1px solid #E0E6ED;
		color: #7CB342;
		width: 562px;
		margin-left: auto;
		margin-right: auto;
		@media screen and (max-width: 600px) {
		  font-size: 16px;
		  padding-bottom:20px;
		  width: 258px;
		}
	  }
	}
  
	.section {
	  background: white;
	  display: flex;
	  justify-content: center;
	  padding-top: 54px;
	  padding-bottom: 56px;
	  height: 750px;
  
	  @media screen and (max-width: 600px) {
		display:block;
		height: 960px;
	  }
	  &.first{
		@media screen and (max-width: 600px) {
		  display:block;
		  height: 900px;
		}
	  }
	  &.lightblue{
		background: #F9FAFC; 
		@media screen and (max-width: 600px) {
		height: 970px;
	  }
	  }
	  &-step{
		margin-top: auto;
		margin-bottom: auto;
		@media screen and (max-width: 600px) {
		  text-align:center;
		  position: absolute;
		  margin-top: 450px;
		  &.mt0{
			margin-top: 0;
		  }
		}
	  }
	  &-phone{
		width: 480px;
		height: 650px;
		@media screen and (max-width: 600px) {
		  width: 100%;
		  height: 490px;
		}
		&.first{
		  background: url('../../assets/img/how_it_works_circle_1.png') no-repeat center center;
		  background-size: 343px 343px;
		  background-position: top 0 right 0;
		  @media screen and (max-width: 600px) {
			background-position: top 0 right -115px;
		  }
		  &:after{
			content: '';
			background: url('../../assets/img/how_it_works_1.png') no-repeat center center;
			background-size: 375px 667px;
			width: 480px;
			height: 700px;
			position: absolute;
			@media screen and (max-width: 600px) {
			  background-size: 218px 438px;
			  width: 100%;
			  height:480px;
			}
		  }
		}
		&.second{
		  background: url('../../assets/img/how_it_works_circle_2.png') no-repeat center center;
		  background-size: 343px 343px;
		  background-position: bottom 0 right 0;
		  @media screen and (max-width: 600px) {
			background-position: bottom 0 right -115px;
		  }
	
		  &:after{
			content: '';
			background: url('../../assets/img/how_it_works_2.png') no-repeat center center;
			background-size: 375px 667px;
			width: 480px;
			height: 700px;
			position: absolute;
			@media screen and (max-width: 600px) {
			  background-size: 218px 438px;
			  width: 100%;
			  height:480px;
			}
		  }
		}
		&.third{
		  background: url('../../assets/img/how_it_works_circle_3.png') no-repeat center center;
		  background-size: 343px 343px;
		  background-position: bottom 0 left 0;
		  @media screen and (max-width: 600px) {
			background-position: bottom 0 left -115px;
		  }
	
		  &:after{
			content: '';
			background: url('../../assets/img/how_it_works_3.png') no-repeat center center;
			background-size: 375px 667px;
			width: 480px;
			height: 700px;
			position: absolute;
			@media screen and (max-width: 600px) {
			  background-size: 218px 438px;
			  width: 100%;
			  height:480px;
			}
		  }
		}
	  }
	  
	
	 
	  .step{
		margin-top: auto;
		margin-bottom: auto;
		width: 453px;
		text-align: left;
		@media screen and (max-width: 600px) {
		  text-align:center;
		  width:100%;
		}
		&-heading{
		  font-size: 18px;
		  line-height: 57px;
		  color: #19381F;
		  @media screen and (max-width: 600px) {
			text-align:center;
		  }
		}
		&-title{
		  font-size: 45px;
		  line-height: 57px;
		  font-weight: 700;    
		  color: #2F2F2F;
		  @media screen and (max-width: 600px) {
			font-size: 37px;
		  }
		}
		&-desc{
		  font-size: 17px;
		  line-height: 29px;
		  color: #696969;
		  margin-top: 15px;
  
		  @media screen and (max-width: 600px) {
			font-size: 16px;
			text-align:center;
			padding-left: 26px;
			padding-right: 26px;
		  }
		}
		&-button{
		  margin-top:46px;
		  background: #88D20F;
		  border-radius: 5px;
		  font-size: 16px;
		  line-height: 18px;
		  text-align: center;
		  color: #FFFFFF;
		  padding: 15px 35px;
		  cursor:pointer;
		  width: fit-content;
		  &:hover{
			background: #9bf57f;
		  }
		  @media screen and (max-width: 600px) {
			margin-top: 15px;
			margin-left: auto;
			margin-right: auto;
		  }
		}
	  }
	  &-green-circle{
		position: absolute;
		margin-top: -215px;
		&.first{
		  background: #B3E266;
		  width: 215px;
		  height: 430px;
		  left: 0;
		  border-top-right-radius: 430px;
		  border-bottom-right-radius: 430px;
		  margin-top:480px;
		  @media screen and (max-width: 600px) {
			width: 95px;
			height: 190px;
			left: 0;
			margin-top: 250px;
			border-top-right-radius: 190px;
			border-bottom-right-radius: 190px;
		  }
		}
		&.second{
		  background: #B3E266;
		  width: 193px;
		  height: 385px;
		  right: 0;
		  margin-top: 480px;
		  border-top-left-radius: 385px;
		  border-bottom-left-radius: 385px;
		  @media screen and (max-width: 600px) {
			width: 95px;
			height: 190px;
			right: 0;
			margin-top: 330px;
			border-top-left-radius: 190px;
			border-bottom-left-radius: 190px;
		  }
		}
	  }
	}
	.shop-brands{
	  background: url('../../assets/img/hero_2.png') no-repeat center center;
	  background-size: 100% 100%;
	  width: 100%;
	  height: 575px;
	  display: flex;
  
	  @media screen and (max-width: 600px) {
		background: url('../../assets/img/hero_2_mobile.png') no-repeat center center;
		background-size: 100% 100%;    
		height: 375px;
		margin-bottom: 230px;
	  }
	  &:after{
		content: '';
		position: absolute;
		background: linear-gradient(180deg, rgba(54, 54, 54, 0) 0%, rgba(54, 54, 54, 0.6) 100%);
		width: 100%;
		height: 575px;
		@media screen and (max-width: 600px) {
		  height: 375px;
		}
	  }
	  &-panel{
		background: #FFFFFF;
		border-radius: 20px 0px 0px 20px;
		padding: 56px 94px;
		position: absolute;
		right: 0;
		margin-top: 65px;
		z-index: 1;
		@media screen and (max-width: 600px) {
		  width: 100%;
		  text-align: center;
		  padding-top: 41px;
		  position: absolute;
		  padding-left: initial;
		  padding-right: initial;
		  border-radius: 0;
		  font-size: 30px;
		  margin-top: 370px;
		}
		&-heading{
		  font-size: 60px;
		  line-height: 125%;
		  font-weight: 900;
		  letter-spacing: 0.01em;
		  color: #19381F;
		  @media screen and (max-width: 600px) {
			font-size:30px;
		  }
		}
		&-button{
		  background: #88D20F;
		  border-radius: 5px;
		  font-size: 16px;
		  line-height: 18px;
		  text-align: center;
		  color: #FFFFFF;
		  padding: 15px;
		  cursor:pointer;
		  width:fit-content;
		  margin-top: 26px;
		  &:hover{
			background: #9bf57f;
		  }
		  @media screen and (max-width: 600px) {
			margin-left: auto;
			margin-right: auto;
			margin-top:20px;
		  }
		}
	  }
	  &-logos{
		margin-top: auto;
		width: 100%;
		display: flex;
		justify-content: center;
		z-index: 1;
		margin-bottom: 57px;
		width: 100%;
		overflow: auto;
		&::-webkit-scrollbar {
		  width: 0px; 
		  background: transparent;
		}
  
		@media screen and (max-width: 600px) {
		  margin-bottom:35px;
		}
		&-img{
		  height: 46px;
		  margin-left: 35px;
		  margin-right: 35px;
  
		  @media screen and (max-width: 600px) {
			height: 30px;
			margin-left: 25px;
			margin-right: 25px;
		  }
		  img{
			height: 100%;
		  }
		}
	  }
	}
  }
`;

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
		<HowItWorksStyle>
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
	</HowItWorksStyle>
	);
}

export default HowItWorks;
