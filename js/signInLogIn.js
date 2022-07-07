// get item from url 
var parseQueryString = function() {
  var str = window.location.search;
  var objURL = {};

  str.replace(
      new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
      function( $0, $1, $2, $3 ){
          objURL[ $1 ] = $3;
      }
  );
  return objURL;
};


const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });




    ////Hide and Show password Function of password field 
    const changeType = (passFieldID, showPassIconID) => {
      const passField = document.getElementById(passFieldID);
      if (passField.type === 'password') {
        passField.type = 'text';
        document.getElementById(showPassIconID).setAttribute('title', "Hide Password");
      } else {
        passField.type = 'password';
        document.getElementById(showPassIconID).setAttribute('title', "Show Password");
      }


    }



    //Hide and Show pass Event listener
    document.getElementById('showPass').addEventListener('click', function () {
      this.classList.toggle('fa-eye-slash');
      changeType('pass_field', 'showPass');
    });

    //hide and show pass event listener
    document.getElementById('showPass2').addEventListener('click', function () {
      this.classList.toggle('fa-eye-slash');
      changeType('pass_field2', 'showPass2');
    });


  const returnedValue = parseQueryString();
  console.log(returnedValue);