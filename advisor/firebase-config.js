// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {collection, getDocs} from 'firebase/firestore/lite';

//구글 계정

// const firebaseConfig = {
//   apiKey: 'AIzaSyCsqexYk1eSfvDypRe32D4BJWwd4YPnX9Y',
//   authDomain: 'db-advisor.firebaseapp.com',
//   projectId: 'db-advisor',
//   storageBucket: 'db-advisor.appspot.com',
//   messagingSenderId: '244528658904',
//   appId: '1:244528658904:web:f439d35a14c2def72e5aad',
//   measurementId: 'G-H8FMZ4JNNG',
// };

//ajou계정
const firebaseConfig = {
  apiKey: 'AIzaSyCImCIs_5TVoeaUXikwBKKqODQ8iSWlnSk',
  authDomain: 'db-advisior.firebaseapp.com',
  projectId: 'db-advisior',
  storageBucket: 'db-advisior.appspot.com',
  messagingSenderId: '859659070256',
  appId: '1:859659070256:web:387c9cf626922c4c7ef6f5',
  measurementId: '${config.measurementId}',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
