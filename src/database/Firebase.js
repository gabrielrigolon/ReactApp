import firebase from 'firebase'; 
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDCCBVnw0etkax2KtxYZU4JGnLQmOVNrxg",
    authDomain: "aula-e5ed4.firebaseapp.com",
    databaseURL: "https://aula-e5ed4.firebaseio.com",
    projectId: "aula-e5ed4",
    storageBucket: "aula-e5ed4.appspot.com",
    messagingSenderId: "947751119096",
    appId: "1:947751119096:web:0e46949d96b0183832330d",
    measurementId: "G-8KG8TGR2BH"
};
// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
//firebase.analytics();

export default firebase;