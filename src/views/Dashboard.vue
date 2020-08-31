<template>
  <div class="dashboard">
    <NavBar />
    <div class="dashboard__metrics">
      <div class="container">
        <div class="flex-row">
          <div
            class="flex-row__column flex-row__column--3"
            v-for="(data, index) in realTimeData"
            :key="index"
          >
            <MetricsCard :data="data" />
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard__charts">
      <div class="container">
        <DailyActiveUsersChart />
        <DailyInstallsChart />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import NavBar from "../components/NavBar";
import MetricsCard from "../components/MetricsCard";
import DailyActiveUsersChart from "../components/DailyActiveUsersChart";
import DailyInstallsChart from "../components/DailyInstallsChart";

export default {
  name: "Dashboard",
  data() {
    return {
      timerId: 0
    };
  },
  components: {
    NavBar,
    MetricsCard,
    DailyActiveUsersChart,
    DailyInstallsChart
  },
  mounted() {
    this.fetchRealTimeData();
    this.timerId = setInterval(this.fetchRealTimeData, 10000);
  },
  beforeDestroy() {
    clearInterval(this.timerId);
  },
  computed: {
    ...mapGetters(["realTimeData"])
  },
  methods: {
    fetchRealTimeData() {
      this.$store.dispatch("fetchActiveUsersCount");
      this.$store.dispatch("fetchDownloadsCount");
      this.$store.dispatch("fetchAvgSessionDuration");
      this.$store.dispatch("fetchPaidUsersCount");
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding-bottom: 40px;
}
</style>
