

const preloaderOFF = () => {
    document.getElementById('preloader').style.display = 'none'; //hide load screen
    document.getElementById('loader').style.display = 'none'; //hide load screen
}

const preloaderOn = () => {
    document.getElementById('preloader').style.display = 'block'; //SHOW load screen
    document.getElementById('loader').style.display = 'block'; //SHOW load screen
}

//Press enter to search
window.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
       
        // console.log('j');
        searchPhone();
       
    }
});



 const searchPhone = ()=>{
    console.log('get search command');
  
 }
