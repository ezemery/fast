import React from 'react';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import styled from 'styled-components'
const TableStyle = styled.div`
.warroom-page{
  .table{
    background: #FFFFFF;
    border: 0.5px solid #E5E9F2;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: 'Graphik';
    text-align: center;
    width: 512px;
    @media screen and (max-width: 600px) {
      width: 100%;
      
    }

    &-data{
      @media screen and (max-width: 600px) {
        display: flex;
      }
    }
    &-section{
      @media screen and (max-width: 600px) {
        width: 50%;
      }
    }
    &-heading{
      padding-top: 28px;
      padding-bottom: 20px;
      border-bottom: 0.5px solid #D3DCE6;

      &-value{
        font-size: 14px;
        line-height: 15px;
        color: #515151;
        padding: 5px 32px;
        background: #F9FAFC;
        border-radius: 10px;
        width:fit-content;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &-item{
      width:128px;
      padding-top: 17px;
      padding-bottom: 17px;
      border-right: 0.5px solid #D3DCE6;
      border-bottom: 0.5px solid #D3DCE6;
      @media screen and (max-width: 600px) {
        width: 50%;
      }
      &:nth-child(4n){
        border-right:none;
        @media screen and (max-width: 600px) {
          border-right: 0.5px solid #D3DCE6;
        }
      }
      
      &-value{
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #696969;
      }
      &-footer{
        font-size: 10px;
        line-height: 11px;
        color: #515151;
        margin-top: 5px;
        span{
          margin-left: 3px;
          margin-right: 3px;
        }
      }
    }
    &-title{
      font-size: 14px;
      line-height: 15px;
      text-align: center;
      color: #7CB342;
      padding-top: 11px;
      padding-bottom: 14px;
      border-bottom: 0.5px solid #D3DCE6;
      border-right: 0.5px solid #D3DCE6;
    }
    &-content{
      width:512px;
      display:flex;
      flex-wrap: wrap;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .desktop-layout{
      display:block;
      @media screen and (max-width: 600px) {
        display:none;
      }
    }
    .mobile-layout{
      display:none;
      @media screen and (max-width: 600px) {
        display:block;
      }
    }
  }
}
`;
const countryCode={
  UK: 'gb',
  US: 'us',
  GER: 'de',
  AU: 'au',
  FR: 'fr',
}

const CountryItem = (props) => {
  const {rate, arrow, country} = props;
  return <div className='table-item'>
        <div className='table-item-value'>{rate}%</div>
        <div className='table-item-footer'>
          {arrow === 'up' ? <FaArrowUp size={8}/> : <FaArrowDown size={8}/>}
          
          <span>({country})</span>
            <ReactCountryFlag 
                styleProps={{
                    width: '10px',
                    height: '8px',
                    borderRadius: '10px'
                }}
                code={countryCode[country]}
                svg
            />
        </div>
      </div>;
}

const ContinentItem = (props) => {
  const {rate, continent} = props;
  return <div className='table-item'>
              <div className='table-item-value'>{rate}%</div>
              <div className='table-item-footer'>
                <span>({continent})</span>
              </div>
            </div>;
}
function Table(props)
{
  let {topCountries, topContinents} = props;


  return(
    <TableStyle>
    <div className='table'>
      <div className='table-heading'>
        <div className='table-heading-value'>Around the World </div>

      </div>
      <div className='table-data'>
       <div className='table-section'>

        <div className='table-title'>
          Top Countries
        </div>
        <div className='desktop-layout'>

          <div className='table-content'>
          {
            topCountries.map((country, index)=>{
              return (<CountryItem key={index} {...country}/>)
            })
          }
          </div>
        </div>
        <div className='mobile-layout'>

          <div className='table-content'>
          {
            topCountries.map((country, index) => {
              if(index < 6)
                return (<CountryItem key={index} {...country} />)
              return null;
            })
          }
          </div>
        </div>

      </div>
      <div className='table-section'>
        <div className='table-title'>
          Top Continents
        </div>
        <div className='desktop-layout'>        
          <div className='table-content'>
          {
            topContinents.map((continent, index)=>{
              return (<ContinentItem  key={index} {...continent}/>)
            })
          }
          </div>
        </div>
        <div className='mobile-layout'>        
          <div className='table-content'>
          {
            topContinents.map((continent, index)=>{
              if(index < 6)
                return (<ContinentItem key={index} {...continent} />)
              return null;
            })
          }
          </div>
        </div>
      </div>
      </div>
     
    </div>

    </TableStyle>
  )
}
export default Table;