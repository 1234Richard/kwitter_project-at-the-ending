// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0qFgsog_OAZLKr8loDifsoXZW9N_BZRs",
    authDomain: "kwitter-342ad.firebaseapp.com",
    databaseURL: "https://kwitter-342ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-342ad",
    storageBucket: "kwitter-342ad.appspot.com",
    messagingSenderId: "94487825700",
    appId: "1:94487825700:web:adbaa196600d3cfc8e77b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem("user name");
    localStorage.removeItem("room name");
    window.location = "index.html"
}


document.getElementById("user_name").innerHTML = "Welcome " + localStorage.getItem("user name")

function addroom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    window.location = "kwitter_page.html";
    
}