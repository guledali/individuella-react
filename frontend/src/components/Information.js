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

const Gridinfo = styled.div`
    grid-column-start: 4;
    grid-column-end: span 6;
    border 3px solid #f5da55 !important;
    height: 200px;
    padding: 3rem;
    border-radius: 5px;
    margin-top: 2rem;

        
    @media (max-width: 768px) {
        grid-column-start: 2;
        grid-column-end: span 10;
      }
`;
const Gridinfotext = styled.h3`
    @media (max-width: 865px) {
        font-size: 1.55rem;
    }
    @media (max-width: 545px) {
        font-size: 25px;
      }
    @media (max-width: 500px) {
        font-size: 20px;
      }
`;
const Gridinfospan = styled.span`
      color: #f5da55;
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
      <Gridinfo>
        <Gridinfotext className="text-white font-weight-regular">Hi I'm a <Gridinfospan>Javascript</Gridinfospan> and css developer primarly working in react but also enjoys php development</Gridinfotext>
      </Gridinfo>
    </Gridbox>
  </Infoback>
);

export default Information;
