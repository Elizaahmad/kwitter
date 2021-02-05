//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAE7y1p_Mk7LYUzsECuapXdqHiK2nGNKVs",
      authDomain: "my-test-project-9c2b2.firebaseapp.com",
      databaseURL: "https://my-test-project-9c2b2.firebaseio.com",
      projectId: "my-test-project-9c2b2",
      storageBucket: "my-test-project-9c2b2.appspot.com",
      messagingSenderId: "986659015468",
      appId: "1:986659015468:web:87a2ad6d78898135697a89"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}