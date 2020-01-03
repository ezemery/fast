import React, { useState } from 'react';

import Header3 from '../header3';
import SubHeader from './subheader';
import Footer from '../footer';
import MultiLineChart from './linechart';
import StackBarChart from './barchart';
import './style.scss'
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
	);
}

export default Dashboard;
