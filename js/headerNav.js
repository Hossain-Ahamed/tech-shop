const header = document.getElementById('navbar-header');
header.innerHTML = `  <!-- nav bar  -->
<nav class="container  navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <!-- icon  -->

    <a class="navbar-brand " id="companyName"href="#">Navbar</a>
  
    <!-- search bar -->
    <form class="d-flex align-items-center position-relative search-bar" role="search">
      <input class="form-control search-size" id="search-field-text" type="search" placeholder="Search" aria-label="Search">
      <!-- search button and icon switch -->
      <a href="" class="btn btn-outline-success mx-1 mx-md-2 search-btn" type="submit">Search</a>
      <a href="" class="search-icon btn btn-outline-success mx-1 mx-md-2 text-success " type="submit"><i
          class="fa-solid fa-magnifying-glass "></i></a>

    </form>


    <!-- nav option  -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse top-navigation-bar flex-grow-0 " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-square-phone"></i>
            +12345678xxx</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="SignInLogInHyperLink" ><i class="fa-solid fa-user"></i>
            Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id='' href="#">My wishlist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link position-relative" href="#"><i class="fa-solid fa-cart-shopping"></i> Your cart
            <span id="cart-item-count"
              class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-dark">99
              <span class="visually-hidden">Item count</span></span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>`;

//set link to the account
const id = 1001;
document.getElementById('SignInLogInHyperLink').style.cssText ="cursor : pointer;";
document.getElementById('SignInLogInHyperLink').addEventListener('click',function(){
  window.location.assign(`SignInLogIn.html?q=${id}`);
});