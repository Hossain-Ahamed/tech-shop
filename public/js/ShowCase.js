const fakeData = '{"data":[{"name":"iPhone SE (2022)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg","url":"apple_iphone_se_(2022)-11410","description":"Apple iPhone SE (2022) smartphone. Announced Mar 2022. Features 4.7″  display, Apple A15 Bionic chipset, 2018 mAh battery, 256 GB storage, 4 GB RAM, Ion-strengthened glass."},{"name":"iPad Air (2022)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-2022-new.jpg","url":"apple_ipad_air_(2022)-11411","description":"Apple iPad Air (2022) tablet. Announced Mar 2022. Features 10.9″  display, Apple M1 chipset, 256 GB storage, 8 GB RAM, Scratch-resistant glass."},{"name":"iPhone 13 Pro Max","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg","url":"apple_iphone_13_pro_max-11089","description":"Apple iPhone 13 Pro Max smartphone. Announced Sep 2021. Features 6.7″  display, Apple A15 Bionic chipset, 4352 mAh battery, 1024 GB storage, 6 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPhone 13 Pro","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg","url":"apple_iphone_13_pro-11102","description":"Apple iPhone 13 Pro smartphone. Announced Sep 2021. Features 6.1″  display, Apple A15 Bionic chipset, 3095 mAh battery, 1024 GB storage, 6 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPhone 13","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg","url":"apple_iphone_13-11103","description":"Apple iPhone 13 smartphone. Announced Sep 2021. Features 6.1″  display, Apple A15 Bionic chipset, 3240 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPhone 13 mini","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg","url":"apple_iphone_13_mini-11104","description":"Apple iPhone 13 mini smartphone. Announced Sep 2021. Features 5.4″  display, Apple A15 Bionic chipset, 2438 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPad mini (2021)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg","url":"apple_ipad_mini_(2021)-11105","description":"Apple iPad mini (2021) tablet. Announced Sep 2021. Features 8.3″  display, Apple A15 Bionic chipset, 256 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPad 10.2 (2021)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-102-2021-.jpg","url":"apple_ipad_10_2_(2021)-11106","description":"Apple iPad 10.2 (2021) tablet. Announced Sep 2021. Features 10.2″  display, Apple A13 Bionic chipset, 8557 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass."},{"name":"Watch Edition Series 7","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-titanium.jpg","url":"apple_watch_edition_series_7-11147","description":"Apple Watch Edition Series 7 watch. Announced Sep 2021. Features 1.9″  display, Apple S7 chipset, 309 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Sapphire crystal glass."},{"name":"Watch Series 7","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-stainless-steel.jpg","url":"apple_watch_series_7-11146","description":"Apple Watch Series 7 watch. Announced Sep 2021. Features 1.9″  display, Apple S7 chipset, 309 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Sapphire crystal glass."},{"name":"Watch Series 7 Aluminum","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-aluminum.jpg","url":"apple_watch_series_7_aluminum-11107","description":"Apple Watch Series 7 Aluminum watch. Announced Sep 2021. Features 1.9″  display, Apple S7 chipset, 309 mAh battery, 32 GB storage, 1000 MB RAM, IP6X certified, Ion-X strengthened glass."},{"name":"iPad Pro 12.9 (2021)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2021.jpg","url":"apple_ipad_pro_12_9_(2021)-10864","description":"Apple iPad Pro 12.9 (2021) tablet. Announced Apr 2021. Features 12.9″  display, Apple M1 chipset, 2048 GB storage, 16 GB RAM, Scratch-resistant glass."},{"name":"iPad Pro 11 (2021)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2021.jpg","url":"apple_ipad_pro_11_(2021)-10865","description":"Apple iPad Pro 11 (2021) tablet. Announced Apr 2021. Features 11.0″  display, Apple M1 chipset, 7538 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass."},{"name":"iPhone 12 Pro Max","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg","url":"apple_iphone_12_pro_max-10237","description":"Apple iPhone 12 Pro Max smartphone. Announced Oct 2020. Features 6.7″  display, Apple A14 Bionic chipset, 3687 mAh battery, 512 GB storage, 6 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPhone 12 Pro","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg","url":"apple_iphone_12_pro-10508","description":"Apple iPhone 12 Pro smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 512 GB storage, 6 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPhone 12","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg","url":"apple_iphone_12-10509","description":"Apple iPhone 12 smartphone. Announced Oct 2020. Features 6.1″  display, Apple A14 Bionic chipset, 2815 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPhone 12 mini","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg","url":"apple_iphone_12_mini-10510","description":"Apple iPhone 12 mini smartphone. Announced Oct 2020. Features 5.4″  display, Apple A14 Bionic chipset, 2227 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant ceramic glass."},{"name":"iPad Air (2020)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air4-2020.jpg","url":"apple_ipad_air_(2020)-10444","description":"Apple iPad Air (2020) tablet. Announced Sep 2020. Features 10.9″  display, Apple A14 Bionic chipset, 7606 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPad 10.2 (2020)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad8-102-inches-2020.jpg","url":"apple_ipad_10_2_(2020)-10445","description":"Apple iPad 10.2 (2020) tablet. Announced Sep 2020. Features 10.2″  display, Apple A12 Bionic chipset, 128 GB storage, 3 GB RAM, Scratch-resistant glass."},{"name":"Watch SE","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-se.jpg","url":"apple_watch_se-10446","description":"Apple Watch SE watch. Announced Sep 2020. Features 1.78″  display, Apple S5 chipset, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass."},{"name":"Watch Series 6 Aluminum","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6.jpg","url":"apple_watch_series_6_aluminum-10447","description":"Apple Watch Series 6 Aluminum watch. Announced Sep 2020. Features 1.78″  display, Apple S6 chipset, 304 mAh battery, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass."},{"name":"Watch Series 6","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-steel.jpg","url":"apple_watch_series_6-10448","description":"Apple Watch Series 6 watch. Announced Sep 2020. Features 1.78″  display, Apple S6 chipset, 304 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass."},{"name":"Watch Edition Series 6","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-titanium.jpg","url":"apple_watch_edition_series_6-10449","description":"Apple Watch Edition Series 6 watch. Announced Sep 2020. Features 1.78″  display, Apple S6 chipset, 304 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass."},{"name":"iPhone SE (2020)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg","url":"apple_iphone_se_(2020)-10170","description":"Apple iPhone SE (2020) smartphone. Announced Apr 2020. Features 4.7″  display, Apple A13 Bionic chipset, 1821 mAh battery, 256 GB storage, 3 GB RAM, Ion-strengthened glass."},{"name":"iPad Pro 12.9 (2020)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-12-2020.jpg","url":"apple_ipad_pro_12_9_(2020)-10136","description":"Apple iPad Pro 12.9 (2020) tablet. Announced Mar 2020. Features 12.9″  display, Apple A12Z Bionic chipset, 9720 mAh battery, 1024 GB storage, 6 GB RAM, Scratch-resistant glass."},{"name":"iPad Pro 11 (2020)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2020.jpg","url":"apple_ipad_pro_11_(2020)-10137","description":"Apple iPad Pro 11 (2020) tablet. Announced Mar 2020. Features 11.0″  display, Apple A12Z Bionic chipset, 1024 GB storage, 6 GB RAM, Scratch-resistant glass."},{"name":"iPhone 11 Pro Max","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg","url":"apple_iphone_11_pro_max-9846","description":"Apple iPhone 11 Pro Max smartphone. Announced Sep 2019. Features 6.5″  display, Apple A13 Bionic chipset, 3969 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPhone 11 Pro","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg","url":"apple_iphone_11_pro-9847","description":"Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″  display, Apple A13 Bionic chipset, 3046 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPhone 11","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg","url":"apple_iphone_11-9848","description":"Apple iPhone 11 smartphone. Announced Sep 2019. Features 6.1″  display, Apple A13 Bionic chipset, 3110 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPad 10.2 (2019)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad7-102-inches.jpg","url":"apple_ipad_10_2_(2019)-9857","description":"Apple iPad 10.2 (2019) tablet. Announced Sep 2019. Features 10.2″  display, Apple A10 Fusion chipset, 8827 mAh battery, 128 GB storage, 3 GB RAM, Scratch-resistant glass."},{"name":"Watch Edition Series 5","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-edition-series-5.jpg","url":"apple_watch_edition_series_5-9860","description":"Apple Watch Edition Series 5 watch. Announced Sep 2019. Features 1.78″  display, Apple S5 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass."},{"name":"Watch Series 5","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-5.jpg","url":"apple_watch_series_5-9859","description":"Apple Watch Series 5 watch. Announced Sep 2019. Features 1.78″  display, Apple S5 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Sapphire crystal glass."},{"name":"Watch Series 5 Aluminum","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-watch-aluminum-series-5.jpg","url":"apple_watch_series_5_aluminum-9858","description":"Apple Watch Series 5 Aluminum watch. Announced Sep 2019. Features 1.78″  display, Apple S5 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass."},{"name":"iPad Air (2019)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air3-2019.jpg","url":"apple_ipad_air_(2019)-9638","description":"Apple iPad Air (2019) tablet. Announced Mar 2019. Features 10.5″  display, Apple A12 Bionic chipset, 8134 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass."},{"name":"iPad mini (2019)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2019.jpg","url":"apple_ipad_mini_(2019)-9637","description":"Apple iPad mini (2019) tablet. Announced Mar 2019. Features 7.9″  display, Apple A12 Bionic chipset, 5124 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass."},{"name":"iPad Pro 12.9 (2018)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2018.jpg","url":"apple_ipad_pro_12_9_(2018)-9387","description":"Apple iPad Pro 12.9 (2018) tablet. Announced Oct 2018. Features 12.9″  display, Apple A12X Bionic chipset, 9720 mAh battery, 1024 GB storage, 6 GB RAM, Scratch-resistant glass."},{"name":"iPad Pro 11 (2018)","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2018.jpg","url":"apple_ipad_pro_11_(2018)-9386","description":"Apple iPad Pro 11 (2018) tablet. Announced Oct 2018. Features 11.0″  display, Apple A12X Bionic chipset, 7812 mAh battery, 1024 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPhone XS Max","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg","url":"apple_iphone_xs_max-9319","description":"Apple iPhone XS Max smartphone. Announced Sep 2018. Features 6.5″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 3174 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPhone XS","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg","url":"apple_iphone_xs-9318","description":"Apple iPhone XS smartphone. Announced Sep 2018. Features 5.8″  display, Apple A12 Bionic chipset, Dual: 12 MP (f/1.8, 26mm, 1/2.55″, 1.4µm) + 12 MP primary camera, 7 MP front camera, 2658 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass."},{"name":"iPhone XR","img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg","url":"apple_iphone_xr-9320","description":"Apple iPhone XR smartphone. Announced Sep 2018. Features 6.1″  display, Apple A12 Bionic chipset, 12 MP primary camera, 7 MP front camera, 2942 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass."}],"next":"apple-phones-f-48-0-p2","pages":[{"number":1,"active":true},{"number":2,"url":"apple-phones-f-48-0-p2"},{"number":3,"url":"apple-phones-f-48-0-p3"}]}';

