<template>
  <div>
    <Head>
      <Link rel="stylesheet" href="/css/bootstrap.min.css" />
      <Link rel="stylesheet" href="/css/font-awesome.min.css" />
      <Link rel="stylesheet" href="/css/owl.carousel.css" />
      <Link rel="stylesheet" href="/css/owl.theme.default.min.css" />

      <Link rel="stylesheet" href="/css/style.css" />
    </Head>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Script src="/js/custom.js"></Script>
    <Script src="/js/contact.js"></Script>
  </div>
</template>
<script setup lang="js">
const runtimeConfig = useRuntimeConfig()
useHead({
  title: SITE_TITLE,
  meta: [
    { name: "description", content: "Experience hassle-free travel with Gatral Krupa Tours & Travels' car hire services. Choose from our fleet of Toofan, Ertiga, Innova, Tempo Traveller, and more, complete with professional drivers. Perfect for family trips, business tours, and special occasions. Comfort and reliability guaranteed!" },
    { hid: 'og:image', property: 'og:image', content: BASE_URL+ '/images/og.png' }
  ],
  script: [
    { src: "/js/jquery.js" },
    { src: "/js/bootstrap.min.js" },
    { src: "/js/owl.carousel.min.js" },
    { src: "/js/smoothscroll.js" },
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.gtm.id}`,
      tagPosition: 'head',
      async: true,
    },
  ],
});

onMounted(() => {
  if (window) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag('js', new Date());

    window.gtag('config', runtimeConfig.public.gtm.id);
  }
})

</script>
