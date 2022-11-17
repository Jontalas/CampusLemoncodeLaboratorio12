import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/login`;
console.log(url);
export const isValidLogin = (login) =>
  Axios.post(url, login).then(({ data }) => data);
