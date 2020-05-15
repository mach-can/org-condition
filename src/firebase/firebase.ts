import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyANb0w7rX-pOto7WUeYl8BFrZe_C5-I0yo",
    authDomain: "org-condition.firebaseapp.com",
    databaseURL: "https://org-condition.firebaseio.com",
    projectId: "org-condition",
    storageBucket: "org-condition.appspot.com",
    messagingSenderId: "555075947881",
}
// "***"の部分にコピーしたコードの内容をペーストする。

firebase.initializeApp(config);

export default firebase