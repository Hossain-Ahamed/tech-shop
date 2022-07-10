const fakeData = [{ "name": "Acer", "devices": "100", "url": "acer-phones-59" }, { "name": "alcatel", "devices": "405", "url": "alcatel-phones-5" }, { "name": "Allview", "devices": "157", "url": "allview-phones-88" }, { "name": "Amazon", "devices": "22", "url": "amazon-phones-76" }, { "name": "Amoi", "devices": "47", "url": "amoi-phones-28" }, { "name": "Apple", "devices": "100", "url": "apple-phones-48" }, { "name": "Archos", "devices": "43", "url": "archos-phones-90" }, { "name": "Asus", "devices": "193", "url": "asus-phones-46" }, { "name": "AT&T", "devices": "4", "url": "at&t-phones-57" }, { "name": "Benefon", "devices": "9", "url": "benefon-phones-15" }, { "name": "BenQ", "devices": "35", "url": "benq-phones-31" }, { "name": "BenQ-Siemens", "devices": "27", "url": "benq_siemens-phones-42" }, { "name": "Bird", "devices": "61", "url": "bird-phones-34" }, { "name": "BlackBerry", "devices": "92", "url": "blackberry-phones-36" }, { "name": "Blackview", "devices": "40", "url": "blackview-phones-116" }, { "name": "BLU", "devices": "352", "url": "blu-phones-67" }, { "name": "Bosch", "devices": "10", "url": "bosch-phones-10" }, { "name": "BQ", "devices": "20", "url": "bq-phones-108" }, { "name": "Casio", "devices": "5", "url": "casio-phones-77" }, { "name": "Cat", "devices": "20", "url": "cat-phones-89" }, { "name": "Celkon", "devices": "229", "url": "celkon-phones-75" }, { "name": "Chea", "devices": "12", "url": "chea-phones-24" }, { "name": "Coolpad", "devices": "41", "url": "coolpad-phones-105" }, { "name": "Dell", "devices": "20", "url": "dell-phones-61" }, { "name": "Emporia", "devices": "15", "url": "emporia-phones-93" }, { "name": "Energizer", "devices": "62", "url": "energizer-phones-106" }, { "name": "Ericsson", "devices": "40", "url": "ericsson-phones-2" }, { "name": "Eten", "devices": "22", "url": "eten-phones-40" }, { "name": "Fairphone", "devices": "3", "url": "fairphone-phones-127" }, { "name": "Fujitsu Siemens", "devices": "2", "url": "fujitsu_siemens-phones-50" }, { "name": "Garmin-Asus", "devices": "5", "url": "garmin_asus-phones-65" }, { "name": "Gigabyte", "devices": "63", "url": "gigabyte-phones-47" }, { "name": "Gionee", "devices": "95", "url": "gionee-phones-92" }, { "name": "Google", "devices": "19", "url": "google-phones-107" }, { "name": "Haier", "devices": "59", "url": "haier-phones-33" }, { "name": "Honor", "devices": "143", "url": "honor-phones-121" }, { "name": "HP", "devices": "41", "url": "hp-phones-41" }, { "name": "HTC", "devices": "277", "url": "htc-phones-45" }, { "name": "Huawei", "devices": "390", "url": "huawei-phones-58" }, { "name": "i-mate", "devices": "34", "url": "i_mate-phones-35" }, { "name": "i-mobile", "devices": "37", "url": "i_mobile-phones-52" }, { "name": "Icemobile", "devices": "61", "url": "icemobile-phones-69" }, { "name": "Infinix", "devices": "86", "url": "infinix-phones-119" }, { "name": "Innostream", "devices": "18", "url": "innostream-phones-29" }, { "name": "iNQ", "devices": "5", "url": "inq-phones-60" }, { "name": "Intex", "devices": "15", "url": "intex-phones-102" }, { "name": "Jolla", "devices": "3", "url": "jolla-phones-84" }, { "name": "Karbonn", "devices": "60", "url": "karbonn-phones-83" }, { "name": "Kyocera", "devices": "24", "url": "kyocera-phones-17" }, { "name": "Lava", "devices": "128", "url": "lava-phones-94" }, { "name": "LeEco", "devices": "9", "url": "leeco-phones-109" }, { "name": "Lenovo", "devices": "232", "url": "lenovo-phones-73" }, { "name": "LG", "devices": "666", "url": "lg-phones-20" }, { "name": "Maxon", "devices": "31", "url": "maxon-phones-14" }, { "name": "Maxwest", "devices": "41", "url": "maxwest-phones-87" }, { "name": "Meizu", "devices": "67", "url": "meizu-phones-74" }, { "name": "Micromax", "devices": "289", "url": "micromax-phones-66" }, { "name": "Microsoft", "devices": "32", "url": "microsoft-phones-64" }, { "name": "Mitac", "devices": "12", "url": "mitac-phones-25" }, { "name": "Mitsubishi", "devices": "25", "url": "mitsubishi-phones-8" }, { "name": "Modu", "devices": "8", "url": "modu-phones-63" }, { "name": "Motorola", "devices": "562", "url": "motorola-phones-4" }, { "name": "MWg", "devices": "5", "url": "mwg-phones-56" }, { "name": "NEC", "devices": "73", "url": "nec-phones-12" }, { "name": "Neonode", "devices": "3", "url": "neonode-phones-22" }, { "name": "NIU", "devices": "30", "url": "niu-phones-79" }, { "name": "Nokia", "devices": "540", "url": "nokia-phones-1" }, { "name": "Nothing", "devices": "1", "url": "nothing-phones-128" }, { "name": "Nvidia", "devices": "3", "url": "nvidia-phones-97" }, { "name": "O", "devices": "45", "url": "o2-phones-30" }, { "name": "OnePlus", "devices": "45", "url": "oneplus-phones-95" }, { "name": "Oppo", "devices": "233", "url": "oppo-phones-82" }, { "name": "Orange", "devices": "19", "url": "orange-phones-71" }, { "name": "Palm", "devices": "17", "url": "palm-phones-27" }, { "name": "Panasonic", "devices": "123", "url": "panasonic-phones-6" }, { "name": "Pantech", "devices": "72", "url": "pantech-phones-32" }, { "name": "Parla", "devices": "10", "url": "parla-phones-81" }, { "name": "Philips", "devices": "229", "url": "philips-phones-11" }, { "name": "Plum", "devices": "113", "url": "plum-phones-72" }, { "name": "Posh", "devices": "30", "url": "posh-phones-101" }, { "name": "Prestigio", "devices": "56", "url": "prestigio-phones-86" }, { "name": "QMobile", "devices": "90", "url": "qmobile-phones-103" }, { "name": "Qtek", "devices": "21", "url": "qtek-phones-38" }, { "name": "Razer", "devices": "2", "url": "razer-phones-117" }, { "name": "Realme", "devices": "140", "url": "realme-phones-118" }, { "name": "Sagem", "devices": "120", "url": "sagem-phones-13" }, { "name": "Samsung", "devices": "1335", "url": "samsung-phones-9" }, { "name": "Sendo", "devices": "19", "url": "sendo-phones-18" }, { "name": "Sewon", "devices": "25", "url": "sewon-phones-26" }, { "name": "Sharp", "devices": "60", "url": "sharp-phones-23" }, { "name": "Siemens", "devices": "94", "url": "siemens-phones-3" }, { "name": "Sonim", "devices": "14", "url": "sonim-phones-54" }, { "name": "Sony", "devices": "154", "url": "sony-phones-7" }, { "name": "Sony Ericsson", "devices": "188", "url": "sony_ericsson-phones-19" }, { "name": "Spice", "devices": "120", "url": "spice-phones-68" }, { "name": "T-Mobile", "devices": "59", "url": "t_mobile-phones-55" }, { "name": "TCL", "devices": "39", "url": "tcl-phones-123" }, { "name": "Tecno", "devices": "98", "url": "tecno-phones-120" }, { "name": "Tel.Me.", "devices": "7", "url": "tel_me_-phones-21" }, { "name": "Telit", "devices": "30", "url": "telit-phones-16" }, { "name": "Thuraya", "devices": "1", "url": "thuraya-phones-49" }, { "name": "Toshiba", "devices": "35", "url": "toshiba-phones-44" }, { "name": "Ulefone", "devices": "57", "url": "ulefone-phones-124" }, { "name": "Unnecto", "devices": "30", "url": "unnecto-phones-91" }, { "name": "Vertu", "devices": "17", "url": "vertu-phones-39" }, { "name": "verykool", "devices": "139", "url": "verykool-phones-70" }, { "name": "vivo", "devices": "301", "url": "vivo-phones-98" }, { "name": "VK Mobile", "devices": "31", "url": "vk_mobile-phones-37" }, { "name": "Vodafone", "devices": "87", "url": "vodafone-phones-53" }, { "name": "Wiko", "devices": "79", "url": "wiko-phones-96" }, { "name": "WND", "devices": "5", "url": "wnd-phones-51" }, { "name": "XCute", "devices": "4", "url": "xcute-phones-43" }, { "name": "Xiaomi", "devices": "291", "url": "xiaomi-phones-80" }, { "name": "XOLO", "devices": "81", "url": "xolo-phones-85" }, { "name": "Yezz", "devices": "103", "url": "yezz-phones-78" }, { "name": "Yota", "devices": "3", "url": "yota-phones-99" }, { "name": "YU", "devices": "13", "url": "yu-phones-100" }, { "name": "ZTE", "devices": "317", "url": "zte-phones-62" }];



