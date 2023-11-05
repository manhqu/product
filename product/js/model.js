const model = {};

model.currentUser = undefined;



model.register = async (data) => {


  try {
    await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);



    firebase.auth().currentUser.updateProfile({
      displayName: data.firstName + " " + data.lastName
    });

    firebase.auth().currentUser.sendEmailVerification();
    alert("Email has been register, please check your email for verification")
    view.setActiveScreen("loginScreen");


  }

  catch (err) {
    console.log("err: ", err);
    alert(err.message)
  }

}

model.login = async (dataLogin) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);

    if (response.user.emailVerified == false) {
      alert("Please Verified your email");
    }
    else {
      model.currentUser = {
        displayName: response.user.displayName,
        email: response.user.email
      }

  
      view.setActiveScreen("homeScreen");
    }

  }
  catch (err) {
    console.log(err);
    if (err.code == `auth/user-not-found` || err.code == "auth/invalid-email") {
      document.getElementById("emai-error").innerText = `${err.message}`;

    }

    else if (err.code = "auth/wrong-password") {
      document.getElementById("password-error").innerText = `${err.message}`;
    }
  }
}


