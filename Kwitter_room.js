var firebaseConfig = {
  apiKey: "AIzaSyDBb31Bq2OfylyaM51hdjlPXtIwr4jTUqE",
  authDomain: "kwitter-fbbe9.firebaseapp.com",
  databaseURL: "https://kwitter-fbbe9-default-rtdb.firebaseio.com",
  projectId: "kwitter-fbbe9",
  storageBucket: "kwitter-fbbe9.appspot.com",
  messagingSenderId: "645777369094",
  appId: "1:645777369094:web:e9c650b137ef05a354fb87"
};
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
