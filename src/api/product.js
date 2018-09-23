import axios from 'axios';
import { API } from '../environment';

export default {
  getProducts: () => axios.get(`${API}/api/product`),
};
