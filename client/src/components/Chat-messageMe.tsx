import React from 'react';
import { Message } from '../Models/Message';

const ChatMessageMe = (message: Message) => {
  return (
    <li className='clearfix'>
      <div className='message-data text-end'>
        <span className='message-data-time'>
          <strong className='d-block'>{message.username}</strong>
          <i>{message.created_at.toString()}</i>
        </span>
      </div>
      <div className='message other-message float-right'>{message.text}</div>
    </li>
  );
};

export default ChatMessageMe;
