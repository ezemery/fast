import React, { useState } from 'react';

import Header2 from '../../components/header2';
import Footer from '../../components/footer';

import './style.scss';

import CreativePeopleImg from '../../assets/img/creative_people.png';
import UnlimitedBenefitsImg from '../../assets/img/unlimited_benefits.png';
import WorkRemotelyImg from '../../assets/img/work_remotely.png';
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
				<img src={img}></img>
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
			<Header2 buttonName="Setup Fast Checkout" mobileButtonName="Setup Fast Checkout"></Header2>
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
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
							consectetur, adipisci velit, sed quia non numqiatur?"
						</div>
						<div className="section-2-content-1-2"></div>
					</div>
					<div className="section-2-content-2"></div>
					<div className="section-2-content-3"></div>
				</div>
			</div>
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
