

const preloaderOFF = () => {
    document.getElementById('preloader').style.display = 'none'; //hide load screen
    document.getElementById('loader').style.display = 'none'; //hide load screen
}

const preloaderOn = () => {
    document.getElementById('preloader').style.display = 'block'; //SHOW load screen
    document.getElementById('loader').style.display = 'block'; //SHOW load screen
}

// const js=() =>{
//     preloaderOn();

//     setInterval(preloaderOFF,1000);
// }

