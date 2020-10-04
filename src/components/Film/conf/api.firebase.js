import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://films-cb930.firebaseio.com/'
});

export default apiFirebase;