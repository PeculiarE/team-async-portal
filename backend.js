import axios from 'axios';

export default axios.create({
  baseURL: 'https://async-backend.herokuapp.com/adminverify',
});

// verifyUrl: 'https://async-backend.herokuapp.com/userverify',
// export default axios.create({
// });
