/* eslint-disable react/prefer-stateless-function  */
import React from 'react';
import styled from 'styled-components';

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


class Message extends React.Component {
    state = {
      comments: [],
    };


    componentDidMount() {
      fetch('http://localhost:8080/comment')
        .then(response => response.json())
        .then(data => this.setState({ comments: data }));
    }


    render() {
      const chatMessage = this.state.comments.map((message) =>
      <div key={message.id}>
        <Chatborder className="lead font-weight-bold p-2 mt-3">
          <Chatauthor className="text-center">{message.author}</Chatauthor>{message.body}...
       </Chatborder>
      </div>
    );

      return (
        <header>
          {chatMessage}
        </header>
      );
    }
}

export default Message;
