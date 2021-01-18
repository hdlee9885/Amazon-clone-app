import axios from "axios";

const instance = axios.create({
  // the API (cloud function) URL
  baseURL: 'https://us-central1-ama-clone-9885.cloudfunctions.net/api'
//   baseURL: 'http://localhost:5001/ama-clone-9885/us-central1/api'
});

export default instance;