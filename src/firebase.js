// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  getDocFromCache,
  getDocs,
  collection,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAZ64NJDBIb2pLT_X9y5RxqzQUFN3hj7Y",
  authDomain: "expense-app-7f7ba.firebaseapp.com",
  projectId: "expense-app-7f7ba",
  storageBucket: "expense-app-7f7ba.appspot.com",
  messagingSenderId: "285375471464",
  appId: "1:285375471464:web:58f2c00c7fb7cd55ff80dd",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);

export const readCollection = async (collectionName) => {
  const documents = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
};

export const filterCollectionByKey = async (
  collectionName,
  fieldToCheck,
  fieldValue
) => {
  const documents = [];
  const q = query(
    collection(db, collectionName),
    where(fieldToCheck, "==", fieldValue)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
};

export const insertExpense = async (expenseId, expensesData) => {
  await setDoc(doc(db, "expenses", expenseId.toString()), {
    ...expensesData,
  });
};

export const signUp = (email, password) => {
   return new Promise((resolve, reject) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error)
      });
   })

};


export const getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
              resolve(user);
              // ...
            } else {

              resolve(null)
            }
          });
    })
}


export const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            resolve(user);
            // ...
          })
          .catch((error) => {
            reject(error)
          });
    })
}