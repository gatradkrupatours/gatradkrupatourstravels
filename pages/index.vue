<template>
  <Head>
    <Title>{{ SITE_TITLE }}</Title>
  </Head>
  <Header />
  <!-- HOME -->
  <section id="home">
    <div class="row">
      <div class="owl-carousel owl-theme home-slider">
        <div class="item item-first">
          <div class="caption">
            <div class="container">
              <div class="col-md-6 col-sm-12">
                <h1>Welcome to {{ SITE_NAME }}</h1>
                <h3>Your Premier Destination for Car Rentals</h3>
                <a href="/#fleet" class="section-btn btn btn-default">Fleet</a>
              </div>
            </div>
          </div>
        </div>

        <div class="item item-second">
          <div class="caption">
            <div class="container">
              <div class="col-md-6 col-sm-12">
                <h1>Your Safety is Our Priority</h1>
                <h3>Clean, Sanitized Vehicles for Peace of Mind</h3>
                <a href="/#fleet" class="section-btn btn btn-default">Fleet</a>
              </div>
            </div>
          </div>
        </div>

        <div class="item item-third">
          <div class="caption">
            <div class="container">
              <div class="col-md-6 col-sm-12">
                <h1>Adventure Awaits</h1>
                <h3>Discover New Destinations with Our Rentals</h3>
                <a href="/#fleet" class="section-btn btn btn-default">Fleet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main>
    <section id="about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="text-center">
              <h2>About Us</h2>

              <br />

              <p class="lead">
                At {{ SITE_NAME }}, we pride ourselves on offering reliable,
                high-quality car rental services tailored to meet the diverse
                needs of our customers. Whether you're planning a family
                vacation, a business trip, or a special event, we have the
                perfect vehicle for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-background" id="fleet">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title text-center">
              <h2>Fleets <small>Find Your Perfect Ride Today.</small></h2>
              <p style="color: #e74c3c; margin-top: 10px; font-weight: bold">
                Note: All vehicles come with professional drivers. Self-drive
                options are not available.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/ertiga.jpg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
                <!-- <div class="courses-date">
                                             <span title="passegengers"><i class="fa fa-user"></i> 6</span>
                                        </div> -->
              </div>

              <div class="courses-detail">
                <h3>Ertiga</h3>
                <p>Seating Capacity: 6 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/innova.jpg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
                <!-- <div class="courses-date">
                                             <span title="passegengers"><i class="fa fa-user"></i> 6</span>
                                        </div> -->
              </div>

              <div class="courses-detail">
                <h3>Innova</h3>
                <p>Seating Capacity: 6 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/baleno.jpg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
                <!-- <div class="courses-date">
                                             <span title="passegengers"><i class="fa fa-user"></i> 5</span>
                                        </div> -->
              </div>

              <div class="courses-detail">
                <h3>Suzuki Baleno</h3>
                <p>Seating Capacity: 4 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/aura.jpg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
                <!-- <div class="courses-date">
                                             <span title="passegengers"><i class="fa fa-user"></i> 4</span>
                                        </div> -->
              </div>

              <div class="courses-detail">
                <h3>Aura</h3>
                <p>Seating Capacity: 4 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/swift.jpg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
                <!-- <div class="courses-date">
                                             <span title="passegengers"><i class="fa fa-user"></i> 2</span>
                                        </div> -->
              </div>

              <div class="courses-detail">
                <h3>Swift</h3>
                <p>Seating Capacity: 4 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/traveller.jpg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
                <!-- <div class="courses-date">
                                             <span title="passegengers"><i class="fa fa-user"></i> 2</span>
                                        </div> -->
              </div>

              <div class="courses-detail">
                <h3>Traveller</h3>
                <p>Seating Capacity: 12 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="courses-thumb courses-thumb-secondary">
              <div class="courses-top">
                <div class="courses-image">
                  <img
                    src="/images/cars/toofan.jpeg"
                    class="img-responsive car-image"
                    alt=""
                  />
                </div>
              </div>

              <div class="courses-detail">
                <h3><a href="fleet.html">Force Trax Toofan</a></h3>
                <p>Seating Capacity: 10 seats</p>
              </div>

              <div class="courses-info">
                <a
                  role="button"
                  type="button"
                  :href="'tel:' + MO_NUMBER"
                  @click="trackEvent()"
                  class="section-btn btn btn-primary btn-block"
                  >Book Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonial">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title text-center">
              <h2>Testimonials <small>from around India</small></h2>
            </div>

            <div class="owl-carousel owl-theme owl-client">
              <div class="col-md-4 col-sm-4">
                <div class="item">
                  <div class="tst-author">
                    <h4>Rajesh Kumar</h4>
                  </div>
                  <p>
                    I had an amazing experience with {{ SITE_NAME }}. The
                    booking process was seamless, and the car was in pristine
                    condition. The customer service team went above and beyond
                    to ensure everything was perfect. I highly recommend them
                    for anyone needing a rental car!
                  </p>
                  <div class="tst-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4">
                <div class="item">
                  <div class="tst-author">
                    <h4>Arjun Sharma</h4>
                  </div>
                  <p>
                    Our family trip was a huge success thanks to
                    {{ SITE_NAME }}. The car we rented was spacious, clean, and
                    comfortable, making our long drives enjoyable. The staff was
                    friendly and helpful, providing us with great tips for our
                    journey. We'll definitely be using their services again!
                  </p>
                  <div class="tst-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4">
                <div class="item">
                  <div class="tst-author">
                    <h4>Vikram Singh</h4>
                  </div>
                  <p>
                    Our road trip through the countryside was unforgettable,
                    thanks to {{ SITE_NAME }}. The car was comfortable and
                    perfect for long drives and exploring new places. The rental
                    process was quick and easy, and the staff provided excellent
                    recommendations for scenic routes. We'll definitely choose
                    them again for our next adventure!
                  </p>
                  <div class="tst-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4">
                <div class="item">
                  <div class="tst-author">
                    <h4>Sahil Patel</h4>
                  </div>
                  <p>
                    Renting from {{ SITE_NAME }} made our friends' getaway truly
                    special. The car was spacious and comfortable, perfect for
                    our group as we toured the best tourist spots. The staff was
                    friendly and gave us great tips for hidden gems in the area.
                    It was an incredible experience, and we can&apos;t wait to
                    rent from them again!
                  </p>
                  <div class="tst-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- CONTACT -->
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <form
            id="contact-form"
            role="form"
            action=""
            method="post"
            :data-number="MO_NUMBER"
          >
            <div class="section-title">
              <h2>
                Contact us <small>we love conversations. let us talk!</small>
              </h2>
            </div>

            <div class="col-md-12 col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="Enter full name"
                name="name"
                required
              />

              <textarea
                class="form-control"
                rows="6"
                placeholder="Tell us about your message"
                name="message"
                required
              ></textarea>
            </div>

            <div class="col-md-4 col-sm-12">
              <input
                type="submit"
                class="form-control"
                name="send message"
                value="Send Message"
              />
            </div>
          </form>
        </div>

        <!-- <div class="col-md-6 col-sm-12">
                         <div class="contact-image">
                              <img src="/images/contact-1-600x400.jpg" class="img-responsive" alt="Smiling Two Girls">
                         </div>
                    </div> -->
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup lang="js">
function gtag_report_conversion(url) {
  const callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-864630123/omNnCLqlvd8ZEOvqpJwD",
    event_callback: callback,
  });
  return false;
}

function trackEvent() {
  gtag_report_conversion();
}
</script>
