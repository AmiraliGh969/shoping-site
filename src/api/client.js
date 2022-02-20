import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

export const client = axios.create({
  baseURL: 'https://fakestoreapi.com/'
});

client.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
});

// api axios mockups
mock.onGet("/coins").reply(200, {
  data: ['btc', 'eth']
});