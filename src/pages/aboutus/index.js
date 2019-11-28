import React from 'react';

import Header2 from '../../components/header2';
import Footer from '../../components/footer';

import './style.scss';

import Team1Img from '../../assets/img/team_1.png';
import Team2Img from '../../assets/img/team_2.png';
import Team3Img from '../../assets/img/team_3.png';
import Team4Img from '../../assets/img/team_4.png';
import Team5Img from '../../assets/img/team_5.png';
import Team6Img from '../../assets/img/team_6.png';
import Header from '../../components/header';
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
		<div className="aboutus-page">
			<Header themeType="2" buttonName="Fast Go"></Header>
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
	);
}

export default AboutUs;
