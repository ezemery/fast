import React from 'react';

import Header3 from '../header3';
import LogoGray from '../../assets/img/logo_gray.png';
import Chart from './chart';
import Table from './table';
import styled from 'styled-components'
const WarRoomStyle = styled.div`.warroom-page {
	background: #f9fafc;
	over-flow: auto;
	min-width: 1356px;
	@media screen and (max-width: 600px) {
		min-width: auto;
	}
	&-content{
		margin-top: 80px;
		padding-top: 34px;

		display:flex;
		justify-content: center;
		@media screen and (max-width: 600px) {
			display: block;
		}
		&-1{
			display: block;
			&-1{
				@media screen and (max-width: 600px) {
					padding-left: 20px;
					padding-right: 20px;
				}
				.box{
					background: #FFFFFF;
					border: 0.5px solid #E0E6ED;
					box-sizing: border-box;
					border-radius: 10px;
					@media screen and (max-width: 600px) {
						width: 100%;
						padding-left: 33px;
    				padding-right: 31px;
					}
					&-header{
						padding-top:33px;
						padding-bottom:33px;
						justify-content: center;
    				display: flex;
					}
					&-button{
						background: #363636;
						border-radius: 10px;
						font-family: 'Graphik';
						font-size: 12px;
						line-height: 13px;
						color: #FFFFFF;
						padding: 9px 34px;
						width: fit-content;
						border: 1px solid #363636;
						cursor: pointer;
						&:hover{
							background: white;
							color: #363636;
						}
					}
					&-content{
						display: flex;
						justify-content: center;
						padding-top: 20px;
						padding-bottom: 70px;
						@media screen and (max-width: 600px) {
							display: block;
						}
						&-users{
							&-count{
								font-family: 'Graphik';
								font-size: 64px;
								line-height: 70px;
								color: #7CB342;
								@media screen and (max-width: 600px) {
									text-align: center;
								}
							}
							&-desc{
								font-family: Graphik;
								font-size: 16px;
								line-height: 18px;
								color: #363636;
								display: flex;
								@media screen and (max-width: 600px) {
									justify-content: center;
									padding-bottom: 10px;
									border-bottom: 0.5px solid #515151;

								}
							}
							&-logo{
								width: 35px;
								height: 12px;
								margin-left: 5px;
								img{
									width:100%;
									height:100%;
								}
							}
						}
						&-time{
							margin-left: 60px;
							font-family: 'Graphik';
							font-size: 16px;
							line-height: 18px;
							color: #363636;
							@media screen and (max-width: 600px) {
								font-size: 12px;
								display: flex;
								margin:auto;
								justify-content: center;
								&>*:first-child{
									margin-right: 3px;
								}
							}
							.bold{
								font-size: 24px;
								line-height: 26px;
								@media screen and (max-width: 600px) {
									font-size: 12px;
									font-weight: bold;
									line-height: 18px;
								}
							}
							&>div{
								margin-top:15px;
							}
						}
					}
				}
			}
			&-2{
				display: flex;
				margin-top: 26px;
				.chart:last-child{
					margin-left: 34px;
				}
				@media screen and (max-width: 600px) {
					overflow: auto;
					width: 100%;
					padding-left: 20px;
					padding-right: 20px;
					&::-webkit-scrollbar {
						width: 0px; 
						background: transparent;
					}
				}
			}
		}
		&-2{
				margin-left: 34px;
				@media screen and (max-width: 600px) {
					margin-left: 15px;
					margin-right: 15px;
					margin-top: 20px;
				}
		}
	}
}
`;

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
		<WarRoomStyle>
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
		</WarRoomStyle>
	);
}

export default WarRoom;
