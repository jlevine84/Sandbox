$(document).ready(function() { 
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
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: "https://jlevine84.github.io/Sandbox/",
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ]
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
    var user = firebase.auth().currentUser;
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           console.log("User Signed In")
            // User is signed in.
            $("#doodad").text("You are signed in!")
        } else {
            // No user is signed in.
            $("#doodad").text("Derp!")
        }
    });

//End document ready function
});