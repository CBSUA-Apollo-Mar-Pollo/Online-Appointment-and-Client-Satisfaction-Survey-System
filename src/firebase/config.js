import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJeoAflccxPmMb0UvUnLf5pMZ18_zjLnQ",
    authDomain: "oacsss-authentication.firebaseapp.com",
    projectId: "oacsss-authentication",
    storageBucket: "oacsss-authentication.appspot.com",
    messagingSenderId: "44180583468",
    appId: "1:44180583468:web:f39856b090e1c6ef6b8d89"
};

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }