<template>
  <div class="metrics-card">
    <div class="metrics-card__content">
      <div class="icon icon--paid-users">
        <font-awesome-icon
          icon="download"
          size="lg"
          :style="{ color: '#fff' }"
        />
      </div>
      <div class="description">
        <div class="description__title">Paid Users</div>
        <div class="description__count">{{ paidUsersCount }}</div>
      </div>
    </div>
    <div class="metrics-card__footer">
      <button @click="$store.dispatch('fetchPaidUsersCount')">
        <font-awesome-icon icon="redo" />
        Total paying user count
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PaidUsersCard",
  mounted() {
    this.$store.dispatch("fetchPaidUsersCount");
  },
  computed: {
    ...mapGetters(["paidUsersCount"])
  }
};
</script>
