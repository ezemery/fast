import React from 'react';
import DownloadImg from '../../../assets/img/download_icon.png';
import LogoGray from '../../../assets/img/logo_gray.png';
import LogoWhite from '../../../assets/img/logo_white.png';
import LogoMin from '../../../assets/img/logo_min.png';
import styled from 'styled-components'
const LogoStyle = styled.div`
.assets-page-content-right {
	.logos {
	  .logos-heading {
		font-family: 'Graphik';
		font-size: 36px;
		line-height: 50px;
		color: #363636;
		text-align: left;
		padding-bottom: 20px;
		border-bottom: 1px solid #e2e2e2;
  
		@media screen and (max-width: 600px) {
		  font-size: 24px;
		  line-height: 50px;
		  padding-bottom: 0;
		  border: none;
		  margin-top: 74px;
		}
	  }
  
	  &-content {
		margin-bottom: 95px;
	  }
  
	  &-section {
		margin-top: 40px;
  
		@media screen and (max-width: 600px) {
		  margin-top: 10px;
		}
  
		&-title {
		  font-family: 'Graphik';
		  font-size: 24px;
		  line-height: 50px;
		  letter-spacing: 0.01em;
		  color: #363636;
		  margin-bottom: 10px;
  
		  @media screen and (max-width: 600px) {
			font-size: 18px;
		  }
		}
  
		&-desc {
		  font-family: 'Graphik';
		  font-size: 16px;
		  line-height: 25px;
		  color: #363636;
		  margin-bottom: 15px;
  
		  @media screen and (max-width: 600px) {
			font-size: 14px;
		  }
		}
  
		&-img {
		  width: 100%;
		  background: url('../../../assets/img/logo_guideline.png') no-repeat center center;
		  background-size: 510px 158px;
		  width: 100%;
		  height: 200px;
  
		  @media screen and (max-width: 600px) {
			width: 100%;
			background: url('../../../assets/img/logo_guideline_green.png') no-repeat center center;
			background-size: 260px 80px;
			width: 100%;
			height: 120px;
		  }
		}
  
		&-content {
		  display: flex;
  
		  @media screen and (max-width: 600px) {
			display: block;
		  }
  
		  .card {
			width: 252px;
			background: white;
			box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.1);
			margin: 30px;
			z-index: -1;
			
			@media screen and (max-width: 600px) {
			  margin-top: 60px;
			  margin-left: auto;
			  margin-right: auto;
			}
  
			&-img {
			  width: 100%;
			  height: 150px;
			  display: flex;
			  justify-content: center;
			  border-bottom-left-radius: 0;
			  border-bottom-right-radius: 0;
  
			  img {
				height: 30px;
				margin-top: auto;
				margin-bottom: auto;
			  }
			}
  
			&-content {
			  padding: 10px 20px 40px 20px;
			  display: flex;
  
			  &-left {
				margin-right: auto;
			  }
  
			  &-right {
				margin-left: auto;
  
				img {
				  width: 20px;
				  cursor: pointer;
				  height: 20px;
				}
			  }
			}
  
			&-title {
			  font-family: 'Graphik';
			  font-size: 18px;
			  line-height: 25px;
			  color: #2b4403;
			}
  
			&-desc {
			  margin-top: 8px;
			  font-size: 14px;
			  line-height: 25px;
			  color: #2b4403;
			}
		  }
		}
	  }
	}
  }
`;

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
		<LogoStyle>
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
		</LogoStyle>
	);
}
export default Logo;
