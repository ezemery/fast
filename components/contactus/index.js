import React from 'react';
import Footer from '../footer';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaDribbble, FaInstagram, FaGithub } from 'react-icons/fa';
import './style.scss';

import FaqsImg from '../../static/img/faqs.png';
import LiveChatImg from '../../static/img/live_chat.png';
import ContactSupportImg from '../../static/img/contact_support.png';
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
	);
}

export default ContactUs;
