import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '81517a2c5dc14b93b3310c68bd1830cd'
  }
})