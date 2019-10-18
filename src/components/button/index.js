import React, { useState } from 'react';
import './style.scss';
function Button(props) {
	let { type, children, width } = props;
	switch (type) {
		case 'green':
			return (
				<div className={'green-button'} style={{ width: width }}>
					{children}
				</div>
			);
	}
}

export default Button;
