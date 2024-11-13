import { initializeApp } from"https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"
import { getAuth,createuserwithEmailandPassword,ordernowwithEmailandPassword } from"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"


const firebaseConfig = {
 apiKey: "AIzaSyCSM2udBMCD0VcB79u1k0NHCLYzqtE-pVg",
 authDomain: "orderform-18f4d.firebaseapp.com",
 projectId: "orderform-18f4d",
 storageBucket: "orderform-18f4d.firebasestorage.app",
 messagingSenderId: "1066214780599",
 appId: "1:1066214780599:web:b7e4786659cf3c522a6732",
 measurementId: "G-DM1ZBZT6YN"
};

firebase. initializeApp(firebaseConfig);


 
 
 var  ordernow=  () => {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    

          firebase.auth().createuserwithEmailandPassword(email.value,password.value)
          .then ((result) => {
                 console.log(result);

          })
          .catch(function  (error){
           //handle errror here
            var errorCode = error .code;
            var  errorMsg = error .msg;
             console.log(errorMsg)
          }); 
          
}