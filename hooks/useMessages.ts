import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MOCK_MESSAGES = Array.from({ length: 50 }, (_, i) => ({
  id: uuidv4(),
  value: `Message ${i}`,
}));

export default function useMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setTimeout(() => setMessages(MOCK_MESSAGES), 1000);
  }, []);

  const addMessage = () => {
    setMessages((messages) => [
      ...messages,
      {
        id: uuidv4(),
        value: `Message ${messages.length}
        - Officia occaecat amet et dolor eu ad cillum esse veniam tempor anim Lorem. Mollit aute mollit nostrud ea veniam est do veniam velit laboris labore deserunt dolore amet. Do culpa laborum consequat irure tempor laborum enim mollit veniam mollit quis veniam nostrud.`,
      },
    ]);
  };

  return { messages, addMessage };
}
