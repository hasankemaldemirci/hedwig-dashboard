<template>
  <div class="dashboard">
    <NavBar />
    <div class="dashboard__metrics">
      <div class="container">
        <div class="flex-row">
          <div class="flex-row__column flex-row__column--3">
            <ActiveUsersCard />
          </div>
          <div class="flex-row__column flex-row__column--3">
            <DownloadsCard />
          </div>
          <div class="flex-row__column flex-row__column--3">
            <SessionDurationCard />
          </div>
          <div class="flex-row__column flex-row__column--3">
            <PaidUsersCard />
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
// Components
import NavBar from "../components/NavBar";
import ActiveUsersCard from "../components/ActiveUsersCard";
import DownloadsCard from "../components/DownloadsCard";
import SessionDurationCard from "../components/SessionDurationCard";
import PaidUsersCard from "../components/PaidUsersCard";
import DailyActiveUsersChart from "../components/DailyActiveUsersChart";
import DailyInstallsChart from "../components/DailyInstallsChart";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    ActiveUsersCard,
    DownloadsCard,
    SessionDurationCard,
    PaidUsersCard,
    DailyActiveUsersChart,
    DailyInstallsChart
  }
};
</script>

<style lang="scss">
.dashboard {
  padding-bottom: 30px;
}
</style>
