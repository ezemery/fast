import React from 'react';
import Footer from '../footer';
import CreativePeopleImg from '../../static/img/creative_people.png';
import UnlimitedBenefitsImg from '../../static/img/unlimited_benefits.png';
import WorkRemotelyImg from '../../static/img/work_remotely.png';
import Header from '../../components/header';
import './style.scss'


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
	);
}

export default Careers;
