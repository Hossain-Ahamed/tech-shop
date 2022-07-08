// const fakeData = '{"title":"Apple iPhone 13 Pro Max","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg","img_url":"apple_iphone_13_pro_max-pictures-11089.php","quick_spec":[{"name":"Display size","value":"6.7\""},{"name":"Display resolution","value":"1284x2778 pixels"},{"name":"Camera pixels","value":"12MP\n      "},{"name":"Video pixels","value":"2160p"},{"name":"RAM size","value":"6GB RAM"},{"name":"Shipset","value":"Apple A15 Bionic"},{"name":"Battery size","value":"4352mAh"},{"name":"Battery type","value":"Li-Ion"}]}';
let returnedData;

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

// CORSSolve('https://cors-anywhere.herokuapp.com/http://gsmarena-api.herokuapp.com/device/apple_iphone_13_pro_max-11089');


