/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Navbar = () => (
  <Router>
    <div>
      <Bar className="navbar navbar-light  justify-content-center">
        <Image>
          <Pills className="nav nav-pills">
            <li className="nav-item">
              <Abutton className="font-weight-bold rounded-0">
                <Linkcolor to="/home" className="normal" activeClassName="active" >Home</Linkcolor>
              </Abutton>
            </li>
            <li className="nav-item">
              <Abutton className="active font-weight-bold rounded-0">
                <Linkcolor to="/about" className="normal" activeClassName="active" >About</Linkcolor>
              </Abutton>
            </li>
          </Pills>
        </Image>
      </Bar>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Navbar;

const Bar = styled.nav`
     background: #f5da55; !important;
    //  padding: 0rem !important;
     max-height: 49px;
`;

const Image = styled.div`
    height: 43.8px;
    padding-top: 5px;
`;

const Pills = styled.ul`
  display: inline-flex !important;
  margin-left: 10px;
`;

const Abutton = styled.div`
    background #323330 !important;
    color: #f5da55 !important;
    a:hover {
        color: #0056b3;
        text-decoration: none;
    }
 `;
const Linkcolor = styled(NavLink)`
    padding: 1rem !important;
    padding-bottom: 1.19rem !important;
    max-height: 40px !important;
    text-decoration: none;
 `;
