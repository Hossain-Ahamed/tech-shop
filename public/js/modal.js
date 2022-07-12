
let returnedData;
let taka;

function getMoney(text) {
  let pattern = /\s\$ [0-9]*,([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g ;
  let result = text.match(pattern);
  console.log('dollar' ,result);
  if (result === null) {
      pattern = /\s\Rp [0-9]*,([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?,([0-9]*)?/g;
      result = text.match('rp',pattern); 
      console.log(result);   
      return (parseFloat(result[0].split('Rp')[1].trim().split(',').join('')) * 1.17);     
  } 
  else {    
    console.log(parseFloat(result[0].split('$')[1].trim().split(',').join('')));
      return (parseFloat(result[0].split('$')[1].trim().split(',').join('')) *93);
  }
}
const loadMoney = ()=>{
  html = ejs.render('<%= people %>', {people: 'hello'});
document.getElementById('priceOfPhone').innerHTML = html;
console.log("gotcha")
}


const loadQuickSpec = () => {

  const ul = document.getElementById('modal-card-ul');
  let string = '';
  for (const index of returnedData.quick_spec) {
    let i = 1;
    for (const objects in index) {
      string += index[objects];
      if (Object.keys(index).length === i) {
        i = 1;
      } else {
        string += " : ";

      }
      i++;
    }
    string += '<br>';
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = string;
    ul.appendChild(li);
    string ='';
    
  }
  document.getElementById('staticBackdropLabel').style.display =  'none';
  loadMoney();

}




// modal set up for the clicked phone 
const setModal = nameOfImage => {
  document.getElementById('modal-card').innerHTML = `
     <div class="row g-0">
     <div class="col-md-6 d-flex align-item-center ">
       <img src="${nameOfImage}" class=" rounded-start" alt="...">
     </div>
     <div class="col-md-6">
       <div class="card-body">
         <h5 class="card-title">${returnedData.title}</h5>
         <ul class="list-group list-group-flush" id="modal-card-ul">
              
         </ul>
         
       </div>
     </div>
   </div>
   
  `;
  loadQuickSpec();
  
}



// empty the modal data 
const modalEmpty = () => {
  document.getElementById('modal-card').textContent = '';
}


/*_____________________START_____________________*/
/*________when user clicked the eye Icon it will start executing________*/
function CORSSolve(url) {
  document.getElementById('staticBackdropLabel').style.display =  'block';
  document.getElementById('modal-card').textContent = '';
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      returnedData = JSON.parse(xhttp.responseText);
      if (returnedData) {
        setModal(returnedData.img);
        

      } else {
        showErrorMsg('No phone By this Name');
      }

    }
  };
  let modalUrl = `https://cors-anywhere.herokuapp.com/https://mobilephonedatafetch.herokuapp.com/device/`+url;
  //https://cors-anywhere.herokuapp.com/corsdemo
  xhttp.open("GET", modalUrl, true);
  xhttp.send()
}



