/* eslint-disable react/prefer-stateless-function  */
import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown';

const Backgroundhome = styled.div`
    background: #323330;
    height: 30vh;
`;

const Titlehome = styled.div`
    color: #f5da55;
`;
const Iconhome = styled(FontAwesomeIcon)`
    display: block;
    margin: auto;
    margin-top: 2rem;
    color: #fff;
    font-size: 60px;
`;

const Chatbox = styled.div`
    background: #f5da55;
    height: 80vh;
    padding-top: 5rem;
`;

const Chatborder = styled.p`
    display: block;
    margin: auto;
    border: 3px solid #323330 !important;
    border-radius: 5px;
    width: 25%;
`;

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Backgroundhome>
          <Titlehome className="text-center display-1 font-weight-lighter">Guestbook</Titlehome>
          <Iconhome icon={faArrowDown} />
        </Backgroundhome>
        <Chatbox>
          <Chatborder className="lead font-weight-bold p-2 mt-3">hello</Chatborder>
          <Chatborder className="lead font-weight-bold p-2 mt-3">hello</Chatborder>
          <Chatborder className="lead font-weight-bold p-2 mt-3">hello</Chatborder>
        </Chatbox>
      </React.Fragment>
    );
  }
}

export default About;
