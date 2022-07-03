
//set link to the account
const id = 1001;
const link = `SignInLogIn.html?q=${id}`;
document.getElementById('SignInLogInHyperLink').setAttribute('href', link);

const signInPage = () => {
    preloaderOn();
}

//on it
preloaderOn();
