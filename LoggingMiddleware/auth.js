const axios = require("axios");

const AUTH_SERVICE_URL = "http://20.244.56.144/evaluation-service/auth";

async function fetchAccessToken() {
  const userCredentials = {
    email: "sneha.kohli23@lpu.in",
    name: "Sneha Kohli",
    rollNo: "12302118",
    accessCode: "CZypQK",
    clientID: "1",
    clientSecret: "123",
  };

  try {
    const response = await axios.post(AUTH_SERVICE_URL, userCredentials);
    return response.data.access_token;
  } catch (err) {
    console.error("Authentication error:", err.message);
    return null;
  }
}

module.exports = { fetchAccessToken };
