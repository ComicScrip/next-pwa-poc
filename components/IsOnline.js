import { useState, useEffect } from 'react';

export const IsOnline = () => {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    setInterval(() => setConnected(window.navigator.onLine), 500);
  }, []);

  return <>{!connected && 'No connection found, working offline'}</>;
};
