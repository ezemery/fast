import React, { useState } from 'react';

import Header3 from '../header3';
import SubHeader from './subheader';
import Footer from '../footer';
import MultiLineChart from './linechart';
import StackBarChart from './barchart';
import styled from 'styled-components'
const DashboardStyle = styled.div`
.dashboard-page {
	background: #f9fafc;

	.section-1 {
		padding-top: 164px;
		padding-bottom: 0px;
		text-align: center;
		justify-content: center;
		display: flex;

		@media screen and (max-width: 600px) {
			padding-top: 124px;
			padding-bottom: 0px;
			display: block;
			justify-content: left;
		}

		&-left {
			margin-left: 174px;

			@media screen and (max-width: 600px) {
				padding-top: 30px;
				padding-bottom: 21px;
				margin-left: 0px;
				text-align: left;
				background: white;
			}
		}

		&-right {
			display: flex;
			margin-left: auto;
			margin-right: 46px;
			height: 35px;
			margin-top: auto;

			& > * {
				margin-left: 10px;
			}

			span {
				font-family: 'Graphik';
				font-size: 10px;
				line-height: 122.52%;
				text-align: center;
				color: #696969;
				line-height: 35px;
			}

			@media screen and (max-width: 600px) {
				padding-top: 15px;
				margin-left: 10px;
				text-align: left;
			}
		}

		&-title {
			font-family: 'Graphik';
			font-size: 21px;
			line-height: 122.52%;
			text-align: center;
			color: #363636;
			margin-bottom: 18px;

			@media screen and (max-width: 600px) {
				font-size: 16px;
				margin-bottom: 3px;
			}
		}

		&-desc {
			font-family: 'Graphik';
			font-size: 12px;
			line-height: 122.52%;
			text-align: center;
			color: #696969;
			margin-left: auto;
			margin-right: auto;

			@media screen and (max-width: 600px) {
				font-size: 10px;
			}
		}
	}

	.section-2 {
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		@media screen and (max-width: 600px) {
			width: 560px;
		}

		.box {
			background: #ffffff;
			border: 1px solid #e5e9f2;
			box-sizing: border-box;
			border-radius: 4px;
			padding: 15px;
			max-width: 325px;
			margin: 7px;
			width: 325px;

			@media screen and (max-width: 600px) {
				width: 128px;
				margin: 5px;
			}

			&-header {
				font-family: 'Graphik';
				font-size: 12px;
				line-height: 122.52%;
				text-align: center;
				color: #535353;

				@media screen and (max-width: 600px) {
					font-size: 8px;
				}
			}

			&-value {
				margin-top: 28px;
				font-size: 48px;
				line-height: 122.52%;
				text-align: center;
				color: #363636;
				font-weight: bold;

				@media screen and (max-width: 600px) {
					margin-top: 17px;
					font-size: 24px;
					line-height: 122.52%;
					text-align: center;
					color: #2b4403;
				}
			}

			&-desc {
				margin-top: 5px;
				font-family: 'Graphik';
				font-size: 10px;
				line-height: 122.52%;
				text-align: center;
				color: #989898;

				@media screen and (max-width: 600px) {
					margin-top: 3px;
					font-size: 6px;
					line-height: 122.52%;
				}
			}

			&-footer {
				margin-top: 38px;
				text-align: left;
				font-family: 'Graphik';
				font-size: 12px;
				line-height: 122.52%;
				text-align: left;
				color: #696969;

				@media screen and (max-width: 600px) {
					margin-top: 10px;
					font-size: 8px;
					line-height: 122.52%;
				}
			}
		}
	}

	.section-3 {
		padding-top: 20px;
		padding-bottom: 20px;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		@media screen and (max-width: 600px) {
			padding-top: 15px;
			width: 560px;
		}

		#line_chart {
			width: 713px;
			padding: 20px;
			background: white;
			border: 0.5px solid #dfdfdf;
			border-radius: 4px;
			margin: 5px;

			@media screen and (max-width: 600px) {
				padding-top: 15px;
				width: 500px;
			}
		}

		#bar_chart {
			width: 620px;
			padding: 20px;
			background: white;
			border: 0.5px solid #dfdfdf;
			border-radius: 4px;
			margin: 5px;

			@media screen and (max-width: 600px) {
				padding-top: 15px;
				width: 500px;
			}
		}
	}

	.section-content {
		@media screen and (max-width: 600px) {
			overflow: auto;
		}
	}
}

`;
import { Select } from 'antd';
const { Option } = Select;

function Box(props) {
	const { heading, value, desc, percent, days } = props;
	return (
		<div className="box">
			<div className="box-header">{heading}</div>
			<div className="box-value">{value}</div>
			<div className="box-desc">{desc}</div>
			<div className="box-footer">
				<span>{percent}</span> over {days} days
			</div>
		</div>
	);
}

function Dashboard() {
	const data = [
		{
			heading: 'Fast Logins',
			value: 21249,
			desc: '',
			percent: 13,
			days: 7,
		},
		{
			heading: 'New customers',
			value: 2356,
			desc: '',
			percent: 22,
			days: 7,
		},
		{
			heading: 'Average Login frequency',
			value: 132,
			desc: 'Logins per min',
			percent: 13,
			days: 7,
		},
		{
			heading: 'Fast Logins',
			value: 21249,
			desc: 'reward points',
			percent: 13,
			days: 7,
		},
	];
	return (
		<DashboardStyle>
		<div className="dashboard-page">
			<Header3></Header3>
			<SubHeader></SubHeader>
			<div className="section-1">
				<div className="section-1-left">
					<div className="section-1-title">Harris Farm</div>
					<div className="section-1-desc">www.harrisfarm.com</div>
				</div>
				<div className="section-1-right">
					<span>Sort by:</span>
					<Select defaultValue="online" style={{ width: 120 }}>
						<Option value="online">Online</Option>
						<Option value="offline">Offline</Option>
					</Select>
					<Select defaultValue="7days" style={{ width: 120 }}>
						<Option value="7days">7 Days</Option>
						<Option value="10days">10 Days</Option>
						<Option value="15days">15 Days</Option>
					</Select>
				</div>
			</div>
			<div className="section-content">
				<div className="section-2">
					{data.map(d => {
						return <Box {...d}></Box>;
					})}
				</div>

				<div className="section-3">
					<MultiLineChart></MultiLineChart>
					<StackBarChart></StackBarChart>
				</div>
			</div>
		</div>
		</DashboardStyle>
	);
}

export default Dashboard;
