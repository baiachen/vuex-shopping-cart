import axios from 'axios';
import { API } from '../environment';

export default {
  fetchProducts: () => axios.get(`${API}/products`),
};
