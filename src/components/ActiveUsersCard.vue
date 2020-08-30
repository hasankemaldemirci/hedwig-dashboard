<template>
  <div class="metrics-card">
    <div class="metrics-card__content">
      <div class="icon icon--user-count">
        <font-awesome-icon icon="user" size="lg" :style="{ color: '#fff' }" />
      </div>
      <div class="description">
        <div class="description__title">Active Users</div>
        <div class="description__count">{{ activeUsersCount }}</div>
      </div>
    </div>
    <div class="metrics-card__footer">
      <button @click="$store.dispatch('fetchActiveUsersCount')">
        <font-awesome-icon icon="redo" />
        Live user account
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ActiveUsersCard",
  mounted() {
    this.$store.dispatch("fetchActiveUsersCount");
  },
  computed: {
    ...mapGetters(["activeUsersCount"])
  }
};
</script>
