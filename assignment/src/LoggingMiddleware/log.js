const axios = require("axios");

const LOG_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";

let authToken = "";

async function sendLog(stack, level, pkg, msg) {
  try {
    const response = await axios.post(
      LOG_ENDPOINT,
      { stack, level, pkg, msg },
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Log sending failed:", error.message);
  }
}

function setAuthToken(token) {
  authToken = token;
}

module.exports = {
  sendLog,
  setAuthToken,
};
