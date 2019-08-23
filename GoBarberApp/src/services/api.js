import axios from 'axios';

/**
 * baseURL: 'http://COMPUTER_IP:3333'
 * In your terminal: adb reverse tcp:3333 tcp:3333 to use localhost instead COMPUTER_IP
 */
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
