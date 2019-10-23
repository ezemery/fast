import React, {useEffect, useRef} from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts'

import axios from 'axios';

import './style.scss';

function Chart(props) {
  const {today, yesterday, min, secs, monthly, heading} = props;
  const data = [
	[
		1167609600000,
		0.7537
	],
	[
		1167696000000,
		0.7537
	],
	[
		1167782400000,
		0.7559
	],
	[
		1167868800000,
		0.7631
	],
	[
		1167955200000,
		0.7644
	],
	[
		1168214400000,
		0.769
	],
	[
		1168300800000,
		0.7683
	],
	[
		1168387200000,
		0.77
	],
	[
		1168473600000,
		0.7703
	],
	[
		1168560000000,
		0.7757
	],
	[
		1168819200000,
		0.7728
	],
	[
		1168905600000,
		0.7721
	],
	[
		1168992000000,
		0.7748
	],
	[
		1169078400000,
		0.774
	],
	[
		1169164800000,
		0.7718
  ]];
  const options = {
      credits: {
        enabled: false
      },     
      chart: {
        zoomType: 'x',
        spacing: [0,0,0,0],
        height: 180,
      },
      title: {
          text: ''
      },
      subtitle: {
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        gridLineWidth: 0,
        title: {
            text: ''
        },
        labels: {
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  },
                  stops: [
                      [0, Highcharts.getOptions().colors[2]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 0
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          },
          line: {
            color: 'red'
          }
      },

      series: [{
          type: 'area',
          name: heading,
          data: data,
          color: Highcharts.getOptions().colors[2]
      }]
    };
    

  return (<div className='chart'>
    <div className='chart-heading'>
      <div className='chart-heading-value'>
        {heading}</div>
    </div>
    <div className='chart-values'>
      <div className='first-line'>
        <div className='first-value'>
          <span className='value'>{today}</span>&nbsp; today
        </div>
        <div className='second-value'>
          <span className='value'>{yesterday}</span>&nbsp;&nbsp;&nbsp; yestr.
        </div>
      </div>
      <div className='second-line'>
        <div className='first-value'>
          <span className='value'>{min}</span>&nbsp;min&nbsp;<span className='value'>{secs}</span>&nbsp;secs
        </div>
        <div className='second-value'>
          <span className='value'>{monthly}</span>&nbsp;(monthly)</div>
        </div>
    </div>
    <div className='chart-diagram'>
      <ReactHighcharts
          config={options}
        />
    </div>
  </div>)
}

export default Chart;