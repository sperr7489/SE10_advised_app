// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCsqexYk1eSfvDypRe32D4BJWwd4YPnX9Y',
  authDomain: 'db-advisor.firebaseapp.com',
  projectId: 'db-advisor',
  storageBucket: 'db-advisor.appspot.com',
  messagingSenderId: '244528658904',
  appId: '1:244528658904:web:f439d35a14c2def72e5aad',
  measurementId: 'G-H8FMZ4JNNG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
