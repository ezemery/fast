import React from 'react';
import styled from 'styled-components'
import Footer from '../footer';
// import './style.scss';
const AboutPageStyle = styled.div`
.aboutus-page {
	.section-1 {
		padding-top: 164px;
		padding-bottom: 90px;
		text-align: center;
		justify-content: center;
		background: #f9fafc;

		@media screen and (max-width: 600px) {
			padding-top: 129px;
			padding-bottom: 70px;
		}

		&-title {
			font-family: 'Graphik';
			font-size: 50px;
			line-height: 58px;
			text-align: center;
			color: #363636;
			margin-bottom: 18px;

			@media screen and (max-width: 600px) {
				font-size: 28px;
				line-height: 36px;
				margin-bottom: 9px;
			}
		}

		&-desc {
			width: 852px;
			font-family: 'Graphik';
			font-size: 18px;
			line-height: 150%;
			text-align: center;
			color: #363636;
			margin-left: auto;
			margin-right: auto;

			@media screen and (max-width: 600px) {
				width: 312px;
				font-size: 12px;
			}
		}

		.green-wave {
			background: url('../../assets/img/green_wave.png') no-repeat center center;
			width: 100%;
			background-size: contain;
			height: 10px;
			margin-top: 20px;
		}
	}

	.section-2 {
		padding-top: 45px;
		display: flex;
		justify-content: center;

		@media screen and (max-width: 600px) {
			padding-top: 30px;
			display: block;
		}

		&-heading {
			width: 262px;
			margin-top: 20px;
			margin-left: 10px;

			@media screen and (max-width: 600px) {
				width: 210px;
				margin-left: 30px;
			}
		}

		&-title {
			font-family: 'Graphik';
			font-size: 18px;
			line-height: 25px;
			text-align: left;
			color: #88d20f;
			margin-bottom: 20px;

			@media screen and (max-width: 600px) {
				margin-bottom: 15px;
			}
		}

		&-desc {
			font-family: 'Graphik';
			font-size: 24px;
			line-height: 35px;
			color: #363636;

			@media screen and (max-width: 600px) {
				font-size: 21px;
			}
		}

		&-content {
			display: flex;
			padding-bottom: 68px;

			@media screen and (max-width: 600px) {
				display: block;
				margin-top: 20px;
			}

			.box {
				background: #ffffff;
				border: 1px solid #e5e9f2;
				box-sizing: border-box;
				box-shadow: 0px 0px 10px rgba(61, 61, 61, 0.1);
				border-radius: 10px;
				padding: 45px 30px;
				max-width: 267px;
				margin: 15px;

				@media screen and (max-width: 600px) {
					margin-left: auto;
					margin-right: auto;
					margin-top: 30px;
				}

				&-title {
					font-family: 'Graphik';
					font-size: 18px;
					line-height: 20px;
					color: #363636;
				}

				&-desc {
					margin-top: 16px;
					font-family: 'Graphik';
					font-size: 16px;
					line-height: 25px;
					color: #363636;
				}
			}
		}
	}

	.section-3 {
		padding-top: 83px;
		padding-bottom: 40px;
		text-align: center;
		background: #fff;

		@media screen and (max-width: 600px) {
			padding-top: 59px;
		}

		&-title {
			font-family: 'Graphik';
			font-size: 36px;
			line-height: 50px;
			text-align: center;
			color: #363636;

			@media screen and (max-width: 600px) {
				font-size: 24px;
				line-height: 26px;
				text-align: center;
				color: #363636;
			}
		}

		&-desc {
			margin-top: 10px;
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 25px;
			text-align: center;
			color: #363636;
		}

		&-content {
			display: flex;
			flex-wrap: wrap;
			margin-top: 60px;
			justify-content: center;
			text-align: center;
			width: 960px;
			margin-left: auto;
			margin-right: auto;

			@media screen and (max-width: 600px) {
				width: 100%;
			}

			.avatar {
				width: 160px;
				display: block;
				margin: 40px;

				@media screen and (max-width: 600px) {
					margin-left: auto;
					margin-right: auto;
					width: 150px;
				}

				&-img {
					width: 160px;
					height: 160px;
					border-radius: 50%;

					@media screen and (max-width: 600px) {
						width: 150px;
						height: 150px;
					}

					img {
						width: 100%;
						height: 100%;
						border-radius: 10px;
					}
				}

				&-name {
					margin-top: 10px;
					font-family: 'Graphik';
					font-size: 18px;
					line-height: 25px;
					text-align: center;
					color: #696969;
				}

				&-job {
					margin-top: 10px;
					font-family: Graphik;
					font-size: 16px;
					line-height: 25px;
					text-align: center;
					color: #696969;
				}
			}
		}
	}

	.section-4 {
		background: url('../../assets/img/aboutus_back.png') no-repeat center center;
		background-size: 80% 80%;
		height: 740px;
		padding-top: 280px;
		padding-bottom: 347px;

		@media screen and (max-width: 600px) {
			display: none;
		}

		&-title {
			font-family: 'Graphik';
			font-size: 36px;
			line-height: 40px;
			text-align: center;
			color: #363636;

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
			width: 738px;
			margin-left: auto;
			margin-right: auto;

			@media screen and (max-width: 600px) {
				margin-top: 5px;
				width: 350px;
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
				background: #363636;
				border-radius: 5px;
				font-family: Muli;
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
}
`;
import Team1Img from '../../assets/img/team_1.png';
import Team2Img from '../../assets/img/team_2.png';
import Team3Img from '../../assets/img/team_3.png';
import Team4Img from '../../assets/img/team_4.png';
import Team5Img from '../../assets/img/team_5.png';
import Team6Img from '../../assets/img/team_6.png';
import Header from '../header';
function Box(props) {
	const { title, desc } = props;
	return (
		<div className="box">
			<div className="box-title">{title}</div>
			<div className="box-desc">{desc}</div>
		</div>
	);
}
function Avatar(props) {
	const { photo, name, job } = props;
	return (
		<div className="avatar">
			<div className="avatar-img">
				<img src={photo} alt='avatar'></img>
			</div>
			<div className="avatar-name">{name}</div>
			<div className="avatar-job">{job}</div>
		</div>
	);
}
function AboutUs() {
	const teammates = [
		{
			name: 'Domm Holland',
			job: 'CEO',
			photo: Team1Img,
		},
		{
			name: 'Domm Holland',
			job: 'Hr Manager',
			photo: Team2Img,
		},
		{
			name: 'Domm Holland',
			job: 'COO',
			photo: Team3Img,
		},
		{
			name: 'Domm Holland',
			job: 'CTO',
			photo: Team4Img,
		},
		{
			name: 'Domm Holland',
			job: 'CCO',
			photo: Team5Img,
		},
		{
			name: 'Domm Holland',
			job: 'Chief of Design',
			photo: Team4Img,
		},
		{
			name: 'Domm Holland',
			job: 'CEO',
			photo: Team6Img,
		},
		{
			name: 'Domm Holland',
			job: 'CFO',
			photo: Team4Img,
		},
	];
	const data = [
		{
			title: 'Who we are',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
		},
		{
			title: 'What we do',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
		},
		{
			title: 'Our mission',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
		},
	];
	return (
		<AboutPageStyle>
		<div className="aboutus-page">
			<Header themeType="2" buttonName="Go Fast"></Header>
			<div className="section-1">
				<div className="section-1-title">
					Get to know Fast and
					<br /> the brain behind it
				</div>
				<div className="section-1-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
				<div className="green-wave"></div>
			</div>
			<div className="section-2">
				<div className="section-2-heading">
					<div className="section-2-title">LOREM IPSUM</div>
					<div className="section-2-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
				</div>
				<div className="section-2-content">
					{data.map(d => {
						return <Box {...d}></Box>;
					})}
				</div>
			</div>

			<div className="section-3">
				<div className="section-3-title">Meet our Amazing team</div>
				<div className="section-3-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				</div>
				<div className="section-3-content">
					{teammates.map(teammate => {
						return <Avatar key={teammate.job} {...teammate}></Avatar>;
					})}
				</div>
			</div>
			<div className="section-4">
				<div className="section-4-title">Join our global community</div>
				<div className="section-4-desc">
					Fast has a global network of 50,000 users spanning over 150 countries and 4 continents
				</div>
			</div>
			<div className="section-5">
				<div className="section-5-title">Keep in touch with us</div>
				<div className="section-5-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
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
	</AboutPageStyle>
	);
}

export default AboutUs;
