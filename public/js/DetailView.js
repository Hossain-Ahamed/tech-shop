
let returnedData;


function getMoney(text) {
  let pattern = /\s\$ [0-9]*,([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g ;
  let result = text.match(pattern);
  if (result === null) {
      pattern = /\s\Rp [0-9]*,([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?,([0-9]*)?/g;
      result = text.match(pattern);    
      return (parseFloat(result[0].split('Rp')[1].trim().split(',').join(''))* 1.17);    
  } 
  else {  
      return (parseFloat(result[0].split('$')[1].trim().split(',').join(''))*93);
  }
}

// get item from url 
var parseQueryString = function () {
    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            objURL[$1] = $3;
        }
    );
    return objURL;
};



//error and messaage while load or error
const showErrorMsg = msg => {
    const PhoneDetailViewContainer = document.getElementById('phone-name');

    PhoneDetailViewContainer.innerHTML = `
      ${msg}
    ` ;
}





// 5
const loadQuickSpec = () => {

    const ul = document.getElementById('detail-view-ul');
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
        string = '';

    }
   

}

const setPage = () => {
    
    const container = document.getElementById('phone-detail-view-container');
    container.innerHTML = `
    <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
    <img src="${returnedData.img}"
      class="img-fluid justify-content-center" id="phone-image" alt="">
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
      <div class="card-body">
          <ul class="list-group list-group-flush" id="detail-view-ul"></ul>
          <p>Price : <span id="priceOfPhone">1000</span> BDT</p>
          <div class="d-grid gap-2 col-6 mx-auto">
                <button style="cursor: pointer;" class="btn btn-primary" type="button" onclick="cartAdd('${returnedData.title}')">Add to Cart</button>
           </div>
       
      </div>
    </div>
  </div>
  <div class="col-12 col-md-12 col-lg-4  row row-cols-2 row-cols-sm-3 row-cols-lg-1 justify-content-center">
    <div class="col">
      <div class="card text-center my-1 p-0 mx-1 ">
        <div class="card-body row m-0 p-1">
          <div class="col-12 col-md-2 d-flex justify-content-center align-items-center m-0">
            <i class="fa-solid fa-shield fw-bold fs-3"></i>
          </div>
          <div class="col-12 col-md-10 text-start row m-0">
            <div class="col-12  fs-md-5 my-0 text-nowrap ">
              Guarantee
            </div>
            <div class="col-12 my-0 text-center text-md-start" style="font-size: .75rem;">
              Quality Checked
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center my-1 p-0 mx-1 ">
        <div class="card-body row m-0 p-1">
          <div class="col-12 col-md-2 d-flex justify-content-center align-items-center m-0">
            <i class="fa-solid fa-truck fw-bold fs-3"></i>
          </div>
          <div class="col-12 col-md-10  text-start row m-0">
            <div class="col-12  fs-md-5 my-0  text-nowrap text-center text-md-start">
              Free Shipping
            </div>
            <div class="col-12 my-0 text-center text-md-start" style="font-size: .75rem;">
              Free On All products
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center my-1 p-0 mx-1">
        <div class="card-body row m-0 p-1">
          <div class="col-12 col-md-2 d-flex justify-content-center align-items-center m-0">
            <i class="fa-solid fa-gifts fw-bold fs-3"></i>
          </div>
          <div class="col-12 col-md-10  text-start row m-0">
            <div class="col-12  fs-md-5 my-0 text-nowrap text-center text-md-start">
              Gift Cards
            </div>
            <div class="col-12 my-0 text-center text-md-start" style="font-size: .75rem;">
              Special Gift Cards
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center my-1 p-0 mx-1">
        <div class="card-body row m-0 p-1">
          <div class="col-12 col-md-2 d-flex justify-content-center align-items-center m-0">
            <i class="fa-solid fa-reply-all fw-bold fs-3"></i>
          </div>
          <div class="col-12 col-md-10  text-start row m-0">
            <div class="col-12  fs-md-5 my-0  text-nowrap text-center text-md-start">
              Free Return
            </div>
            <div class="col-12 my-0 text-center text-md-start" style="font-size: .75rem;">
              Within 7 Days
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center my-1 mx-1">
        <div class="card-body row m-0 p-1">
          <div class="col-12 col-md-2 d-flex justify-content-center align-items-center m-0">
            <i class="fa-solid fa-tty fw-bold fs-3"></i>
          </div>
          <div class="col-12 col-md-10 text-start row m-0">
            <div class="col-12  fs-md-5 my-0  text-nowrap text-center text-md-start">
              Consultancy
            </div>
            <div class="col-12 my-0 text-center text-md-start " style="font-size: .75rem;">
              Lifetime 24/7/356
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- right  -->

    `;

    showErrorMsg(returnedData.title);
    // 4
    loadQuickSpec();
}

/*_____________________START_____________________*/
/*________when user clicked the eye Icon it will start executing________*/
function CORSSolve(url) {

    //3
    document.getElementById('phone-name').textContent = '';
    document.getElementById('phone-name').textContent = '';
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            returnedData = JSON.parse(xhttp.responseText);
            if (returnedData) {

               
                //set image 
                // 3
                setPage();


            } else {
                showErrorMsg('No phone By this Name');
            }

        }
    };
    //https://cors-anywhere.herokuapp.com/corsdemo
    xhttp.open("GET", url, true);
    xhttp.send()
}



/*
call the corrs solve  to laod the data from the API
*/
const loadDetailViewOfPhone = () => {

    //  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  uncomment FOR LOAD DATA  ↓ ↓ ↓ ↓ ↓ ↓ 

    // 1
    showErrorMsg('Loading.Please wait......');
    const phoneUrl = parseQueryString();
      //url from the search query to get the exact phones data

    //2
    //  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  uncomment FOR LOAD DATA  ↓ ↓ ↓ ↓ ↓ ↓ 
    CORSSolve(Object.values(phoneUrl)[0]);

}

/*______________START________________*/
loadDetailViewOfPhone();