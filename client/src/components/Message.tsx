import React from 'react';

const Message = () => {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-time">Vincent Porter 10:12 AM, Today</span>
      </div>
      <div className="message my-message">Are we meeting today?</div>
    </li>
  );
};

export default Message;
