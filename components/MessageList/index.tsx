import * as React from 'react';

import './index.css';

const MessageList = React.forwardRef(({ messages, title }, ref) => {
  return (
    <div className="message-list-container">
      <h2>{title}</h2>
      <ul ref={ref} className="message-list">
        <div className="message-list-content">
          {messages.map((message) => (
            <li key={message.id} className="message-list-item">
              {message.value}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
});

export default MessageList;
