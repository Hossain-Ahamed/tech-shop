
let returnedData;
let taka;

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

}

const getBDT = ()=>{
  stringOfPrice = returnedData.spec_detail[12].specs[4].value;
  let dollarPatter


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
       <p> Price : ${}</p>
       <div class="d-grid gap-2 col-6 mx-auto">
               <button style="cursor: pointer;" class="btn btn-primary" type="button" onclick="cartAdd('${returnedData.title}')">Add to Cart</button>
          </div>
        
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
  let modalUrl = `https://cors-anywhere.herokuapp.com/http://gsmarena-api.herokuapp.com/device/`+url;
  //https://cors-anywhere.herokuapp.com/corsdemo
  xhttp.open("GET", modalUrl, true);
  xhttp.send()
}



