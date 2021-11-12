
// Get user info on sign in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
  // display section when logged in
  var userSection = document.getElementById("signed-in-display");
  userSection.hidden = false;
  
  var userId = document.createElement("p");
  userId.innerHTML = profile.getId();
  
  var userName = document.createElement("p");
  userName.innerHTML = profile.getName();
  
  var userEmail = document.createElement("p");
  userEmail.innerHTML = profile.getEmail();
  
  var userImage = document.createElement("img");
  userImage.src = profile.getImageUrl();

  // display order: userImage, userEmail, userName, userId
  userSection.prepend(userId);
  userSection.prepend(userName);
  userSection.prepend(userEmail);
  userSection.prepend(userImage);

}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });

  // hide section when signed out
  var userSection = document.getElementById("signed-in-display");
  for(let i = 0; i < 4; i++){
    userSection.removeChild(userSection.firstChild);
  }
  userSection.hidden = true;
}