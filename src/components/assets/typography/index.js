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
	const fontArray = [
    { fontSize: '48px', fontFamily: 'Graphik Bold' },
    { fontSize: '36px', fontFamily: 'Graphik Medium' },
    { fontSize: '28px', fontFamily: 'Graphik Medium' },
    { fontSize: '24px', fontFamily: 'Graphik Regular' },
    { fontSize: '21px', fontFamily: 'Graphik Regular' },
    { fontSize: '18px', fontFamily: 'Graphik Regular' },
    { fontSize: '16px', fontFamily: 'Graphik Regular' },
    { fontSize: '14px', fontFamily: 'Graphik Regular' },
  ];
	return (
    <div className="typography">
      <div className="typography-heading">Typography</div>
      <div className="typography-section">
        <div className="typography-section-heading">Typeface</div>
        <div className="typography-section-desc">
          Fast's primary typeface is <b>Graphik</b> — a robust typeface with
          legible numbers that renders well at all sizes. It is soft and
          friendly, yet plain enough to get out of the way and let the user's
          designs shine.
        </div>
        <div className="typography-section-content">
          <div className="typography-section-typeface">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br /> abcdefghijklmnopqrstuvwxyz
            <br /> 0123456789
          </div>
        </div>
      </div>
      <div className="typography-section">
        <div className="typography-section-heading">Front sizes</div>
        <div className="typography-section-desc">
          The font scale consists of 8 different font sizes. The default size
          applied to the body is rRegular.
				</div>
				<div className="typography-section-content">
					{
						fontArray.map((font) => {
							return (
                <div className="typography-section-font">                  
                    <div style={font}>
                      The quick brown fox jumps over the lazy dog
										</div>
										<div className="typography-section-font-desc">
											{	`${font.fontFamily} ${font.fontSize}`	}
										</div>                  
                </div>
              );
						})
					}
				</div>
      </div>
    </div>
  );
}
export default Typography;
