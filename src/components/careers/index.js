import React from 'react';
import Footer from '../footer';
import styled from 'styled-components';
import CreativePeopleImg from '../../assets/img/creative_people.png';
import UnlimitedBenefitsImg from '../../assets/img/unlimited_benefits.png';
import WorkRemotelyImg from '../../assets/img/work_remotely.png';
import Header from '../../components/header';

const CareerStyle = styled.div
`.careers-page {
	background: url('../../assets/img/careers_back.png') no-repeat center center;
	background-position: top 342px center;
	background-size: 962px 545px;
  
	@media screen and (max-width: 600px) {
	  background: url('../../assets/img/careers_back_mobile.png') no-repeat center center;
	  background-position: top 318px center;
	}
  
	.section-1 {
	  padding-top: 159px;
	  padding-bottom: 491px;
	  text-align: center;
	  justify-content: center;
  
	  @media screen and (max-width: 600px) {
		padding-top: 129px;
		padding-bottom: 325px;
	  }
  
	  &-title {
		font-family: Graphik;
		font-size: 46px;
		font-weight: 900;
		line-height: 57px;
		text-align: center;
		color: #363636;
		margin-bottom: 39px;
  
		@media screen and (max-width: 600px) {
		  font-size: 28px;
		  line-height: 36px;
		  margin-bottom: 29px;
		}
	  }
  
	  .join-button {
		background: #88d20f;
		color: white;
		border-radius: 5px;
		font-family: 'Graphik';
		font-size: 18px;
		line-height: 20px;
		text-align: center;
		letter-spacing: 0.01em;
		padding: 25px 78px;
		cursor: pointer;
  
		@media screen and (max-width: 600px) {
		  font-size: 16px;
		  line-height: 18px;
		  padding: 17px 44px;
		}
	  }
  
	  .join-button:hover {
		background: #b4f151;
	  }
	}
  
	.section-2 {
	  margin-left: 123px;
	  margin-right: 123px;
  
	  @media screen and (max-width: 600px) {
		margin-left: 36px;
		margin-right: 36px;
	  }
  
	  &-title {
		font-family: 'Graphik';
		font-size: 36px;
		font-weight: 900;
		line-height: 40px;
		text-align: left;
		color: #2f2f2f;
		margin-bottom: 29px;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 50px;
		  color: #2f2f2f;
		  text-align: center;
		  margin-bottom: 10px;
		}
	  }
  
	  &-content {
		display: flex;
		padding-bottom: 68px;
  
		@media screen and (max-width: 600px) {
		  display: block;
		}
  
		&-1 {
		  width: 383px;
		  @media screen and (max-width: 600px) {
			width: 100%;
		  }
  
		  &-1 {
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 25px;
			color: #696969;
  
			@media screen and (max-width: 600px) {
			  text-align: center;
			}
		  }
  
		  &-2 {
			margin-top: 26px;
			height: 292px;
			background: url('../../assets/img/careers_back_1.png') no-repeat center center;
			background-size: cover;
  
			@media screen and (max-width: 600px) {
			  height: 214px;
			}
		  }
		}
  
		&-2 {
		  background: url('../../assets/img/careers_back_2.png') no-repeat center center;
		  background-size: cover;
		  width: calc(100% - 800px);
		  margin-left: 40px;
  
		  @media screen and (max-width: 600px) {
			height: 466px;
			width: 100%;
			margin-left: 0;
			margin-top: 16px;
		  }
		}
  
		&-3 {
		  // width: 330px;
		  margin-left: 40px;
		  width: calc(100% - 800px);
		  @media screen and (max-width: 600px) {
			width: 100%;
			margin-left: 0;
			margin-top: 26px;
		  }
  
		  &-1 {
			background: url('../../assets/img/careers_back_1.png') no-repeat center center;
			background-size: cover;
			height: calc(50% - 13px);
			width: 100%;
  
			@media screen and (max-width: 600px) {
			  height: 214px;
			}
		  }
  
		  &-2 {
			margin-top: 26px;
			background: url('../../assets/img/careers_back_1.png') no-repeat center center;
			background-size: 100% 100%;
			height: calc(50% - 13px);
			width: 100%;
  
			@media screen and (max-width: 600px) {
			  height: 214px;
			}
		  }
		}
	  }
	}
  
	.section-3 {
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
		font-weight: 900;
		line-height: 40px;
		text-align: center;
		color: #2f2f2f;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 26px;
		  text-align: center;
  
		  color: #2f2f2f;
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
  
	.section-4 {
	  background: white;
	  padding-top: 45px;
	  padding-bottom: 35px;
  
	  @media screen and (max-width: 600px) {
		padding-top: 89px;
		padding-bottom: 35px;
	  }
  
	  &-title {
		font-family: 'Graphik';
		font-size: 36px;
		line-height: 40px;
		font-weight: 900;
		text-align: center;
		color: #2f2f2f;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 50px;
		}
	  }
  
	  &-desc {
		margin-top: 13px;
		font-family: 'Graphik';
		font-size: 18px;
		line-height: 25px;
		text-align: center;
		color: #696969;
  
		@media screen and (max-width: 600px) {
		  font-size: 16px;
		}
	  }
  
	  &-content {
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
		justify-content: center;
  
		@media screen and (max-width: 600px) {
		  display: block;
		}
  
		.card {
		  background: #ffffff;
		  border: 1px solid #e5e9f2;
		  box-sizing: border-box;
		  border-radius: 10px;
		  padding-top: 65px;
		  padding-right: 32px;
		  padding-left: 32px;
		  padding-bottom: 25px;
		  text-align: center;
		  width: 345px;
		  height: 291px;
		  margin: 30px;
  
		  @media screen and (max-width: 600px) {
			width: 324px;
			height: 285px;
			margin-left: auto;
			margin-right: auto;
		  }
  
		  &:hover {
			box-shadow: 0px 40px 70px rgba(94, 94, 94, 0.05);
		  }
  
		  &-title {
			font-style: normal;
			font-size: 20px;
			line-height: 35px;
			color: #2f2f2f;
			font-family: 'Graphik';
		  }
  
		  &-desc {
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 28px;
			text-align: center;
			color: #3d3d3d;
			margin-top: 10px;
			height: 120px;
		  }
  
		  &-action {
			float: right;
			font-family: Graphik;
			font-size: 18px;
			line-height: 25px;
			color: #88d20f;
			cursor: pointer;
		  }
  
		  &-action:hover {
			text-decoration: underline;
		  }
		}
	  }
	}
  
	.section-5 {
	  background: #f9fafc;
	  text-align: center;
	  padding-top: 75px;
	  padding-bottom: 84px;
  
	  @media screen and (max-width: 600px) {
		padding-top: 69px;
		padding-bottom: 104px;
	  }
  
	  &-title {
		color: #2b4403;
		font-family: 'Graphik';
		font-weight: 900;
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
		}
	  }
  
	  &-subscribe {
		margin-top: 18px;
		display: flex;
		justify-content: center;
		height: 71px;
  
		@media screen and (max-width: 600px) {
		  display: block;
		}
  
		&-input {
		  background: #ffffff;
		  border: 1px solid #696969;
		  box-sizing: border-box;
		  border-radius: 4px;
		  padding-top: 22px;
		  padding-left: 70px;
		  padding-right: 70px;
		  width: 360px;
		  height: 71px;
  
		  @media screen and (max-width: 600px) {
			width: 300px;
			height: 56px;
			padding-top: 16px;
			padding-left: 25px;
			padding-right: 25px;
			margin-right: auto;
			margin-left: auto;
		  }
  
		  input {
			border: none;
			outline: none;
			color: #696969;
			width: 220px;
			font-size: 16px;
			line-height: 18px;
  
			@media screen and (max-width: 600px) {
			  width: 250px;
			}
		  }
		}
  
		&-button {
		  background: #7cb342;
		  border-radius: 5px;
		  font-family: 'Graphik';
		  font-style: normal;
		  font-weight: bold;
		  font-size: 16px;
		  line-height: 70px;
		  text-align: center;
		  color: #ffffff;
		  width: 195px;
		  height: 71px;
		  margin-left: 25px;
  
		  @media screen and (max-width: 600px) {
			width: 178px;
			height: 53px;
			line-height: 53px;
			margin-top: 23px;
			margin-left: auto;
			margin-right: auto;
		  }
		}
	  }
	}
  }`;


