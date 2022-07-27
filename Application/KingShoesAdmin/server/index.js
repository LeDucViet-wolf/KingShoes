import express from "express";
import "dotenv/config";
import axios from "axios";
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer'

const app = express();
const port = process.env.PORT;



var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({
  storage: storage,
}).single('uploaded_file');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.static('public'));

app.get('/signDraw', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/users/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  app.get('/get-all-customers', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/customers/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  app.get('/get-all-products', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/products/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})