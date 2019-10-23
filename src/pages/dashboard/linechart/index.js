import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts'
import './style.scss';

function MultiLineChart() {
	const options = {
		credits:{
			enabled: false
		},
		title: {
        text: ''
    },

    subtitle: {
    },

    yAxis: {
			title: {
					text: ''
			},
			labels: {
				enabled: true
			}
    },
    legend: {
			layout: 'horizontal',
			align: 'left',
			verticalAlign: 'top',
			squareSymbol: false,
			lineHeight: 16,
			symbolHeight: 12
    },

    plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				marker: {
					symbol: 'square',	
					radius: 0
				},
				pointStart: 2010
			}
    },

    series: [{
			name: 'Fast Logins',
			data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
			color: '#88D20F',

    }, {
			name: 'New customers',
			data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
			color: '#19381F',

    }, {
			name: 'Average Login frquency',
			data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
			color: '#7CB342',

    }],

    responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}
	};

	return <div id="line_chart">
	<ReactHighcharts
          config={options}
        />
	</div>;
}
export default MultiLineChart;
