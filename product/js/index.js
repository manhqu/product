
const init = () => {
  console.log("Windows Loaded");

  const firebaseConfig = {
    apiKey: "AIzaSyD8atydwtnjqtTai88baRXDQjHbmQ-HFww",
    authDomain: "nps-jsi15-mq.firebaseapp.com",
    projectId: "nps-jsi15-mq",
    storageBucket: "nps-jsi15-mq.appspot.com",
    messagingSenderId: "544603209776",
    appId: "1:544603209776:web:184ae58ecabcfce6cb2df5",
    measurementId: "G-98ET6N7T1J"
  };
  firebase.initializeApp(firebaseConfig);

  // let app = initializeApp(firebaseConfig);
  // console.log(app().name);
  view.setActiveScreen("registerScreen");

}

window.onload = init;