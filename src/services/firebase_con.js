import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2nuvIH-rdfyecQdDx7F4_I9QBQXK9K2w",
  authDomain: "luttringer-wine-shop-dos.firebaseapp.com",
  projectId: "luttringer-wine-shop-dos",
  storageBucket: "luttringer-wine-shop-dos.appspot.com",
  messagingSenderId: "367727223694",
  appId: "1:367727223694:web:f5daeaafe52a2c0ca0badf"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
export const db = getFirestore(app);
