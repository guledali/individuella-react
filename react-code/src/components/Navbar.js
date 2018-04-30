/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Navbar = props => (
  <Router>
    <div>
      <Bar className="navbar navbar-light">
        <Image>
          <img src={props.Image} alt="hello" />
          <Pills className="nav nav-pills">
            <li className="nav-item">
              <Abutton className="nav-link active font-weight-bold rounded-0">
                <Linkcolor to="/about">About</Linkcolor>
              </Abutton>
            </li>
          </Pills>
        </Image>
      </Bar>
      <Route path="/about" component={About} />
    </div>
  </Router>
);

Navbar.propTypes = {
  Image: PropTypes.string.isRequired,
};

export default Navbar;

const Bar = styled.nav`
     background: #f5da55; !important;
    padding: 0rem !important;
`;

const Image = styled.div`
  img {
   height: 50px;
   width: 50px;
   margin-left: 15px !important;
  }
`;

const Pills = styled.ul`
  display: inline-flex !important;
  margin-left: 10px;
`;

const Abutton = styled.div`
    background #323330 !important;
    color: #f5da55 !important;
    padding: 1rem !important;
    a:hover {
        color: #0056b3;
        text-decoration: none;
    }
 `;
const Linkcolor = styled(Link)`
    background #323330 !important;
    color: #f5da55 !important;
    padding: 1rem !important;
    text-decoration: none;
 `;
