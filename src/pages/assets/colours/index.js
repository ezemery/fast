import React from 'react';
import './style.scss';
const Card = props => {
	const { color } = props;
	return (
		<div className="card">
			<div className="card-img" style={{ backgroundColor: color }}></div>
			<div className="card-title">{color}</div>
		</div>
	);
};
function Colours(props) {
	const primary = ['#88D20F', '#2B4403', '#696969', '#FFFFFF'];
	const secondary = ['#7CB342', '#FBFDF7', '#D21B0F', '#3D3D3D'];
	return (
    <div className="colours">
      <div className="colours-heading">Colours</div>
      <div className="colours-content">
        <div className="colours-section">
          <div className="colours-section-title">Primary colours</div>
          <div className="colours-section-desc">
            Fast uses conventional HTTP response codes to indicate the success
            or failure of an API request. In general: Codes in the 2xx range
            indicate success. Codes in the 4xx range indicate an error that
            failed given the information provided
          </div>
          <div className="colours-section-content">
            {primary.map(item => {
              return <Card color={item}></Card>;
            })}
          </div>
        </div>
        <div className="colours-section">
          <div className="colours-section-title">Secondary colours</div>
          <div className="colours-section-desc">
            Fast uses conventional HTTP response codes to indicate the success
            or failure of an API request. In general: Codes in the 2xx range
            indicate success. Codes in the 4xx range indicate an error that
            failed given the information provided
          </div>
          <div className="colours-section-content">
            {secondary.map(item => {
              return <Card color={item}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Colours;
