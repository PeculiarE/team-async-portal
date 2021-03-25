// import * as axios from 'axios';

// const BASE_URL = 'http://localhost:8080';

// function upload(formData) {
//   const url = `${BASE_URL}/photos/upload`;
//   return axios.post(url, formData)
//     .then((x) => x.data)
//     .then((x) => x.map((img) => ({ ...img, url: `${BASE_URL}/images/${img.id}` })));
// }

// export default upload;

import * as axios from 'axios';

const BASE_URL = 'http://localhost:8080';

function upload(formData) {
  const url = `${BASE_URL}/photos/upload`;
  return axios.post(url, formData)
  // get data
    .then((x) => x.data)
  // add url field
    .then((x) => x.map((img) => ({ ...img, url: `${BASE_URL}/images/${img.id}` })));
}

export default upload;
