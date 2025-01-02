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
  </div>
</template>
<script setup lang="ts">
useHead({
  title: SITE_TITLE,
  meta: [{ name: "description", content: "Best travel agent in Kutch" }],
  script: [
    { src: "/js/jquery.js" },
    { src: "/js/bootstrap.min.js" },
    { src: "/js/owl.carousel.min.js" },
    { src: "/js/smoothscroll.js" },
    { src: "/js/custom.js" },
    { src: "/js/contact.js" },
  ],
});
</script>