function Card(props) {
	const { title, desc } = props;
	return (
		<div className="card">
			<div className="card-title">{title}</div>
			<div className="card-desc">{desc}</div>
			<div>
				<div className="card-action">Apply Now</div>
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
function Careers() {
	const jobs = [
		{
			title: 'UI/UX designer',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			title: 'Front-end developer',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			title: 'Software analyst',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			title: 'UI/UX designer',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			title: 'Front-end developer',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			title: 'Software analyst',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
	];
	const perks = [
		{
			img: UnlimitedBenefitsImg,
			title: 'Unlimited benefits',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			img: WorkRemotelyImg,
			title: 'Work remotely',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
		{
			img: CreativePeopleImg,
			title: 'Creative people',
			desc:
				'Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit.',
		},
	];
	return (
		<CareerStyle>
		<div className="careers-page">
			<Header themeType="2" buttonName="Go Fast" ></Header>
			<div className="section-1">
				<div className="section-1-title">
					We appreciate <br /> the curious and creative.
				</div>
				<div className="d-flex justify-content-center">
					<div className="join-button">Join Us</div>
				</div>
			</div>
			<div className="section-2">
				<div className="section-2-title">Our Vision</div>
				<div className="section-2-content">
					<div className="section-2-content-1">
						<div className="section-2-content-1-1">
						Fast's mission is to be the world's fastest checkout and login experience. At Fast, we are creating a world without usernames and passwords. <br/><br/> A world where you no longer need to manually type in your payment details online and where your personal information is stored in one central, secure place. Our goal is to help you buy what you want, when you want, as quickly as possible. If you share this vision with us, then FAST is the place for you.
						</div>
						<div className="section-2-content-1-2"></div>
					</div>
					<div className="section-2-content-2"></div>
					<div className="section-2-content-3">
						<div className="section-2-content-3-1"></div>
						<div className="section-2-content-3-2"></div>
					</div>
				</div>
			</div>
			{/* <div className="container">
				<div className="grid__layout">
					<div className="vision__title">
						<p>Fast's mission is to be the world's fastest checkout and login experience. At Fast, we are creating a world without usernames and passwords. A world where you no longer need to manually type in your payment details online and where your personal information is stored in one central, secure place. Our goal is to help you buy what you want, when you want, as quickly as possible. If you share this vision with us, then FAST is the place for you.</p>
					</div>
					<div className="lg_image"></div>
					div.
				</div>
			</div> */}
			<div className="section-3">
				<div className="section-3-title">Perks of working with us</div>
				<div className="section-3-content">
					{perks.map(perk => {
						return <Perk key={perk.title} {...perk}></Perk>;
					})}
				</div>
			</div>
			<div className="section-4">
				<div className="section-4-title">We are hiring</div>
				<div className="section-4-desc">
					Join our team of creatives, reaching great, new and exciting heights in the tech space.
				</div>
				<div className="section-4-content">
					{jobs.map(job => {
						return <Card key={job.title} {...job}></Card>;
					})}
				</div>
			</div>
			<div className="section-5">
				<div className="section-5-title">Get Job updates in your Email</div>
				<div className="section-5-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
					<br />
					amet, consectetur adipiscing elit, sed do eiusmod tempor
				</div>
				<div className="section-5-subscribe">
					<div className="section-5-subscribe-input">
						<input placeholder="enter your email address"></input>
					</div>
					<div className="section-5-subscribe-button">Subscribe</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
		</CareerStyle>
	);
}

export default Careers;
