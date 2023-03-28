const firebaseConfig = {
    apiKey: "AIzaSyCSZHFazIkQbgf--5EcjtIadYu_bl1S6N0",
    authDomain: "kwitter-b8442.firebaseapp.com",
    projectId: "kwitter-b8442",
    storageBucket: "kwitter-b8442.appspot.com",
    messagingSenderId: "113522764159",
    appId: "1:113522764159:web:0adfd4ee36dab2e3aad24a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name );

    window.location = "kwitter_room.html";
}