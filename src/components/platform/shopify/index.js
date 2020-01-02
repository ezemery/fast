import React from 'react';
import Footer from '../../footer';
import styled from 'styled-components'
import CreativePeopleImg from '../../../assets/img/creative_people.png';
import UnlimitedBenefitsImg from '../../../assets/img/unlimited_benefits.png';
import WorkRemotelyImg from '../../../assets/img/work_remotely.png';
import Header from '../../header';
const ShopifyStyle = styled.div`
.platform-page {

	@media screen and (max-width: 600px) {}
  
	.section-1 {
	  padding-top: 179px;
	  padding-bottom: 61px;
	  text-align: center;
	  justify-content: center;
	  color: white;
	  background: #363636;
  
	  @media screen and (max-width: 600px) {
		padding-top: 149px;
		padding-bottom: 78px;
	  }
  
	  &-title {
		font-family: 'Graphik';
		font-size: 84px;
		line-height: 150%;
		text-align: center;
		color: white;
		margin-bottom: 39px;
  
		.green {
		  color: #88d20f;
		  font-weight: bold;
		}
  
		@media screen and (max-width: 600px) {
		  font-size: 36px;
		  line-height: 150%;
		  margin-bottom: 29px;
		}
	  }
  
	  &-desc {
		margin-top: 17px;
		font-family: 'Graphik';
		text-align: center;
		font-size: 16px;
		line-height: 25px;
  
		@media screen and (max-width: 600px) {
		  display: none;
		}
	  }
  
	  &-back {
		&-1 {
		  position: absolute;
		  background: url('../../../assets/img/platform_back_1.png') no-repeat center center;
		  background-size: 100% 100%;
		  width: 120px;
		  height: 60px;
		  left: 270px;
		  margin-top: -20px;
  
		  @media screen and (max-width: 600px) {
			position: absolute;
			background: url('../../../assets/img/platform_mobile_1.png') no-repeat center center;
			background-size: 100% 100%;
			width: 55px;
			height: 74px;
			left: 0px;
			margin-top: -120px;
		  }
		}
  
		&-2 {
		  position: absolute;
		  background: url('../../../assets/img/platform_back_2.png') no-repeat center center;
		  background-size: 100% 100%;
		  width: 160px;
		  height: 90px;
		  right: 223px;
		  margin-top: -190px;
  
		  @media screen and (max-width: 600px) {
			position: absolute;
			background: url('../../../assets/img/platform_mobile_2.png') no-repeat center center;
			background-size: 100% 100%;
			width: 48px;
			height: 16px;
			left: 20px;
			margin-top: 40px;
		  }
		}
  
		&-3 {
		  position: absolute;
		  background: url('../../../assets/img/platform_shopify_img1.png') no-repeat center center;
		  background-size: 100% 100%;
		  width: 155px;
		  height: 155px;
		  left: 112px;
		  margin-top: -230px;
  
		  @media screen and (max-width: 600px) {
			position: absolute;
			background: url('../../../assets/img/platform_mobile_3.png') no-repeat center center;
			background-size: 100% 100%;
			width: 43px;
			height: 43px;
			left: 40%;
			margin-top: 20px;
		  }
		}
  
		&-4 {
		  position: absolute;
		  background: url('../../../assets/img/platform_shopify_img2.png') no-repeat center center;
		  background-size: 100% 100%;
		  width: 160px;
		  height: 178px;
		  right: 88px;
		  margin-top: -90px;
  
		  @media screen and (max-width: 600px) {
			position: absolute;
			background: url('../../../assets/img/platform_mobile_4.png') no-repeat center center;
			background-size: 100% 100%;
			width: 81px;
			height: 27px;
			left: 75%;
			margin-top: 35px;
		  }
		}
  
		&-5 {
		  display: none;
  
		  @media screen and (max-width: 600px) {
			display: block;
			position: absolute;
			background: url('../../../assets/img/platform_mobile_5.png') no-repeat center center;
			background-size: 100% 100%;
			width: 58px;
			height: 40px;
			left: 80%;
			margin-top: -120px;
		  }
  
		}
  
		&-6 {
		  display: none;
  
		  @media screen and (max-width: 600px) {
			display: block;
			position: absolute;
			background: url('../../../assets/img/platform_mobile_6.png') no-repeat center center;
			background-size: 100% 100%;
			width: 42px;
			height: 57px;
			left: 40%;
			margin-top: -170px;
		  }
		}
	  }
	}
  
	.section-2 {
	  padding-top: 93px;
	  padding-bottom: 93px;
	  color: #2f2f2f;
	  justify-content: center;
	  display: flex;
  
	  @media screen and (max-width: 600px) {
		padding-top: 49px;
		padding-bottom: 50px;
		padding-left: 30px;
		padding-right: 30px;
		background-size: 272px 141px;
		background-position: top 410px left 50px;
		display: block;
	  }
  
	  &-1 {
		&-title {
		  font-family: 'Graphik';
		  font-size: 50px;
		  line-height: 60px;
		  text-align: left;
		  margin-bottom: 29px;
  
		  .bold {
			font-weight: bolder;
		  }
  
		  @media screen and (max-width: 600px) {
			font-size: 24px;
			line-height: 50px;
			color: #2f2f2f;
			text-align: center;
			margin-bottom: 10px;
		  }
		}
  
		&-desc {
		  font-family: 'Graphik';
		  font-size: 18px;
		  line-height: 25px;
		  color: #696969;
		  margin-top: 28px;
		  margin-bottom: 32px;
		  width: 521px;
  
		  @media screen and (max-width: 600px) {
			display: block;
			width: 323px;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		  }
		}
  
		&-button {
		  font-family: 'Graphik';
		  font-style: normal;
		  font-weight: bold;
		  font-size: 18px;
		  line-height: 23px;
		  color: #ffffff;
		  padding: 17px 30px;
		  background: #88d20f;
		  border-radius: 5px;
		  width: fit-content;
		  cursor: pointer;
  
		  @media screen and (max-width: 600px) {
			font-size: 16px;
			padding: 14px 19px;
			margin-left: auto;
			margin-right: auto;
		  }
  
		  &:hover {
			background: #84b13c;
		  }
		}
	  }
  
	  &-2 {
		width: 38%;
		height: auto;
		margin-left: 85px;
		background: url('../../../assets/img/platform_back.png') no-repeat center center;
		background-size: 100% 100%;
  
		@media screen and (max-width: 600px) {
		  margin: 40px 0 0 0;
		  width: 100%;
		  height: 142px;
		}
	  }
	}
  
  
	.section-3 {
	  background: white;
	  padding-top: 130px;
	  padding-bottom: 130px;
	  color: #2f2f2f;
  
	  @media screen and (max-width: 600px) {
		padding-top: 40px;
		padding-bottom: 60px;
	  }
  
	  &-title {
		font-family: 'Graphik';
		font-size: 36px;
		line-height: 40px;
		text-align: center;
		color: #363636;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 30px;
		  width: 306px;
		  margin-left: auto;
		  margin-right: auto;
		}
	  }
  
	  &-content {
		margin-top: 114px;
		padding: 10px;
		text-align: left;
  
		@media screen and (max-width: 600px) {
		  margin-top: 0;
		}
	  }
  
	  .step {
		display: inline-grid;
		width: 100%;
		justify-content: center;
  
		&-img {
		  width: 456px;
		  height: 285px;
		  background: url('../../../assets/img/step.png') no-repeat center center;
		  background-size: 100% 100%;
  
		  @media screen and (max-width: 600px) {
			margin-left: auto;
			margin-right: auto;
			width: 188px;
			height: 150px;
		  }
		}
  
		&-content {
		  width: 518px;
		  margin-left: 90px;
  
		  @media screen and (max-width: 600px) {
			width: 306px;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
		  }
		}
  
		&-container {
		  display: flex;
  
		  @media screen and (max-width: 600px) {
			display: block;
		  }
		}
  
		&-heading {
		  font-size: 18px;
		  line-height: 150%;
		  color: #88d20f;
		  font-family: 'Graphik Semibold';
  
		  @media screen and (max-width: 600px) {
			margin-top: 25px;
		  }
		}
  
		&-title {
		  font-family: 'Graphik';
		  font-size: 24px;
		  line-height: 26px;
		  color: #2f2f2f;
		  margin-top: 27px;
		  margin-bottom: 31px;
  
		  @media screen and (max-width: 600px) {
			font-size: 16px;
		  }
		}
  
		&-desc {
		  font-family: 'Graphik';
		  font-size: 16px;
		  line-height: 29px;
		  color: #696969;
		}
  
		&:nth-child(2n + 1) {
		  &::after {
			content: ' ';
			background: url('../../../assets/img/step_arrow_1.png');
			height: 133px;
			width: 688px;
			background-size: 100% 100%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 36px;
			margin-bottom: 36px;
		  }
		}
  
		&:nth-child(2n) {
		  &::after {
			content: ' ';
			background: url('../../../assets/img/step_arrow_2.png');
			height: 133px;
			width: 688px;
			background-size: 100% 100%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 36px;
			margin-bottom: 36px;
		  }
		}
  
		&:last-child {
		  &::after {
			background: none;
			height: 0;
			margin: 0;
		  }
		}
  
		@media screen and (max-width: 600px) {
		  display: block;
		  margin-top: 67px;
  
		  &::after {
			background: none;
			height: 0;
			width: 0;
		  }
		}
	  }
	}
  
	.section-4 {
	  padding-top: 68px;
	  padding-bottom: 93px;
	  text-align: center;
	  background: #f9fafc;
  
	  @media screen and (max-width: 600px) {
		padding-top: 59px;
	  }
  
	  &-title {
		font-family: 'Graphik';
		font-size: 36px;
		line-height: 40px;
		text-align: center;
		color: #2f2f2f;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 26px;
		  text-align: center;
  
		  color: #2b4403;
		}
	  }
  
	  &-content {
		display: flex;
		margin-top: 60px;
		justify-content: center;
  
		@media screen and (max-width: 600px) {
		  display: block;
		}
  
		.perk {
		  width: 305px;
		  display: block;
		  margin-left: 100px;
  
		  @media screen and (max-width: 600px) {
			margin: auto;
			margin-top: 100px;
		  }
  
		  &:first-child {
			margin-left: 0;
  
			@media screen and (max-width: 600px) {
			  margin: auto;
			}
		  }
  
		  &-img {
			height: 75px;
			display: flex;
  
			img {
			  margin-top: auto;
			  margin-left: auto;
			  margin-right: auto;
			}
		  }
  
		  &-title {
			margin-top: 35px;
			font-family: 'Graphik';
			font-size: 24px;
			line-height: 26px;
			color: #363636;
		  }
  
		  &-desc {
			margin-top: 10px;
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 25px;
			text-align: center;
			color: #363636;
		  }
		}
	  }
	}
  
	.section-5 {
	  background: white;
	  text-align: center;
	  padding-top: 75px;
	  padding-bottom: 84px;
  
	  @media screen and (max-width: 600px) {
		padding-top: 69px;
		padding-bottom: 104px;
	  }
  
	  &-title {
		color: #363636;
		font-family: 'Graphik';
		font-size: 36px;
		line-height: 50px;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 50px;
		}
	  }
  
	  &-desc {
		margin-top: 18px;
		font-family: Graphik;
		font-size: 16px;
		line-height: 25px;
		text-align: center;
		color: #696969;
  
		@media screen and (max-width: 600px) {
		  margin-top: 5px;
		  width: 248px;
		  margin-left: auto;
		  margin-right: auto;
		}
	  }
  
	  &-buttons {
		margin-top: 18px;
		display: flex;
		justify-content: center;
		height: 71px;
  
		@media screen and (max-width: 600px) {
		  display: block;
		  width: 205px;
		  margin-left: auto;
		  margin-right: auto;
		}
  
		&-install {
		  background: #7cb342;
		  border-radius: 5px;
		  font-family: 'Graphik';
		  font-style: normal;
		  font-weight: bold;
		  font-size: 16px;
		  line-height: 50px;
		  text-align: center;
		  color: #ffffff;
		  padding: 10px 40px;
		  margin-left: 25px;
  
		  @media screen and (max-width: 600px) {
			margin-top: 23px;
			margin-left: auto;
			margin-right: auto;
			line-height: 18px;
			padding: 14px 40px;
		  }
		}
  
		&-download {
		  background: white;
		  border-radius: 5px;
		  border: 1px solid #7cb342;
		  font-family: 'Graphik';
		  font-style: normal;
		  font-weight: bold;
		  font-size: 16px;
		  line-height: 50px;
		  text-align: center;
		  color: #7cb342;
		  padding: 10px 40px;
		  margin-left: 25px;
  
		  @media screen and (max-width: 600px) {
			margin-top: 23px;
			margin-left: auto;
			margin-right: auto;
			line-height: 18px;
			padding: 14px 40px;
		  }
		}
	  }
	}
  }
`;
function Step(props) {
	const { heading, title, desc } = props;
	return (
		<div className="step">
			<div className="step-container">
				<div className="step-img"></div>
				<div className="step-content">
					<div className="step-heading">{heading}</div>
					<div className="step-title">{title}</div>
					<div className="step-desc">{desc}</div>
				</div>
			</div>
		</div>
	);
}
function Perk(props) {
	const { img, title, desc } = props;
	return (
		<div className="perk">
			<div className="perk-img">
				<img src={img} alt='perk'></img>
			</div>
			<div className="perk-title">{title}</div>
			<div className="perk-desc">{desc}</div>
		</div>
	);
}
function Shopify() {
	const perks = [
		{
			img: UnlimitedBenefitsImg,
			title: 'Quick No-password Logins',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			img: WorkRemotelyImg,
			title: 'Fast online payments',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			img: CreativePeopleImg,
			title: 'Intuitive autofill function',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
	];
	const steps = [
		{
			heading: 'STEP1',
			title: 'Lorem ipsum Dolor sit amet',
			desc:
				'The Fast built Shopify integration improves your shopping experience by providing easy, seamless passwordless logins. You’ll generate more traffic with paid plus organic, build a brand your market love',
		},
		{
			heading: 'STEP2',
			title: 'Lorem ipsum Dolor sit amet',
			desc:
				'The Fast built Shopify integration improves your shopping experience by providing easy, seamless passwordless logins. You’ll generate more traffic with paid plus organic, build a brand your market love',
		},
		{
			heading: 'STEP3',
			title: 'Lorem ipsum Dolor sit amet',
			desc:
				'The Fast built Shopify integration improves your shopping experience by providing easy, seamless passwordless logins. You’ll generate more traffic with paid plus organic, build a brand your market love',
		},
	];
	return (
		<ShopifyStyle>
		<div className="platform-page">
			<Header themeType="2" type="gray" buttonName='Go Fast'></Header>
			<div className="section-1">
				<div className="section-1-title">
					Fast <span className="green">+</span> Shopify
				</div>
				<div className="section-1-back-1"></div>
				<div className="section-1-back-2"></div>
				<div className="section-1-back-3"></div>
				<div className="section-1-back-4"></div>
				<div className="section-1-back-5"></div>
				<div className="section-1-back-6"></div>
			</div>
			<div className="section-2">
				<div className='section-2-1'>
					<div className="section-2-1-title">
						Now live-
						<span className="bold">
							Fast for
							<br /> Shopify
						</span>
					</div>
					<div className="section-2-1-desc">
						The Fast built Shopify integration improves your shopping experience by providing easy, seamless
						passwordless logins.
					</div>
					<div className="section-2-1-button">Connect Fast to Shopify</div>
				</div>
				<div className='section-2-2'></div>
			</div>
			<div className="section-3">
				<div className="section-3-title">Install Fast in three simple steps</div>
				<div className="section-3-content">
					{steps.map(step => {
						return <Step key={step.title} {...step}></Step>;
					})}
				</div>
			</div>
			<div className="section-4">
				<div className="section-4-title">Benefits of working with us</div>
				<div className="section-4-content">
					{perks.map(perk => {
						return <Perk key={perk.title} {...perk}></Perk>;
					})}
				</div>
			</div>

			<div className="section-5">
				<div className="section-5-title">Enjoy the Fast experience</div>
				<div className="section-5-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					<br /> tempor Lorem ipsum dolor sit amet, consectetur .
				</div>
				<div className="section-5-buttons">
					<div className="section-5-buttons-install">Install Plugin</div>
					<div className="section-5-buttons-download">Download App</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	</ShopifyStyle>
	);
}

export default Shopify;
