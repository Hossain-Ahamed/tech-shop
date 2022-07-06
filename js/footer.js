const footer = document.getElementById('main-footer');
footer.classList.add('text-center', 'text-lg-start', 'bg-light', 'text-muted');


footer.innerHTML = `   <section class="pt-1">
<div class="container text-center text-md-start mt-5">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4  mt-3">

    <div class="col mx-auto mb-4">
      <!-- Content -->
      <h6 class="text-uppercase fw-bold mb-4"><i class="fas fa-gem me-3"></i>Tech-Shop</h6>
      <p>
        Here you can get your desired phone, tech accessories, and laptop . <br> Have a great journey with TECH-SHOP  !!!
      </p>
    </div>
    <div class="col mx-auto mb-4">
      <!--accessories buying  Links -->
      <h6 class="text-uppercase fw-bold mb-4">Products</h6>
      <p><a href="#!" class="text-decoration-none text-reset">Mobile</a></p>
      <p><a href="#!" class="text-decoration-none text-reset">Tablet</a></p>
      <p><a href="#!" class="text-decoration-none text-reset">Accessories</a></p>
      <p><a href="#!" class="text-decoration-none text-reset">Laptop</a> </p>
    </div>
    <div class="col mx-auto mb-4">
      <!-- Links -->
      <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
      <p><a href="#!" class="text-decoration-none text-reset">FAQs</a></p>
      <p><a href="#!" class="text-decoration-none text-reset">Help</a></p>
      <p><a href="#!" class="text-decoration-none text-reset">Free Shipping</a></p>
      <p><a href="#!" class="text-decoration-none text-reset">Return & Exchange</a></p>
    </div>
    <div class="col mx-auto mb-md-0 mb-4">
      <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
      <p><i class="fas fa-home me-3"></i>9/A New Chasara, Narayanganj</p>
      <p><i class="fas fa-envelope me-3"></i>tech@example.com</p>
      <p><i class="fas fa-phone me-3"></i> +8801537399940</p>
      <p><i class="fas fa-print me-3"></i> +8801868726172</p>
    </div>
  </div>
</div>
</section>
<!-- Section: Social media -->
<section class="d-flex justify-content-center  p-4 border-bottom">
<!-- Left  section: text -->
<div class="me-5 d-none d-lg-block">
  <span>Get connected with us on social networks:</span>
</div>
<!-- Right Section: Social media  -->
<div>
  <a href="" id="facebook-link" class="me-4 text-reset"> <i class="fab fa-facebook-f"></i></a>
  <a href="" id="twitter-link" class="me-4 text-reset"><i class="fab fa-twitter"></i></a>
  <a href="" id="instagram-link" class="me-4 text-reset"><i class="fab fa-instagram"></i> </a>
</div>
</section>
<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
© 2022 Copyright: <a class="text-reset fw-bold text-decoration-none" href="">Team Mr.Z</a>
</div>`;