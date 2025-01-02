<template>
  <div class="tcontainer">
    <div class="rating-card">
      <header class="header">
        <img
          src="/images/logo192.png"
          :alt="SITE_NAME + ' Logo'"
          class="logo"
        />
        <h1 class="company-name">{{ SITE_NAME }}</h1>
      </header>
      <h2 class="rating-title">Rate Your Experience</h2>
      <div class="star-container">
        <button
          v-for="star in 5"
          :key="star"
          @click="rate(star)"
          @mouseenter="hoverRating = star"
          @mouseleave="hoverRating = 0"
          class="star-button"
          :class="{
            'star-filled': star <= (hoverRating || rating),
            'star-empty': star > (hoverRating || rating),
          }"
        >
          <Star
            :fill="star <= (hoverRating || rating) ? 'currentColor' : 'white'"
            class="star-icon"
          />
        </button>
      </div>
      <p class="rating-text">
        {{ ratingText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Star } from "lucide-vue-next";

const rating = ref(0);
const hoverRating = ref(0);

const ratingText = computed(() => {
  if (rating.value === 0) return "Click a star to rate";
  return "Thank you for your feedback!";
});

const rate = (value) => {
  rating.value = value;
  if (value >= 4) {
    setTimeout(() => {
      window.location.href = RATING_URL;
    }, 0); // Redirect after 1 second
  }
};
</script>

<style scoped>

.tcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
}

.rating-card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 28rem;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin-bottom: 1rem;
  width: 15rem;
  height: 15rem;
}

.company-name {
  font-size: 1.875rem;
  font-weight: bold;
  color: var(--color-primary);
}

.rating-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #1f2937;
}

.star-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.star-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.star-button:focus {
  outline: none;
}

.star-filled {
  color: #fbbf24;
}

.star-empty {
  color: #d1d5db;
}

.star-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.rating-text {
  margin-top: 1rem;
  text-align: center;
  color: #4b5563;
}
</style>
