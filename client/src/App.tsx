import React from 'react';
import People from './components/People';
import Chat from './components/Chat';

function App() {
  return (
    <div className="container">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card chat-app">
            <People />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
