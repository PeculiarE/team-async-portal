import axios from 'axios';

export default axios.create({
  baseURL: 'https://async-peks.herokuapp.com/adminverify',
});

// verifyUrl: 'https://async-peks.herokuapp.com/userverify',
// export default axios.create({
// });
