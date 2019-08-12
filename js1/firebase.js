// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOKNirvh6IXcP9RuzyKMAWUPr2rTlykww",
  authDomain: "alazea-a1b3d.firebaseapp.com",
  databaseURL: "https://alazea-a1b3d.firebaseio.com",
  projectId: "alazea-a1b3d",
  storageBucket: "alazea-a1b3d.appspot.com",
  messagingSenderId: "912674431685"
};
firebase.initializeApp(config);

// referance message collection
var messagesRef = firebase.database().ref("messages");

// event listen for form submit

document.querySelector("#contactForm").addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();

  // get values
  var name = getValue("contactName");
  var email = getValue("contactEmail");
  var subject = getValue("contactSubject");
  var message = getValue("contactMessage");

  // save message
  saveMessage(name, email, subject, message);

  // reset
  document.querySelector("#contactForm").reset();
}

// function to get values

function getValue(id) {
  return document.getElementById(id).value;
}

// save messages to database
function saveMessage(name, email, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
  window.alert("Data sent.");
}

// second form

// referance message collection
var messagesRefs = firebase.database().ref("requirement");

// event listen for form submit

document.querySelector("#regForm").addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();

  // get values
  var name = getValue("contactName");
  var email = getValue("regEmail");
  var Medicine = getValue("regMed");
  var address = getValue("redAddress");

  // save message
  saveMessage(name, email, Medicine, address);

  // reset
  document.querySelector("#regForm").reset();
}

// function to get values

function getValue(id) {
  return document.getElementById(id).value;
}

// save messages to database
function saveMessage(name, email, Medicine, address) {
  var newMessageRef = messagesRefs.push();
  newMessageRef.set({
    name: name,
    email: email,
    Medicine: Medicine,
    address: address
  });
  window.alert("Data sent.");
}