function CORSSolve(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {  
      const returnedData = JSON.parse(xhttp.responseText);
       displayBrands(returnedData);
    }
  };
  //https://cors-anywhere.herokuapp.com/corsdemo
  xhttp.open("GET", url, true);
  xhttp.send()
}




const displayBrands = brands => {

  const PhoneBrandNameContainer = document.getElementById('PhoneBrandNameContainer');
  PhoneBrandNameContainer.textContent = '';
  for (brand of brands) {
    const col = document.createElement('div');
    col.classList.add('col', 'd-flex', 'justify-content-center', 'border', 'rounded', 'border-dark', 'mx-1', 'mx-sm-2','p-2','card', 'border-0','mx-2','mx-sm-0','card-title','text-center','fw-bold');
    col.setAttribute('onclick',`showAllPhoneOfClickedBrand()`)
     col.setAttribute('id',`${brand.url}`)
   
    col.innerHTML = `
    ${brand.name}
                       
          
            `;
    PhoneBrandNameContainer.appendChild(col);

  }


}


//load the brand name
const loadPhoneBrandCase = () => {
 
  const url = `https://cors-anywhere.herokuapp.com/http://gsmarena-api.herokuapp.com/brands`;
  //  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  uncomment FOR LOAD DATA  ↓ ↓ ↓ ↓ ↓ ↓ 
  CORSSolve(url);

  //  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  make FOR LOAD DATA  ↓ ↓ ↓ ↓ ↓ ↓ ↓
  // displayBrands(fakeData);
}



/*_________________START_____________________*/
loadPhoneBrandCase();


//clicked brand detail ------> href to ShowCase.html
const showAllPhoneOfClickedBrand = urlID =>{

  let id = event.srcElement.id;
  if(!(location.pathname.includes('`/public/adminProfile.html`') ===  true || location.pathname.includes('/admin') ===  true || location.pathname.includes('/adminProfile.html') === true)){

    ///___________________client______________//
      let url= `ShowCase.html?q=http://gsmarena-api.herokuapp.com/brand/${id}&dataIn=true`;
      // location.assign(url);

  }else{
    console.log("gotcha");
  }
}


  
 

