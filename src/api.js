import axios from 'axios';
import dotenv from 'dotenv-defaults';

dotenv.config();
const port = process.env.PORT || 4000;

const instance = axios.create({
  baseURL: `https://ntu-monkey.herokuapp.com:${port}/api`,
});

export default instance;
