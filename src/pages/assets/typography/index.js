import React from 'react';
import './style.scss';
const Card = props => {
	const { desc, font, texts } = props;
	return (
		<div className="section">
			<div className="section-desc" dangerouslySetInnerHTML={{__html:desc}} ></div>
			<div className="section-content" style={{ fontFamily: font }}>
				{texts.map((text, index) => {
					return (
						<div key={text} style={{ fontWeight: index * 200 }}>
							{text}
						</div>
					);
				})}
			</div>
			<div className="section-footer">Download font family</div>
		</div>
	);
};
function Typography(props) {
	let data = [
		{
			desc:
				'<b>Muli</b> is used for high priority and low priority headings (H1, H2,H3,H4 etc) and it pairs nicely with TT norms. Its also used for the button text',
			texts: ['Muli Regular', 'Muli Semi-bold', 'Muli Bold', 'Muli Extrabold'],
			font: 'Muli',
		},
		{
			desc:
				'<b>TT Norms</b> is used mainly for the body text and it pairs nicely with Muli. Its also used for the button text',
			texts: ['TT norms regular', 'TT norms medium', 'TT norms bold', 'TT norms extrabold'],
			font: 'Graphik',
		},
	];
	return (
		<div className="typography">
			<div className="typography-heading">Typography</div>
			<div className="typography-desc">
				We use two typefaces on Fast website and the Fast app, namely Muli and TTnorms
			</div>
			<div className="typography-content">
				{data.map(item => {
					return <Card key={item.desc} {...item}></Card>;
				})}
			</div>
		</div>
	);
}
export default Typography;
