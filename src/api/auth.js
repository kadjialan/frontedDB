import httpClient from './axios';

function register(user) {
  return httpClient.post(`users`, user);
}

export default register;
