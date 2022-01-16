import axios from 'axios';
import dotenv from 'dotenv-defaults';

dotenv.config();

const instance = axios.create({
  baseURL: `https://ntu-monkey.herokuapp.com/api`,
});

export default instance;
