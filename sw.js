importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyD_TytbX1kd4SKQ5uHZfd5XVGwdw0gzUOE",
    authDomain: "feeling-hungry-102a9.firebaseapp.com",
    databaseURL: "https://feeling-hungry-102a9-default-rtdb.firebaseio.com",
    projectId: "feeling-hungry-102a9",
    storageBucket: "feeling-hungry-102a9.firebasestorage.app",
    messagingSenderId: "736201265500",
    appId: "1:736201265500:web:7b7064b314247c02ad7199"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ডে নোটিফিকেশন হ্যান্ডেল করার জন্য
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});