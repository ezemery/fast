import React, {useEffect} from 'react';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";

import './style.scss';
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
          {arrow == 'up' ? <FaArrowUp size={8}/> : <FaArrowDown size={8}/>}
          
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
            topCountries.map((country, index)=>{
              if(index < 6)
                return (<CountryItem key={index} {...country}/>)
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
                return (<ContinentItem  key={index} {...continent}/>)
            })
          }
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}
export default Table;