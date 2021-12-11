// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {collection, getDocs} from 'firebase/firestore/lite';

//구글 계정
const firebaseConfig = {
  apiKey: 'AIzaSyC2EtS3CeskZ1X6qtfyOfQw3bZidWf0QRw',
  authDomain: 'advisor-c6e22.firebaseapp.com',
  projectId: 'advisor-c6e22',
  storageBucket: 'advisor-c6e22.appspot.com',
  messagingSenderId: '881063767920',
  appId: '1:881063767920:web:e974ef27f1be859e2469b5',
  measurementId: '${config.measurementId}',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
