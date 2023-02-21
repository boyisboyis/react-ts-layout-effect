import * as React from 'react';
import './style.css';

import MessageListWithUseEffect from "./components/MessageListWithUseEffect";
import MessageListWithUseLayoutEffect from "./components/MessageListWithUseLayoutEffect";
import useMessages from "./hooks/useMessages";

export default function App() {
  const { messages, addMessage } = useMessages();
  return (
    <div>
     <div className="App">
      <button onClick={addMessage} className="btn">
        Add message
      </button>
      <div className="message-lists-container">
        <MessageListWithUseLayoutEffect messages={messages} />
        <MessageListWithUseEffect messages={messages} />
      </div>
    </div>
    </div>
  );
}
