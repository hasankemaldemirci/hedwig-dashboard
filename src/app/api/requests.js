import axios from "axios";

const token = localStorage.getItem("token");
const apiURL = process.env.VUE_APP_API_URL;
const headers = { Authorization: `idToken ${token}` }

export async function getActiveUsersCount() {
  const response = await axios({
    url: `${apiURL}/rt/activeUsers`,
    headers
  });

  return response.data.payload.activeUsers;
}

export async function getDownloadsCount() {
  const response = await axios({
    url: `${apiURL}/rt/downloads`,
    headers
  });

  return response.data.payload.downloads;
}

export async function getAvgSessionDuration() {
  const response = await axios({
    url: `${apiURL}/rt/sessionDuration`,
    headers
  });

  return response.data.payload.avgSessionDuration;
}

export async function getPaidUsersCount() {
  const response = await axios({
    url: `${apiURL}/rt/paidUsers`,
    headers
  });

  return response.data.payload.paidUsers;
}

export async function getDailyActiveUsers() {
  const response = await axios({
    url: `${apiURL}/daily/activeUsers`,
    headers
  });

  const result = response.data.payload.data;

  const days = Object.entries(result).map(key => key[0]);
  const userCount = Object.entries(result).map(key => key[1]);

  const dailyActiveUsers = { days, userCount };

  return dailyActiveUsers;
}

export async function getDailyInstalls() {
  const response = await axios({
    url: `${apiURL}/daily/downloads`,
    headers
  });

  const result = response.data.payload.data;

  const days = Object.entries(result).map(key => key[0]);
  const userCount = Object.entries(result).map(key => key[1]);

  const dailyInstalls = { days, userCount };

  return dailyInstalls;
}
