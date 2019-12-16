import axios from 'axios';
/* global */
export async function fetchData(URL) {
  const response = await axios.get(URL);
  const { data } = response.data;
  return data;
}

export async function postData(URL, obj) {
  const response = await axios.post(URL, obj);
  // eslint-disable-next-line no-console
  console.log(response);
}
