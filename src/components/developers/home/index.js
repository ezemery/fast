import React from 'react';
import styled from 'styled-components'
const HomeStyle = styled.div`
.developers-home {
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	max-width: 913px;

	@media screen and (max-width: 600px) {
		display: block;
	}

	.card {
		background: #ffffff;
		border: 1px solid #e5e9f2;
		border-radius: 10px;
		padding: 25px 25px;
		width: 253px;
		height: 257px;
		margin: 21px;
		cursor: pointer;

		@media screen and (max-width: 600px) {
			margin-left: auto;
			margin-right: auto;
		}

		&:hover {
			box-shadow: 0px 50px 70px rgba(0, 0, 0, 0.05);
		}

		&-img {
			width: 43px;
			height: 34px;
			color: #88d20f;
		}

		&-title {
			margin-top: 28px;
			font-family: 'Graphik';
			font-size: 18px;
			line-height: 20px;
			color: #2b4403;
		}

		&-desc {
			margin-top: 6px;
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 25px;
			color: #3d3d3d;
		}
	}
}

`;
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
		<HomeStyle>
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
		</HomeStyle>
	);
}

export default Home;
