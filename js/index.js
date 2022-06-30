const id = 1001;
const link = `SignInLogIn.html?q=${id}`;
document.getElementById('SignInLogInHyperLink').setAttribute('href', link);

const signInPage = () => {
    preloaderOn();
}


preloaderOn();