
//set link to the account
const id = 1001;
const link = `SignInLogIn.html?q=${id}`;
document.getElementById('SignInLogInHyperLink').setAttribute('href', link);

var url = "http://gsmarena-api.herokuapp.com/device/apple_iphone_13_pro_max-11089";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("accept", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();