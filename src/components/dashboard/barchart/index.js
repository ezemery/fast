import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import './style.scss';
import ReactDOM from 'react-dom';
function StackBarChart() {
	const options = {
		chart: {
      type: 'column'
    },
		
		credits:{
			enabled: false
		},
		title: {
      text: ''
    },
    xAxis: {
			min: 0,
			title: {
					text: ''
			},
			labels: {
				enabled: true
			},
			categories: ['14 Aug', '15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug']       
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
      reversed: true,
			layout: 'horizontal',
			align: 'left',
			verticalAlign: 'top',
    },
    plotOptions: {
			series: {
					stacking: 'normal'
			},
				marker: {
					symbol: 'square',	
					radius: 0
				},
    },
    series: [{
			name: 'Fast Logins',
			data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
			color: '#88D20F',
			marker: {
					symbol: 'square',	
					radius: 0
				},
    }, {
			name: 'New customers',
			data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
			color: '#19381F',

    }, {
			name: 'Average Login frquency',
			data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
			color: '#7CB342',

    }]};

	return <div id="bar_chart">	<ReactHighcharts
          config={options}
        /></div>;
}
export default StackBarChart;
