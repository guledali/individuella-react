/* eslint-disable react/prefer-stateless-function  */
/* eslint-disable Unexpected console statement. (no-console) */
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
const Chatauthor = styled.h5`
    display: block;
    margin: auto;
`;

const Chatborder = styled.span`
    display: block;
    margin: auto;
    border: 3px solid #323330 !important;
    border-radius: 5px;
    width: 25%;
`;
// const Chatarea = styled.textarea`
//     display: block;
//     margin: auto;
//     width: 25%;
//     height: 100px;
//     margin-top: 25px;
//     background: #f5da55;
//     border: 3px solid #323330 !important;
//     border-radius: 5px;
//     outline:none;
// `;
const Chatbutton = styled.button`
    display: block !important;
    margin: auto;
    width: 25%;
    margin-top: 1.5rem;
    color: #f5da55 !important;
    background: #323330 !important;
    border-color: #323330 !important;
    outline: none;
`;

class About extends React.Component {
    state = {
      author: '',
      body: '',
    };
myTextarea = React.createRef();
myInput = React.createRef();
fetching = () => {
  console.log(JSON.stringify({ author: this.state.author, body: this.state.body }));
  fetch(
    'http://localhost:8080/comment',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ author: this.state.author, body: this.state.body }),
    },
  );
}

 handleSubmit = async (e) => {
   //   console.log(`${this.myInput.current.value} ${this.myTextarea.current.value}`);
   e.preventDefault();
   //
   await this.setState({
     author: this.myInput.current.value,
     body: this.myTextarea.current.value,
   });
   this.fetching();
 }


 render() {
   return (
     <React.Fragment>
       <Backgroundhome>
         <Titlehome className="text-center display-1 font-weight-lighter">Guestbook</Titlehome>
         <Iconhome icon={faArrowDown} />
       </Backgroundhome>
       <Chatbox>
         <Chatborder className="lead font-weight-bold p-2 mt-3">
           <Chatauthor className="text-center">Michael</Chatauthor>hello...
         </Chatborder>
         <Chatborder className="lead font-weight-bold p-2 mt-3">hello...</Chatborder>
         <Chatborder className="lead font-weight-bold p-2 mt-3">hello...</Chatborder>
         <form onSubmit={this.handleSubmit}>
           <input name="author" type="text" ref={this.myInput} className="input" placeholder="Name" />
           <textarea name="body" className="textarea" rows="3"ref={this.myTextarea} placeholder="Comment" />
           <Chatbutton type="submit" className="btn btn-primary">SUBMIT</Chatbutton>
         </form>
       </Chatbox>
     </React.Fragment>
   );
 }
}

export default About;
