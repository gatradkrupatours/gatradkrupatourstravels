<template>
  <!-- FOOTER -->
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="footer-info">
            <div class="section-title">
              <h2>Headquarter</h2>
            </div>
            <address>
              <p>
                {{ HQ_ADDRESS }}
              </p>
            </address>

            <!-- <ul class="social-icon">
                                   <li><a href="/#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                   <li><a href="/#" class="fa fa-twitter"></a></li>
                                   <li><a href="/#" class="fa fa-instagram"></a></li>
                              </ul> -->

            <div class="copyright-text">
              <p>Copyright &copy; {{ (new Date()).getFullYear() }} {{ SITE_NAME }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="footer-info">
            <div class="section-title">
              <h2>Contact Info</h2>
            </div>
            <address>
              <p><a :href='"tel:" + MO_NUMBER'>{{ MO_NUMBER_STR }}</a></p>
            </address>

            <div class="footer_menu">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#about-us">About Us</a></li>
                <li><a href="terms">Terms & Conditions</a></li>
                <li><a href="privacy">Privacy Policy</a></li>
                <li><a href="/#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-4 col-sm-12">
                         <div class="footer-info newsletter-form">
                              <div class="section-title">
                                   <h2>Newsletter Signup</h2>
                              </div>
                              <div>
                                   <div class="form-group">
                                        <form action="#" method="get">
                                             <input type="email" class="form-control" placeholder="Enter your email"
                                                  name="email" id="email" required>
                                             <input type="submit" class="form-control" name="submit" id="form-submit"
                                                  value="Send me">
                                        </form>
                                        <span><sup>*</sup> Please note - we do not spam your email.</span>
                                   </div>
                              </div>
                         </div>
                    </div> -->
      </div>
    </div>
  </footer>
</template>
