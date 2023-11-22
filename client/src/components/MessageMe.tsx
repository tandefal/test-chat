import React from 'react';

const MessageMe = () => {
  return (
    <li className="clearfix">
      <div className="message-data text-end">
        <span className="message-data-time">Vincent Porter 10:10 AM, Today</span>
      </div>
      <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along?</div>
    </li>
  );
};

export default MessageMe;
