 import Firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 const config={ 
    apiKey: "AIzaSyCKIV37JyLQxdsvKXOnbc3dbbQWw8G94mc",
    authDomain: "netflix-clone-d335d.firebaseapp.com",
    projectId: "netflix-clone-d335d",
    storageBucket: "netflix-clone-d335d.appspot.com",
    messagingSenderId: "461988122117",
    appId: "1:461988122117:web:34c25d98899de5a20dd66c"
 };


 const firebase = Firebase.initializeApp(config);



 export {firebase};