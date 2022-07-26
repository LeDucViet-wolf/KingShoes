import axios from 'axios'

export const createPdf = async () => {
  axios.post('http://localhost:3111/createPdf',data)
  .then(res=>window.open(res.data.path, '_blank'))
  .catch(error=>console.log(error))
};
