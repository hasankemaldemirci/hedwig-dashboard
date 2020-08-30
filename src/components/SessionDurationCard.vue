<template>
  <div class="metrics-card">
    <div class="metrics-card__content">
      <div class="icon icon--view-count">
        <font-awesome-icon icon="eye" size="lg" :style="{ color: '#fff' }" />
      </div>
      <div class="description">
        <div class="description__title">Avg. Session Duration</div>
        <div class="description__count">{{ avgSessionDuration }} mins</div>
      </div>
    </div>
    <div class="metrics-card__footer">
      <button @click="$store.dispatch('fetchAvgSessionDuration')">
        <font-awesome-icon icon="redo" />
        Total view count
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SessionDurationCard",
  mounted() {
    this.$store.dispatch("fetchAvgSessionDuration");
  },
  computed: {
    ...mapGetters(["avgSessionDuration"])
  }
};
</script>
