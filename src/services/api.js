import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:8000/api/post',
});

export default baseApi;