let clickedBrand;
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
  const PhoneContainer = document.getElementById('show-case-container');

  PhoneContainer.innerHTML = `
    <p style="text-align:center; color :red; font-weight:bold;">${msg}</p>
  ` ;
}


// stop hover three option in card if the screen is less than 576px
const HoverShowOrNot = () => {
  
  if (screen.width < 576) {
    document.getElementById('companyName').innerText = 'MayerDoaTech';
    const selects = document.getElementsByClassName('hover-content');
    for (var i = 0; i < selects.length; i++) {
      selects[i].textContent= '';
     
    }

  }
}

//fetch data from UI
function CORSSolve(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const returnedData = JSON.parse(xhttp.responseText);

      if (Object.values(clickedBrand)[1] == 'true') {


        if (returnedData.data.length !== 0) {
          displayPhone(returnedData.data);

        } else {
          showErrorMsg('No phone By this Name');
        }
      } else {
        if (returnedData.length !== 0) {
          displayPhone(returnedData);

        } else {
          showErrorMsg('No phone By this Name');
        }
      }


    }
  };
  //https://cors-anywhere.herokuapp.com/corsdemo
  xhttp.open("GET", url, true);
  xhttp.send()
}

/*  adding image in show case 

    *ShowPhoneALlDetailPageLoad(transfers_the _phone_url) to laod the full data set page of the image --href to the detailView.html & detailView.js
    *CORSSolve('transfers_the _phone_url') to laod the modal of quick spec view --href to the modal.js
*/
const displayPhone = phones => {
  const PhoneContainer = document.getElementById('show-case-container');
  PhoneContainer.textContent = '';
  for (phone of phones) {
    const col = document.createElement('div');
    col.classList.add('col', 'd-flex', 'justify-content-center');
    col.innerHTML = `
    <div class="card "  id="${phone.url}" >
    <div class="card-body">
      <img src="${phone.img}" class="card-img-top" alt="..." onclick="ShowPhoneALlDetailPageLoad('${phone.url}')">
   </div>         
   <div class="card-footer border-0">
     <h5 class="card-title text-center">${phone.name}</h5>       
   </div>
    <div class="hover-content">
      <ul class="mx-2 mx-sm-2 mx-md-3 px-0 d-flex flex-wrap justify-content-between text-decoration-none list-unstyled fs-4">
        <li><a href=""><i class="fa-brands fa-gratipay text-dark"></i></a></li>
        <li><a href=""><i class="fa-solid fa-bars text-dark" id="${phone.url}"  onclick="ShowPhoneALlDetailPageLoad('${phone.url}')"></i></a></li>
        <li><a onclick="CORSSolve('${phone.url}')" id="${phone.url}" href="" data-bs-toggle="modal" data-bs-target="#one"><i
          class="fa-solid fa-eye text-dark"></i></a></li>
        </ul>
      </div>
    </div>       
          
            `;
    PhoneContainer.appendChild(col);

  }
  
HoverShowOrNot();
}


//load the brand name
const loadPhoneShowCaseURL = () => {


  clickedBrand = parseQueryString();
  showErrorMsg('Loading.....');
  const url = `https://cors-anywhere.herokuapp.com/${Object.values(clickedBrand)[0]}`;  //url from the search query to get the exact phones data
  //  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  uncomment FOR LOAD DATA  ↓ ↓ ↓ ↓ ↓ ↓ 
  CORSSolve(url);

  //  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  make FOR LOAD DATA  ↓ ↓ ↓ ↓ ↓ ↓ ↓
  // const raw = JSON.parse(fakeData).data; displayPhone(raw);
}

/* ---- making the show case of the clicked brand of previous page ----- */
/*___________________________START ____________________________________*/
loadPhoneShowCaseURL();






/* href to detailView Page */
//clicked brand detail
const ShowPhoneALlDetailPageLoad = ImageUrl => {


  let url = `detailView.html?q=https://cors-anywhere.herokuapp.com/http://gsmarena-api.herokuapp.com/device/${ImageUrl}`;
  location.assign(url)


}