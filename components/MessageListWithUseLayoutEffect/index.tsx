import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';

import MessageList from '../MessageList';

export default function MessageListWithUseLayoutEffect({ messages }) {
  const listRef = useRef();

  useLayoutEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <MessageList
      messages={messages}
      ref={listRef}
      title="useLayoutEffect React 17"
    />
  );
}
