const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });




    ////Hide and Show Function
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
    })