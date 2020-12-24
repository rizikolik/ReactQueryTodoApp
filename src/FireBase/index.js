import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_CONFIG_apiKey}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_CONFIG_authDomain}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_CONFIG_databaseURL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_CONFIG_projectId}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_CONFIG_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_CONFIG_messagingSenderId}`,
  appId: `${process.env.REACT_APP_FIREBASE_CONFIG_appId}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_CONFIG_measurementId}`,
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const collectionRef = firestore.collection('todos');
export const addDocumentsToCollection = async data => {
  const collectionRef = firestore.collection('todos');
  const batch = firestore.batch();
  const docRef = collectionRef.doc();
  console.log(docRef);
  batch.set(docRef, data);
  console.log(batch);

  return await batch.commit();
};
export const getTodos = () => {
  return firestore
    .collection('todos')
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs.map(doc => {
        let data = doc.data();
        return {id: doc.id, name: data.name, completed: data.completed};
      });
    });
};
export const updateTodo = async data => {
  console.log(data.id, data);
  firestore
    .collection('todos')
    .doc(data.id)
    .update({completed: data.fields.completed});

  /*.then(querySnapshot => {
      return querySnapshot.docs.map(doc => {
        console.log(doc.data);
        return doc.data();
      });
    });*/
};
//const res = await db.collection('cities').doc('LA').set(data);
export const deleteTodo = () => {
  return firestore
    .collection('todos')
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs.map(doc => {
        return doc.data();
      });
    });
};
