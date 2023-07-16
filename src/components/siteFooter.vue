<script setup>

const fullYear = new Date().getFullYear()

</script>
                
<template>
  <div class="site-footer">
    <div class="footer-dots"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="widget">
            <h3>About Launch<span class="text-primary">.</span></h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="widget">
            <h3>Connect</h3>
            <ul class="list-unstyled social">
              <li class="m-fix">
                <a href="#"><span class="icon-instagram"></span></a>
              </li>
              <li class="m-fix">
                <a href="#"><span class="icon-twitter"></span></a>
              </li>
              <li class="m-fix">
                <a href="#"><span class="icon-facebook"></span></a>
              </li>
              <li class="m-fix">
                <a href="#"><span class="icon-linkedin"></span></a>
              </li>
              <li class="m-fix">
                <a href="#"><span class="icon-pinterest"></span></a>
              </li>
              <li class="m-fix">
                <a href="#"><span class="icon-dribbble"></span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 ml-auto">
          <div class="widget">
            <h3>Projects</h3>
            <ul class="list-unstyled float-left links">
              <li><a href="#">La Lega Stadium</a></li>
              <li><a href="#">France Building</a></li>
              <li><a href="#">22 New Homes</a></li>
              <li><a href="#">Manage Center</a></li>
              <li><a href="#">Sports Hall</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="widget">
            <h3>Services</h3>
            <ul class="list-unstyled float-left links">
              <li><a href="#">Architect</a></li>
              <li><a href="#">Interior Design</a></li>
              <li><a href="#">Landscape Design</a></li>
              <li><a href="#">Consultancy</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="widget">
            <h3>Contact</h3>
            <address>43 Raymouth Rd. Baltemoer, London 3910</address>
            <ul class="list-unstyled links mb-4">
              <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
              <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
              <li>
                <a href="https://preview.colorlib.com/cdn-cgi/l/email-protection#771e191118371a0e13181a161e195914181a"><span
                    class="__cf_email__"
                    data-cfemail="244d4a424b64495d404b49454d4a0a474b49">[email&#160;protected]</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center">
          <p>
            Copyright &copy; {{ fullYear }}

            All rights reserved | This template is made with
            <i class="icon-heart text-danger" aria-hidden="true"></i> by
            <a href="https://colorlib.com/" target="_blank">Colorlib</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="overlayer"></div>
  <div class="loader">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style scoped></style>