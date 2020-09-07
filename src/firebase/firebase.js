import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshop) => {
//     expenses.push({
//       id: childSnapshop.key,
//       ...childSnapshop.val(),
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'First expense',
//   note: 'Minor expense',
//   amount: 5000,
//   createAt: 'now',
// })

// database.ref('notes').push({
//   title: 'COurse topics',
//   body: 'This is my note',
// });

// database.ref('notes').set(notes);
// database.ref().on('value', (snapshot) => {
//   const obj = snapshot.val();
//   console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// });
// database
//   .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Emmanuel Arkorful',
//     age: 23,
//     stressLevel: 5,
//     job: {
//       title: 'Software developer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Accra',
//       country: 'Ghana',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((e) => {
//     console.log('This failed. ', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Freelance and fullstack developer for Google',
//   'location/city': 'Kumasi',
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   })
//   .catch((e) => {
//     console.log(e);
//   });
