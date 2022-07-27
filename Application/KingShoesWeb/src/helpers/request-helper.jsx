import axios from 'axios';

function customRequest() 
{
    debugger
    // For GET requests
axios.interceptors.request.use(
    (req) => {
     req.headers.Authorization =  "hhehe";
     console.log(req);
       // Add configurations here
       return req;
    },
    (err) => {
       return Promise.reject(err);
    }
 );
 
 // For POST requests
 axios.interceptors.response.use(
    (res) => {
       // Add configurations here
       debugger
       res.headers.Authorization =  "hhehe";
       if (res.status === 201) {
          console.log('Posted Successfully');
       }
       return res;
    },
    (err) => {
       return Promise.reject(err);
    }
 );
}

export default customRequest; 