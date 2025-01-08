import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAlXesgUJ2uyognKAM6ZtvgxUSefOWcPyQ",
    authDomain: "prueba-163d0.firebaseapp.com",
    projectId: "prueba-163d0",
    storageBucket: "prueba-163d0.firebasestorage.app",
    messagingSenderId: "246584701043",
    appId: "1:246584701043:web:23754b25a50bb0b458ba06",
    measurementId: "G-MN5Z4NR6CS"
  };
  

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);