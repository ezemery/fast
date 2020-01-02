import React, {useEffect, useRef} from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts'

import axios from 'axios';
import styled from 'styled-components'
const ChartStyle = styled.div`
.warroom-page{
  font-family: 'Graphik';
  .chart{
    background: #FFFFFF;
    border: 0.5px solid #E5E9F2;
    box-sizing: border-box;
    border-radius: 5px;
    width: 380px;
    padding-bottom: 20px;
    @media screen and (max-width: 600px) {
      width: 273px;
    }
    &-heading{
      padding-top:20px;
      padding-bottom:20px;
      border-bottom: 0.5px solid #D3DCE6;
      @media screen and (max-width: 600px) {
        padding-top:16px;
        padding-bottom:16px;
      }
      &-value{
        padding: 5px 23px;
        background: #F9FAFC;
        border-radius: 15px;
        font-size: 14px;
        line-height: 15px;
        color: #515151;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &-values{
      font-size: 14px;
      line-height: 15px;
      color: #515151;
      @media screen and (max-width: 600px) {
        font-size:12px;
      }

      .value{
        font-size: 34px;
        line-height: 37px;
        color: #363636;
        @media screen and (max-width: 600px) {
          font-size: 20px;
        }
      }
      .first-line{
        margin-top: 34px;
        padding-left:40px;
        display: flex;
        padding-right:40px;
        @media screen and (max-width: 600px) {
          margin-top: 14px;
          padding-left:28px;
          padding-right:28px;
        }
      }
      .second-line{
        margin-top: 68px;
        padding-left:40px;
        display: flex;
        padding-right:40px;
        @media screen and (max-width: 600px) {
          margin-top: 35px;
          padding-left:28px;
          padding-right:28px;
        }
      }
      .first-value{
      }
      .second-value{
        margin-left: auto;
      }
    }
    &-diagram{
      height: 180px;
      width: 377px;
      @media screen and (max-width: 600px) {
        width: 270px;
      }
    }
  }
}
`;

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
    

  return (
  <ChartStyle>
  <div className='chart'>
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
  </div>
  </ChartStyle>
  )
}

export default Chart;