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



//Firebase ui config
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
        },
        uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: "https://jlevine84.github.io/Sandbox/test.html",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
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