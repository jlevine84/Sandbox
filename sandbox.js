var config = {
    apiKey: "AIzaSyBU2XossO8Lhv9HzbBdbHmQp8VkScxkvUU",
    authDomain: "test-162e1.firebaseapp.com",
    databaseURL: "https://test-162e1.firebaseio.com",
    projectId: "test-162e1",
    storageBucket: "test-162e1.appspot.com",
    messagingSenderId: "599175453998"
};
firebase.initializeApp(config);
database = firebase.database();

// FirebaseUI config.
var uiConfig = {
signInSuccessUrl: 'https://jlevine84.github.io/Sandbox/test.html',
signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
],
// tosUrl and privacyPolicyUrl accept either url string or a callback
// function.
// Terms of service url/callback.
// tosUrl: '<your-tos-url>',
// Privacy policy url/callback.
// privacyPolicyUrl: function() {
//     window.location.assign('<your-privacy-policy-url>');
// }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var displayName = user.displayName;
        var providerData = user.providerData;
        var isAnonymous = user.isAnonymous;
        // User is signed in.
    } else {
        // No user is signed in.
    }
});

var name, email, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
}

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("Name: " + profile.displayName);
    console.log("Email: " + profile.email);
  });
}