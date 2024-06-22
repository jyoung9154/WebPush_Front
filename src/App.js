import React, { useState } from 'react';
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
      <h1>Web Push 예제</h1>
      <p> 알림 권한 상태 : {notificationPermission}</p>
      <button onClick={handleButtonClick}>
        알림 권한 요청하기 
      </button>
    </div>
  );
}

export default App;
