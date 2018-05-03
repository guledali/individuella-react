/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';


const Navbar = () => (
  <Router>
    <React.Fragment>
      <Pills className="nav nav-pills">
        <li className="nav-item">
          <Abutton className="font-weight-bold rounded-0">
            <Linkcolor to="/home" className="normal" activeClassName="active" >Home</Linkcolor>
          </Abutton>
        </li>
        <Separtion />
        <li className="nav-item">
          <Abutton className="font-weight-bold rounded-0">
            <Linkcolor to="/about" className="normal" activeClassName="active" >About</Linkcolor>
          </Abutton>
        </li>
      </Pills>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </React.Fragment>
  </Router>
);

export default Navbar;

const Pills = styled.ul`
  // display: inline-flex !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f5da55 !important;
  // height: 37px;
  padding: 4px;
`;

const Abutton = styled.div`
    a:hover {
        color: #0056b3;
        text-decoration: none;
    }
 `;
const Linkcolor = styled(NavLink)`
    font-size: 25px;
    text-decoration: none;
    //  padding-top: 3px;
    //  padding-bottom: 1.4px;
     padding: 6px;
 `;
const Separtion = styled.span`
      margin-left: 1%;
 `;
