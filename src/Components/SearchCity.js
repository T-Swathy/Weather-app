import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import device from './DeviceName.js';

const SearchBar = styled.form`
  top: ${({ showResult }) => (showResult ? '0%' : '30%')};
  position: relative;
  margin-left: 23vw;
  max-width: 500px;
  transition: 0.8s 0.5s;
 

`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
 
  font-size: 16px;
 
  color:'black';
  transition: 0.2s;
  border-radius: 20px;
  background-color: 	#F5F5F5;
 
  @media ${device.laptop} {
    padding: 10px 20px 15px 45px;
    border-radius: 30px;
  }
`;

const SearchIcon = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translate(-50%, -50%);
  height: 16px;
  width: 16px;
  font-size: 14px;
  color: #c5c5c5;
  @media ${device.laptop} {
    height: 18px;
    width: 18px;
    font-size: 18px;
  }
`;

const SearchCity = ({ submit, value, change, showResult, func }) => {
  return (
    <>
      <SearchBar showResult={showResult} onSubmit={submit}>
      <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
          
        </SearchIcon>
        <SearchInput type="text" value={value} placeholder="Enter city" onChange={change} />
        
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
          
        </SearchIcon>
        
      </SearchBar>
      
    </>
  );
};


export default SearchCity;
