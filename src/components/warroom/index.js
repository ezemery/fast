import React from 'react';

import Header3 from '../header3';
import LogoGray from '../../assets/img/logo_gray.png';
import Chart from './chart';
import Table from './table';
import './style.scss';
function Box(props) {
	const { users, min, secs } = props;
	return (
		<div className="box">
			<div className="box-header">
				<div className='box-button'>Total number of Users</div>
			</div>
			<div className='box-content'>
				<div className='box-content-users'>
					<div className='box-content-users-count'>{users}</div>
					<div className='box-content-users-desc'>users logged into <div className='box-content-users-logo'><img src={LogoGray} alt='gray logo' /></div></div>
				</div>
				<div className='box-content-time'>
					<div>One new Login every</div>
					<div><span className='bold'>{min}</span> min&nbsp; <span className='bold'>{secs}</span> secs</div>
				</div>
			</div>
		</div>
	);
}

function WarRoom() {
	const totalUsers = {
		users: 1621,
		min: '05',
		secs: '52'
	}
	const totalLogins = {
		heading: 'Total Logins',
		today: 37,
		yesterday: 102,
		min: 0,
		secs: 52,
		monthly: 666
	}
	const totalIntegrations = {
		heading: 'Total Integrations',
		today: 37,
		yesterday: 102,
		min: 0,
		secs: 52,
		monthly: 666
	}

	const tableData =
	{
		topCountries: [
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'down', country: 'UK'},
			{rate: 25.4, arrow: 'up', country: 'AU'},
			{rate: 25.4, arrow: 'up', country: 'GER'},
			{rate: 25.4, arrow: 'up', country: 'GER'},
			{rate: 25.4, arrow: 'down', country: 'FR'},
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'up', country: 'GER'},
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'down', country: 'UK'},
			{rate: 25.4, arrow: 'up', country: 'AU'},
			{rate: 25.4, arrow: 'up', country: 'GER'},
			{rate: 25.4, arrow: 'down', country: 'US'},
			{rate: 25.4, arrow: 'down', country: 'FR'},
			{rate: 25.4, arrow: 'up', country: 'AU'},
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'down', country: 'UK'},
			{rate: 25.4, arrow: 'up', country: 'AU'},
			{rate: 25.4, arrow: 'down', country: 'US'},
			{rate: 25.4, arrow: 'up', country: 'UK'},
			{rate: 25.4, arrow: 'down', country: 'UK'},
			{rate: 25.4, arrow: 'up', country: 'AU'},
			{rate: 25.4, arrow: 'up', country: 'US'},
			{rate: 25.4, arrow: 'up', country: 'FR'},
			{rate: 25.4, arrow: 'down', country: 'UK'},
			{rate: 25.4, arrow: 'up', country: 'GER'},
		],
		topContinents: [
			{rate: 25.4, continent: 'AS'},
			{rate: 25.4, continent: 'AS'},
			{rate: 25.4, continent: 'NA'},
			{rate: 25.4, continent: 'SA'},
			{rate: 25.4, continent: 'AF'},
			{rate: 25.4, continent: 'AF'},
			{rate: 25.4, continent: 'EU'},
			{rate: 25.4, continent: 'OC'},
		]
	}
	return (
		<div className="warroom-page">
			<Header3></Header3>
			<div className="warroom-page-content">
				<div className='warroom-page-content-1'>
					<div className='warroom-page-content-1-1'>			
						<Box {...totalUsers}/>			
					</div>	
					<div className='warroom-page-content-1-2'>
						<Chart {...totalLogins} />						
						<Chart {...totalIntegrations} />						
					</div>	
				</div>
				<div className='warroom-page-content-2'>
					<Table {...tableData}/>
				</div>
			</div>
		</div>
	);
}

export default WarRoom;
