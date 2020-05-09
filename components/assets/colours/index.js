import React from 'react';
import './style.scss'

const Card = props => {
	const { text, backgroundColor } = props;
	return (
		<div className="card">
			<div className="card-img" style={props}></div>
      <div className="card-desc">
        <div className="card-text">{text}</div>
        <div className="card-color">HEX: {backgroundColor}</div>
      </div>
		</div>
	);
};
function Colours(props) {
  const primary = [
    { text: 'Sheen Green', backgroundColor: '#88D20F' },
    { text: 'Bud Green', backgroundColor: '#7CB342' },
    { text: 'Inchworm', backgroundColor: '#B3E266' },
    { text: 'Light Green', backgroundColor: '#9EE27D' },
    { text: 'Jet Black', backgroundColor: '#363636' },
    { text: 'White', backgroundColor: '#FFFFFF' },
  ];
  const secondary = [
    { text: 'Blue Jeans', backgroundColor: '#5BC0EB' },
    { text: 'Cyan Cronflower blue', backgroundColor: '#1982C4' },
    { text: 'Pearly Purple', backgroundColor: '#9D69A3' },
    { text: 'Dark Lavendar', backgroundColor: '#6A4C93' },
    { text: 'Gargoyle Gas', backgroundColor: '#FDE74C' },
    { text: 'Sunglow', backgroundColor: '#FFCA3A' },
    { text: 'Powder Blue', backgroundColor: '#B6DCE2' },
    { text: 'Metallic Seaweed', backgroundColor: '#1A8293' },
    { text: 'Flame', backgroundColor: '#E55934' },
    { text: 'Mahogany', backgroundColor: '#BF3100' },
    { text: 'Deep Carrot Orange', backgroundColor: '#DD7230' },
    { text: 'Phthalo Green', backgroundColor: '#19381F' },
  ];
  const grey = [
    { text: 'Grey 200', backgroundColor: '#444854' },
    { text: 'Grey 300', backgroundColor: '#575A65' },
    { text: 'Smoke 100', backgroundColor: '#C0CCDA' },
    { text: 'Smoke 200', backgroundColor: '#D3DCE6' },
    { text: 'Smoke 300', backgroundColor: '#E0E6ED' },
    { text: 'Snow 100', backgroundColor: '#E5E9F2' },
    { text: 'Snow 200', backgroundColor: '#EFF2F7' },
    { text: 'Snow 300', backgroundColor: '#F9FAFC' },
  ];
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
              return <Card {...item}></Card>;
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
              return <Card {...item}></Card>;
            })}
          </div>
        </div>
        <div className="colours-section">
          <div className="colours-section-title">Grey colours</div>
          <div className="colours-section-desc">
            Fast uses conventional HTTP response codes to indicate the success
            or failure of an API request. In general: Codes in the 2xx range
            indicate success. Codes in the 4xx range indicate an error that
            failed given the information provided
          </div>
          <div className="colours-section-content">
            {grey.map(item => {
              return <Card {...item}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Colours;
