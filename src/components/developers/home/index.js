import React from 'react';
import './style.scss';
import { FaWindows, FaMobileAlt, FaStar, FaAlignLeft } from 'react-icons/fa';

function Card(props) {
	const { title, desc, onClick, img } = props;
	return (
		<div className="card" onClick={() => onClick()}>
			<div className="card-img">{img}</div>
			<div className="card-title">{title}</div>
			<div className="card-desc">{desc}</div>
		</div>
	);
}
function Home(props) {
	const { onMenuClicked } = props;
	const contents = [
		{
			img: <FaWindows size={28} />,
			title: 'Overview',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
		{
			img: <FaAlignLeft size={28} />,
			title: 'Api Reference',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
		{
			img: <FaMobileAlt size={28} />,
			title: 'My Apps',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
		{
			img: <FaStar size={28} />,
			title: 'New Apps',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
	];
	return (
			<div className="developers-home">
				{contents.map(content => {
					return (
						<Card
							key={content.title}
							{...content}
							onClick={() => {
								onMenuClicked({ parent: content.title, child: '' });
							}}
						></Card>
					);
				})}
			</div>
	);
}

export default Home;
