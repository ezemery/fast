import React from 'react';
import styled from 'styled-components';
const TypographyStyle = styled.div`
.assets-page-content-right {
  .typography {
    margin-bottom: 50px;

    &-heading {
      font-family: 'Graphik Semibold';
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

    &-section {
      padding-top: 33px;

      @media screen and (max-width: 600px) {
        padding-top: 10px;
      }

      &-heading {
        font-family: 'Graphik';
        font-size: 24px;
        line-height: 50px;
        letter-spacing: 0.01em;
        color: #363636;
      }

      &-desc {
        font-family: 'Graphik';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        color: #2F2F2F;
      }

      &-content {
        margin-top: 33px;
      }

      &-typeface {
        border: 1px solid #E0E6ED;
        border-radius: 10px;
        padding: 31px 40px;
        font-family: 'Graphik';
        font-size: 16px;
        line-height: 40px;
        letter-spacing: 0.5em;
        color: #000000;
        word-break: break-all;
      }

      &-font {
        padding: 36px 58px;
        background: #FFFFFF;
        border: 1px solid #E0E6ED;
        border-bottom: none;
        border-radius: 0;

        @media screen and (max-width: 600px) {
          padding: 32px 31px;
        }

        &-desc {
          color: #7CB342
        }

        &:first-child {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
        }

        &:last-child {
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-bottom: 1px solid #E0E6ED;
        }
      }
    }

  }
}
`;
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
    <TypographyStyle>
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
    </TypographyStyle>
  );
}
export default Typography;
