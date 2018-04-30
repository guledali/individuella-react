import React from 'react';
import styled from 'styled-components'


class Navbar extends React.Component {

    render() {
        return (
            <Bar className="navbar navbar-light">
                <Image>
                    <img src={this.props.Image} alt="hello" />
                </Image>
            </Bar>

        );
    }
}

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
