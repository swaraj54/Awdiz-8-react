import axios from "axios";

let currentMode = "PROD"; // process.env.mode
let currentBackendUrl = "";
if (currentMode == "PROD") {
  currentBackendUrl = "https://awdiz-8th-batch-backend.onrender.com/api/v1";
} else if (currentMode == "NONPROD") {
  currentBackendUrl = "https://awdiz-8th-batch-backend.onrender.com/api/v1";
} else {
  currentBackendUrl = "http://localhost:8000/api/v1";
}

const api = axios.create({
  //   baseURL: process.env.DEVBACKENDURL,
  baseURL: currentBackendUrl,
  withCredentials: true,
});

export default api;

// dev  -> development - developers -> localhost:3000, localhost:8000
// nonprod  -> testing -> testers -> myntra.co -> vpn , myntra.co , myntra-api.co
// prod -> public -> myntra.com -> for all , myntra.com , myntra-api.com
