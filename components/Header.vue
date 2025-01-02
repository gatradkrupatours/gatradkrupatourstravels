<template>
  <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
        </button>

        <!-- lOGO TEXT HERE -->
        <div class="navbar-brand">
          <a href="/">
            <img src="/images/logo.png" alt="logo" class="logo" />
            {{ SITE_NAME }}</a
          >
        </div>
      </div>

      <!-- MENU LINKS -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-nav-first">
          <li class="active"><a href="/">Home</a></li>
          <li><a href="/#fleet">Fleet</a></li>
          <li class="dropdown">
            <a
              href="/#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >About<span class="caret"></span
            ></a>

            <ul class="dropdown-menu">
              <li><a href="/#about-us">About Us</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </li>
          <li><a href="/#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
