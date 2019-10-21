import React, { useState } from 'react';
import './style.scss';
function SubHeader() {
	const [items, setItems] = useState(['Dashboard', 'Customers', 'Cohort analysis']);

	return (
		<div className="subheader">
			{items.map((item, index) => {
				return (
					<div key={index} className="subheader-item">
						{item}
					</div>
				);
			})}
		</div>
	);
}
export default SubHeader;
