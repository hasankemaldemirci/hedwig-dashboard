<template>
  <div class="metrics-card">
    <div class="metrics-card__content">
      <div class="icon icon--download">
        <font-awesome-icon
          icon="download"
          size="lg"
          :style="{ color: '#fff' }"
        />
      </div>
      <div class="description">
        <div class="description__title">Downloads</div>
        <div class="description__count">{{ downloadsCount }}</div>
      </div>
    </div>
    <div class="metrics-card__footer">
      <button @click="$store.dispatch('fetchDownloadsCount')">
        <font-awesome-icon icon="redo" />
        Total view count
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DownloadsCard",
  mounted() {
    this.$store.dispatch("fetchDownloadsCount");
  },
  computed: {
    ...mapGetters(["downloadsCount"])
  }
};
</script>
