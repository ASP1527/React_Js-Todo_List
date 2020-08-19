import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBg8JxOjiudd6AJ9txUeDe9XOlGKu9C8Bc",
  authDomain: "todo-list-app-7929a.firebaseapp.com",
  databaseURL: "https://todo-list-app-7929a.firebaseio.com",
  projectId: "todo-list-app-7929a",
  storageBucket: "todo-list-app-7929a.appspot.com",
  messagingSenderId: "23894226236",
  appId: "1:23894226236:web:49613e6d9388228bc35a39",
  measurementId: "G-JQ0JE18YQD",
});

const db = firebaseApp.firestore();

export { db };
