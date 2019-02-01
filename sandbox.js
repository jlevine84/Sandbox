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

    
    //Checks online/offline status and displays the UI accordingly
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           console.log("User Signed In")
            // User is signed in.
            //Change Login UI to sign out
            var user = firebase.auth().currentUser;
            $("#doodad").text("Welcome " + user.displayName + ". You are signed by: " + user.PROVIDER_ID)
            //Client's data goes here.

            
        } else {
            // No user is signed in.
            $("#doodad").text("Derp!")
            //Display public data when no user is signed in or signs out.
            

        }
    });

    //sign up function
    $("#sign-up").on("click", function(event) {
        event.preventDefault();
        var email = $("#EMSUP").val().trim();
        var password = $("PWSUP").val().trim();
        firebase.auth().creatUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            alert("Signup unsuccesful. Error Code: " + error)
        });    
    });

    //sign in function
    $("#sign-in").on("click", function(event) {
        event.preventDefault();
        var email = $("#EMSIN").val().trim();
        var password = $("#PWSIN").val().trim();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function () {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        }).catch(function(error) {
            alert("Sign-in unsuccesful. Error Code: " + error)
        });
    });

    //signout function
    $("#signout").on("click", function() {
        firebase.auth().signOut();
    })

//End document ready function
});