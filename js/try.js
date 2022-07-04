// fetch(``)
//   .then(blob => blob.json())
//   .then(data => {
//     console.log(data);
   
//   })

 
const url = `https://gsmarena-api.herokuapp.com/brands`;
  fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
    .then(response => response.json())
    .then(data => { 
        console.log(data);
    })