import React, { useEffect, useState } from 'react';
import { useBrowser } from './hooks/browser';

function App() {
  const [message, setMessage] = useState('');
  const { isIncognito } = useBrowser();

  useEffect(() => {
    isIncognito()
      .then(() => setMessage('Incognito is ON'))
      .catch(() => setMessage('Incognito is OFF'));
  }, [isIncognito]);
  return <p>{message}</p>;
}

export default App;
