import React from 'react';
import Footer from '../../footer';
import CreativePeopleImg from '../../../static/img/creative_people.png';
import UnlimitedBenefitsImg from '../../../static/img/unlimited_benefits.png';
import WorkRemotelyImg from '../../../static/img/work_remotely.png';
import Header from '../../header';
import './style.scss';
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
	);
}

export default Shopify;
