import React from 'react';
import styled from 'styled-components';
import mainLogo from '../man-profile.png';

const Infoback = styled.div`
    background: #323330;
    height: 1000vh;
`;

const Gridbox = styled.div`
    // width: 100%;
    // margin: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
    grid-auto-flow: dense;
`;
const Gridimage = styled.img`
    grid-column-end: span 6;
    margin-top: 3rem;
    
    @media (max-width: 768px) {
        grid-column-end: span 12;
      }
      
`;
const Gridtext = styled.div`
    grid-column-end: span 6;
    margin-top: 3rem;
    color: #f5da55 !important;
    
    @media (max-width: 768px) {
        grid-column-end: span 12;
      }
`;


const Information = () => (
  <Infoback>
    <Gridbox>
      <Gridimage src={mainLogo} className="w-100" alt="" />
      <Gridtext>
        <h1 className="display-3 font-weight-bold">About me</h1>
        <p className="display-3 font-weight-regular text-white">Guled Abdikarim Ali</p>
        <h2 className="display-1 font-weight-light">Dev</h2>
      </Gridtext>
    </Gridbox>
  </Infoback>
);

export default Information;
