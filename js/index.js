
//set link to the account
const id = 1001;
const link = `SignInLogIn.html?q=${id}`;
document.getElementById('SignInLogInHyperLink').setAttribute('href', link);

// var url = "http://gsmarena-api.herokuapp.com/device/apple_iphone_13_pro_max-11089";

// var xhr = new XMLHttpRequest();
// xhr.open("GET", url);

// xhr.setRequestHeader("accept", "application/json");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};

// xhr.send();


// stop hover three option in card if the screen is less than 576px
const HoverShowOrNot = () => {
  if (screen.width < 576) {
    document.getElementById('hoverContent').style.display = 'none';
  }
}
HoverShowOrNot();


//show case
const setModal = nameOfImage => {
  document.getElementById('modal-card').textContent = '';
  document.getElementById('modal-card').innerHTML = `
   <div class="row g-0">
   <div class="col-md-6 ">
     <img src="images/${nameOfImage}" class="img-fluid rounded-start" alt="...">
   </div>
   <div class="col-md-6">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam consectetur natus iste incidunt inventore dignissimos necessitatibus quis ex odit neque magni ea numquam distinctio sapiente tempore, voluptas aut expedita soluta ipsum. Iusto, odit? Adipisci labore dolorem culpa officiis nulla optio. Voluptas reprehenderit libero nostrum minima laboriosam iusto architecto adipisci doloribus veniam perspiciatis, culpa molestias fugit. Accusantium amet, debitis architecto ipsa, illum aliquam fuga ea soluta, accusamus dolore sapiente iste voluptates a tempore quam facilis nemo? Voluptatibus enim modi est aspernatur dolores porro incidunt necessitatibuto suscipit officiis ducimus nemo commodi temporibus officia minus, veritatis accusamus, eius beatae. Obcaecati earum, molestias sit corporis officia dolorem alias incidunt id quam aperiam, est error saepe adipisci consequuntur praesentium hic, dolorum optio vitae ullam iure! .</p>
      
     </div>
   </div>
 </div>
 
`
}


// empty the modal data 
const modalEmpty = () => {

  document.getElementById('modal-card').textContent = '';

}
