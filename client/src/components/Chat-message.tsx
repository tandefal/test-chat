import React from 'react';
import { Message } from '../Models/Message';

const ChatMessage = (message: Message) => {
  return (
    <li className='clearfix'>
      <div className='message-data'>
        <span className='message-data-time'>
          <strong className='d-block'>{message.username}</strong>
          <i>{message.created_at.toString()}</i>
        </span>
      </div>
      <div className='message my-message'>{message.text}</div>
    </li>
  );
};

export default ChatMessage;
