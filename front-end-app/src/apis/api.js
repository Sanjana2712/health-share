let API_URL;

if (process.env.REACT_APP_ENVIRONMENT === "development") {
  API_URL = "http://localhost:3003";
} else {
  API_URL = ""; // or whatever your production API URL is
}

export default API_URL;
