import React, { useState } from 'react';
import { Popover, Button, Icon } from 'antd';

import Header3 from '../../components/header3';
import AmazonShortcut from '../../assets/img/amazon_shortcut.png';
import AppleShortcut from '../../assets/img/apple_shortcut.png';
import Hundred24Shortcut from '../../assets/img/24hundred_shortcut.png';
import IkeaShortcut from '../../assets/img/ikea_shortcut.png';
import MoreButton from '../../assets/img/more_button.png';
import {FaPlusCircle, FaCog, FaTrashAlt} from 'react-icons/fa';
import './style.scss';
import { Select } from 'antd';
const { Option } = Select;

function Shortcut(props) {
	const { img, text } = props;
	return (
		<div className="shortcut">
			<div className="shortcut-img">
				<img src={img} />
			</div>
			<div className='shortcut-text'>
				<span>{text}</span>
			
				<Popover
					content={<div className='shortcut-menu'>
						<a><FaPlusCircle size={13} />Add New Email</a>
					<a><FaCog size={13} />Shortcut Settings</a>
					<a><FaTrashAlt size={13} />Delete Shortcut</a></div>}

					trigger="click"
					placement='bottom'
					// visible={this.state.visible}
					// onVisibleChange={this.handleVisibleChange}
				>
					<div className='shortcut-action'>
						<img src={MoreButton}/>
					</div>
				</Popover>
			</div>
		</div>
	);
}

function Shortcuts() {
	const data = [
			{
				text: 'Amazon HR',
				img: AmazonShortcut
			},
			{
				text: 'Apple',
				img: AppleShortcut
			},
			{
				text: '24 Hundred',
				img: Hundred24Shortcut
			},
			{
				text: 'Ikea',
				img: IkeaShortcut
			},
				{
				text: 'Apple',
				img: AppleShortcut
			},
			{
				text: 'Amazon HR',
				img: AmazonShortcut
			},
			{
				text: 'Apple',
				img: AppleShortcut
			},
			{
				text: '24 Hundred',
				img: Hundred24Shortcut
			},
			{
				text: 'Ikea',
				img: IkeaShortcut
			},
				{
				text: 'Apple',
				img: AppleShortcut
			},
		];
	
		 
		return (
			<div className="shortcuts-page">
				<Header3></Header3>
				<div className="section">
					<div className='section-header'>
						<div className='section-title'>My Shortcuts</div>
						<div className='section-desc'>Popular Shortcuts</div>
						<div className='section-search'>
							<div className='section-search-container'>
								<input placeholder='search shortcuts'/>
								<Icon type="search" />
							</div>
						</div>
					</div>
					<div className='section-content'>
					{

						data.map(item=> {
							return <Shortcut {...item} />
						})
					}
					</div>
				</div>
		
			</div>
	);
}

export default Shortcuts;
