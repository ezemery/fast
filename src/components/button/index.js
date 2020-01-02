import React, { useState } from 'react';
import styled from 'styled-components'
const ButtonStyle = styled.div`
.green-button {
	background: #7cb342;
	border-radius: 5px;
	padding-top: 22px;
	padding-bottom: 21px;
	font-family: 'Graphik';
	font-size: 16px;
	font-weight: 600;
	line-height: 15px;
	text-align: center;
	letter-spacing: 0.01em;
	color: white;
	text-transform: uppercase;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		padding-top: 12px;
		padding-bottom: 12px;
	}
}

.green-button:hover {
	background: #95b970;
}
`;
function Button(props) {
	let { type, children, width } = props;
	switch (type) {
		case 'green':
			return (
				<ButtonStyle>
					<div className={'green-button'} style={{ width: width }}>
						{children}
					</div>
				</ButtonStyle>
			);
	}
}

export default Button;
