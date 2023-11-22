import React from 'react';
import ChatMessageMe from './Chat-messageMe';
import ChatMessage from './Chat-message';
import { Message } from '../Models/Message';

const msg: Message = {
  username: 'test',
  active: false,
  created_at: new Date(),
  text: 'message',
};
export default function Chat() {
  return (
    <div className='chat'>
      <div className='chat-history'>
        <ul className='m-b-0'>
          <ChatMessageMe text={msg.text} active={msg.active} created_at={msg.created_at} username={msg.username} />
          <ChatMessage text={msg.text} active={msg.active} created_at={msg.created_at} username={msg.username} />
        </ul>
      </div>
      <div className='chat-message clearfix'>
        <div className='input-group mb-0'>
          <input type='text' className='form-control' placeholder='Enter text here...' />
          <button className='btn btn-secondary'>send</button>
        </div>
      </div>
    </div>
  );
}
