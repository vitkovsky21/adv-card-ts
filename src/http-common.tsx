import axios from "axios";

export default axios.create({
  baseURL: "https://6075786f0baf7c0017fa64ce.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});