import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from './DeviceName.js';
import Forecasttime from './Forecast';
import ResultFadeIn from './ResultsFadeIn';
import BigLabel from './BigFont';
import MediumFont from './MediumFont';
import SmallLabel from './SmallFont';


const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

const Forecast = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray black;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-bottom: 20px;
  @media ${device.laptop} {
    order: 4;
  }
`;

const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    forecast,
  } = weather;

  const forecasts = forecast.map(item => (
    <Forecasttime
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={item.dt_txt.slice(11, 13) * 1}
    />
  ) 
  );

 return (
    <Results>
    
      <ForecastWrapper>
        <BigLabel weight="400">Forecast</BigLabel>
        <Forecast>{forecasts}</Forecast>
      </ForecastWrapper>
     
    </Results>
  );
};
export default Result;
