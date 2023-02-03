import axios from 'axios';
import { DIGITAL_HOUSE_API } from '../../environments';

const instance = axios.create({
  baseURL: DIGITAL_HOUSE_API,
});

export default instance;
