import React from 'react';
import MessageMe from './MessageMe';
import Message from './Message';

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-history">
        <ul className="m-b-0">
          <MessageMe />
          <Message />
          <MessageMe />
        </ul>
      </div>
      <div className="chat-message clearfix">
        <div className="input-group mb-0">
          <input type="text" className="form-control" placeholder="Enter text here..." />
          <button className="btn btn-secondary">send</button>
        </div>
      </div>
    </div>
  );
}
