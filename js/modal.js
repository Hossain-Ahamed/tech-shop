 // modal set up for the clicked phone 
 const setModal = nameOfImage => {
    document.getElementById('modal-card').textContent = '';
    document.getElementById('modal-card').innerHTML = `
     <div class="row g-0">
     <div class="col-md-6 d-flex align-item-center ">
       <img src="images/${nameOfImage}" class=" rounded-start" alt="...">
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
  