
//set link to the account
const id = 1001;
const link = `SignInLogIn.html?q=${id}`;
document.getElementById('SignInLogInHyperLink').setAttribute('href', link);

function CORSSolve(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status ==200){
      return xhttp.responseText;
    }
  };
  //https://cors-anywhere.herokuapp.com/corsdemo
  xhttp.open("GET",url,true);
  xhttp.send()
}



//load the brand name

const PhoneBrandNameContainer = document.getElementById('PhoneBrandNameContainer');

const loadPhoneBrandCase = () =>{
  PhoneBrandNameContainer.textContent = '';
  const url= `https://cors-anywhere.herokuapp.com/http://gsmarena-api.herokuapp.com/brands`
  const data = CORSSolve(url);
  console.log(data);


}
loadPhoneBrandCase();