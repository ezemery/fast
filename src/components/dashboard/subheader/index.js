import React, { useState } from 'react';
import styled from 'styled-components';
const SubHeaderStyle = styled.div`.dashboard-page {
	.subheader {
		position: fixed;
		background: #363636;
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 80px;
		z-index: 1;

		@media screen and (max-width: 600px) {
			padding-top: 9px;
			padding-bottom: 9px;
		}

		&-item {
			font-family: 'Graphik';
			font-size: 14px;
			line-height: 122.52%;
			text-align: center;
			color: #ffffff;
			padding: 10px 30px;
			margin-left: 25px;
			border-radius: 3px;
			cursor: pointer;

			@media screen and (max-width: 600px) {
				font-size: 12px;
				padding: 6px 8px;
			}

			&:first-child {
				margin-left: 0;
			}

			&:hover {
				background: rgba(136, 210, 15, 0.1);
				color: #88d20f;
			}
		}
	}
}
`;
function SubHeader() {
	const [items, setItems] = useState(['Dashboard', 'Customers', 'Cohort analysis']);

	return (
		<SubHeaderStyle>
			<div className="subheader">
				{items.map((item, index) => {
					return (
						<div key={index} className="subheader-item">
							{item}
						</div>
					);
				})}
			</div>
		</SubHeaderStyle>
	);
}
export default SubHeader;
