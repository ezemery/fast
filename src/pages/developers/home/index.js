import React from 'react';
import './style.scss';

function Card(props) {
	const { title, desc, onClick } = props;
	return (
		<div className="card" onClick={() => onClick()}>
			<div className="card-img"></div>
			<div className="card-title">{title}</div>
			<div className="card-desc">{desc}</div>
		</div>
	);
}
function Home(props) {
	const { onMenuClicked } = props;
	const contents = [
		{
			title: 'Overview',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
		{
			title: 'Api Reference',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
		{
			title: 'My Apps',
			desc: 'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
		},
		{
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
