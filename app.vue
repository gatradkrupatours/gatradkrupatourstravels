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
const gtmId = process.env.NODE_ENV === "production" ? "G-4Q3N91R954" : "G-4K4Q0S4G7N"
useHead({
  title: SITE_TITLE,
  meta: [
    { name: "description", content: SITE_DESCRIPTION },
    { name: "application-name", content: SITE_TITLE },
    { hid: 'og:title', property: "og:title", content: SITE_TITLE },
    { hid: 'og:description', property: "og:description", content: SITE_DESCRIPTION },
    { hid: 'og:url', property: "og:url", content: BASE_URL },
    { hid: 'og:image', property: 'og:image', content: OG_IMAGE },
    { hid: 'og:type', property: "og:type", content: 'website' },
    { name: "twitter:card", content: 'summary_large_image' },
    { name: "twitter:title", content: SITE_TITLE },
    { name: "twitter:description", content: SITE_DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
  ],
  script: [
    { src: "/js/jquery.js" },
    { src: "/js/bootstrap.min.js" },
    { src: "/js/owl.carousel.min.js" },
    { src: "/js/smoothscroll.js" },
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${gtmId}`,
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

    window.gtag('config', gtmId);
  }
})
</script>
