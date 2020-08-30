<template>
  <div class="chart-card chart-card--installs">
    <h2>
      <font-awesome-icon icon="chart-bar" :style="{ color: '#d05bc5' }" />
      Daily Installs
    </h2>
    <LineChart
      v-if="isChartLoaded"
      :chartdata="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { getDailyInstalls } from "../app/api/requests";

// Line Chart
import LineChart from "./LineChart.vue";

export default {
  name: "DailyInstallChart",
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
      const dailyInstalls = await getDailyInstalls();

      const labels = dailyInstalls.days;
      const datasets = dailyInstalls.userCount;

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
