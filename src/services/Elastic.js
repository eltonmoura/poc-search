import axios from 'axios';

const client = axios.create({
  baseURL: '',
  timeout: 5000
});

class Elastic {
  static async search(term) {
    try {
      const token = '';
      const resp = await client.get(`/${path}?_start=${page}&_limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return resp.data;
    } catch (error) {
      
    }
  }
}

export default Elastic;
