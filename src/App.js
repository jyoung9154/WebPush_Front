// App.js
import React, { useState } from 'react';
// import "./firebase-messaging-sw.js";
import { requestPermission } from './firebase-messaging-sw.js';

function App() {
  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  const handleButtonClick = () => {
    requestPermission().then((permission) => {
      setNotificationPermission(permission);
    });
  };

  return (
    <div>
      <h1>Notification Example</h1>
      <p>Notification permission status: {notificationPermission}</p>
      <button onClick={handleButtonClick}>
        Allow Notifications
      </button>
    </div>
  );
}

export default App;
