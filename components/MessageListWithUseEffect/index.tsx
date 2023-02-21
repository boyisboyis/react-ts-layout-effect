import * as React from 'react';
import { useEffect, useRef } from 'react';

import MessageList from '../MessageList';

export default function MessageListWithUseEffect({ messages }) {
  const listRef = useRef();

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <MessageList messages={messages} ref={listRef} title="useEffect React 17" />
  );
}
