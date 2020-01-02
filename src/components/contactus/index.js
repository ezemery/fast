import React from 'react';
import Footer from '../footer';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaDribbble, FaInstagram, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
const ContactUsStyle = styled.div`
.contact-us {
	overflow: auto;
	.section-1 {
		padding-top: 30px;
		padding-bottom: 30px;
		font-family: 'Graphik';
		font-size: 46px;
		line-height: 150%;
		margin-top: 120px;
		color: #363636;
		background: white;
		text-align: center;

		@media screen and (max-width: 600px) {
			margin-top: 80px;
			font-size: 30px;
			line-height: 33px;
			height: 106px;
			padding-top: 44px;
		}
	}

	.section-2 {
		background: #f9fafc;
		padding-top: 23px;
		padding-bottom: 27px;

		@media screen and (max-width: 600px) {
			padding: 40px;
		}

		&-1 {
			text-align: center;
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 25px;
			text-align: center;
			color: #363636;
			margin-bottom: 23px;
		}

		&-2 {
			display: flex;
			justify-content: center;

			@media screen and (max-width: 600px) {
				flex-wrap: wrap;
			}

			.social-icon {
				color: #363636;
				width: 88px;
				height: 88px;
				background: transparent;
				display: flex;
				justify-content: center;
				cursor: pointer;

				& > * {
					margin: auto;
				}

				&:hover {
					color: #88d20f;
					background: #ffffff;
					box-shadow: 0px 3px 30px rgba(105, 105, 105, 0.2);
					border-radius: 5px;
				}
			}
		}
	}

	.section-3 {
		padding-top: 26px;
		padding-bottom: 43px;
		display: flex;
		justify-content: center;

		@media screen and (max-width: 600px) {
			display: block;
		}

		.card {
			background: #ffffff;
			border: 1px solid #e5e9f2;
			box-sizing: border-box;
			border-radius: 10px;
			padding: 10px;
			width: 340px;
			height: 343px;
			margin: 37px;

			@media screen and (max-width: 600px) {
				width: 292px;
				height: 319px;
				padding: 25px;
			}

			&:hover {
				box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.05);
			}

			&-img {
				margin-top: 45px;
				margin-bottom: 45px;
				margin-left: 32px;
				height: 60px;

				img {
					height: 60px;
				}

				@media screen and (max-width: 600px) {
					margin-left: 0;
					margin-top: 30px;
					margin-bottom: 30px;
				}
			}

			&-title {
				font-family: 'Graphik';
				font-size: 18px;
				line-height: 20px;
				text-align: left;
				margin-left: 32px;

				@media screen and (max-width: 600px) {
					margin-left: 0;
				}
			}

			&-desc {
				margin-left: 35px;
				margin-right: 35px;
				margin-top: 19px;
				margin-bottom: 14px;
				font-family: 'Graphik';
				font-size: 16px;
				line-height: 25px;
				text-align: left;

				@media screen and (max-width: 600px) {
					margin-top: 12px;
					margin-bottom: 14px;
					margin-left: 0;
					margin-right: 0;
				}
			}

			&-action {
				color: #88d20f;
				font-family: 'Graphik';
				font-size: 16px;
				line-height: 25px;
				cursor: pointer;
				float: right;
				margin-right: 20px;

				&:after {
					content: ' >';
				}

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
`;

import FaqsImg from '../../assets/img/faqs.png';
import LiveChatImg from '../../assets/img/live_chat.png';
import ContactSupportImg from '../../assets/img/contact_support.png';
import Header from '../../components/header';
function Card(props) {
	const { img, title, desc, action } = props;
	return (
		<div className="card">
			<div className="card-img">
				<img src={img} alt='card'></img>
			</div>
			<div className="card-title">{title}</div>
			<div className="card-desc">{desc}</div>
			<div>
				<div className="card-action">{action}</div>
			</div>
		</div>
	);
}
function ContactUs() {
	const data = [
		{
			img: LiveChatImg,
			title: 'Live Chat',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
			action: "Let's talk",
		},
		{
			img: ContactSupportImg,
			title: 'Contact Support',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
			action: 'Send an Email',
		},
		{
			img: FaqsImg,
			title: 'FAQs',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
			action: 'Search FAQs',
		},
	];
	return (
		<ContactUsStyle>
		<div className="contact-us">
			<Header themeType="2" buttonName="Go Fast"></Header>
			<div className="section-1">Contact Us</div>
			<div className="section-2">
				<div className="section-2-1">You can get in touch we us easily through social media</div>
				<div className="section-2-2">
					<div className="social-icon">
						<FaWhatsapp size={50}></FaWhatsapp>
					</div>
					<div className="social-icon">
						<FaTwitter size={50}></FaTwitter>
					</div>
					<div className="social-icon">
						<FaInstagram size={50}></FaInstagram>
					</div>
					<div className="social-icon">
						<FaLinkedin size={50}></FaLinkedin>
					</div>
					<div className="social-icon">
						<FaDribbble size={50}></FaDribbble>
					</div>
					<div className="social-icon">
						<FaGithub size={50}></FaGithub>
					</div>
				</div>
			</div>
			<div className="section-3">
				{data.map(info => {
					return <Card key={info.title} {...info}></Card>;
				})}
			</div>
			<Footer></Footer>
		</div>
		</ContactUsStyle>
	);
}

export default ContactUs;
