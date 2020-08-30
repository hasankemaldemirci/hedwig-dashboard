<template>
  <div class="chart-card">
    <h2>
      <font-awesome-icon icon="chart-bar" :style="{ color: '#d05bc5' }" />
      Daily Active Users
    </h2>
    <LineChart
      v-if="isChartLoaded"
      :chartdata="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { getDailyActiveUsers } from "../app/api/requests";

// Line Chart
import LineChart from "./LineChart.vue";

export default {
  name: "DailyActiveUsersChart",
  components: { LineChart },
  data() {
    return {
      isChartLoaded: false,
      chartData: {},
      chartOptions: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      },
      error: null
    };
  },
  async mounted() {
    try {
      const dailyActiveUsers = await getDailyActiveUsers();

      const labels = dailyActiveUsers.days;
      const datasets = dailyActiveUsers.userCount;

      this.chartData = {
        labels,
        datasets: [
          {
            data: datasets,
            backgroundColor: "rgba(52, 55, 104, .4)",
            borderWidth: 2,
            borderColor: "rgba(177, 95, 229, 1)"
          }
        ]
      };
    } catch (error) {
      this.error = error;
    } finally {
      this.isChartLoaded = true;
    }
  }
};
</script>
