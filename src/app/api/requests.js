import axios from "axios";

const apiURL = process.env.VUE_APP_API_URL;

export async function getActiveUsersCount() {
  const response = await axios(`${apiURL}/rt/activeUsers`);

  return response.data.payload.activeUsers;
}

export async function getDownloadsCount() {
  const response = await axios(`${apiURL}/rt/downloads`);

  return response.data.payload.downloads;
}

export async function getAvgSessionDuration() {
  const response = await axios(`${apiURL}/rt/sessionDuration`);

  return response.data.payload.avgSessionDuration;
}

export async function getPaidUsersCount() {
  const response = await axios(`${apiURL}/rt/paidUsers`);

  return response.data.payload.paidUsers;
}

export async function getDailyActiveUsers() {
  const response = await axios(`${apiURL}/daily/activeUsers`);

  const result = response.data.payload.data;

  const days = Object.entries(result).map(key => key[0]);
  const userCount = Object.entries(result).map(key => key[1]);

  const dailyActiveUsers = { days, userCount };

  return dailyActiveUsers;
}

export async function getDailyInstalls() {
  const response = await axios(`${apiURL}/daily/downloads`);

  const result = response.data.payload.data;

  const days = Object.entries(result).map(key => key[0]);
  const userCount = Object.entries(result).map(key => key[1]);

  const dailyInstalls = { days, userCount };

  return dailyInstalls;
}
