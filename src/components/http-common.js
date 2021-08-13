import axios from 'axios';

export default axios.create({
  baseURL: '"https://api.cloudinary.com/v1_1/buddhikap2016/image/upload',
  headers: {
    'Content-type': 'application/json',
  },
});
