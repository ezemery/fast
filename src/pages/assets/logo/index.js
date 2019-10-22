import React from 'react';
import DownloadImg from '../../../assets/img/download_icon.png';
import LogoGray from '../../../assets/img/logo_gray.png';
import LogoWhite from '../../../assets/img/logo_white.png';
import LogoMin from '../../../assets/img/logo_min.png';
import './style.scss';
const Card = props => {
	const { img, backColor, title } = props;
	return (
		<div className="card">
			<div className="card-img" style={{ backgroundColor: backColor }}>
				<img src={img}></img>
			</div>
			<div className="card-content">
				<div className="card-content-left">
					<div className="card-title">{title}</div>
					<div className="card-desc">SVG, PDF, PNG</div>
				</div>
				<div className="card-content-right">
					<img src={DownloadImg}></img>
				</div>
			</div>
		</div>
	);
};
function Logo(props) {
	const data = [
		{ img: LogoGray, backColor: 'white', title: 'Logo light' },
		{ img: LogoWhite, backColor: '#696969', title: 'Logo dark' },
		{ img: LogoMin, backColor: 'white', title: 'Icon' },
	];
	return (
		<div className="logos">
			<div className="logos-heading">Logo</div>
			<div className="logos-content">
				<div className="logos-section">
					<div className="logos-section-title">Brand Logo</div>
					<div className="logos-section-desc">
						Fast uses conventional HTTP response codes to indicate the success or failure of an API request.
						In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error
						that failed given the information provided
					</div>
					<div className="logos-section-content">
						{data.map(item => {
							return <Card key={item.title} {...item}></Card>;
						})}
					</div>
				</div>
				<div className="logos-section">
					<div className="logos-section-title">Logo guidelines</div>
					<div className="logos-section-desc">
						Fast uses conventional HTTP response codes to indicate the success or failure of an API request.
						In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error
						that failed given the information provided
					</div>
					<div className="logos-section-img"></div>
					<div className="logos-section-desc">
						Fast uses conventional HTTP response codes to indicate the success or failure of an API request.
						In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error
						that failed given the information provided
					</div>
				</div>
			</div>
		</div>
	);
}
export default Logo;
