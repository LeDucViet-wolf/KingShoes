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
    callback(null, '../../../Application/KingShoesWeb/public/img/category');
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

app.post('/uploadCateImage', async (req, res) => {

  upload(req, res, function (err) {
    if (err) {
      res.status(201).send(err.message)
    } else {
      res.json("http://127.0.0.1:5173/public/img/category/"+req.file.filename.replace(/ /g, "%20"))
    }
  })
})
app.get('/login', async (req, res) => {
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

  app.get('/get-all-products-enable', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/products/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data.filter(x=>x.status == 1))
      })
      .catch(err => {
      })
  })

  app.post('/update-category', async (req, res) => {
      var config = {
        method: 'put',
        url: 'http://localhost:8080/KingShoesApi/api/categories/update/'+req.body.dataEdit.entityId,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(req.body.dataEdit)
      };
      
      axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  })

  
  app.post('/update-product', async (req, res) => {
    var config = {
      method: 'put',
      url: 'http://localhost:8080/KingShoesApi/api/products/update/'+req.body.dataEdit.entityId,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(req.body.dataEdit)
    };
    
    axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
})
  app.post('/add-category', async (req, res) => {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/KingShoesApi/api/categories/insert/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(req.body.dataEdit)
    };
    
    axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
})

app.post('/add-product', async (req, res) => {
  var config = {
    method: 'post',
    url: 'http://localhost:8080/KingShoesApi/api/products/insert/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(req.body.dataEdit)
  };
  
  axios(config)
  .then(function (response) {
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

  app.get('/get-all-categories', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/categories/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  app.get('/get-all-orders', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/orders/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  
  app.get('/get-all-ships', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/shipping-methods/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  
  app.get('/get-all-payments', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/payment-methods/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  app.get('/get-all-related', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/related-products/get-all",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  app.get('/get-all-categories-enable', async (req, res) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/KingShoesApi/api/categories/get-list-category-enable",
    }
    axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(err => {
      })
  })

  app.post('/disable-category', async (req, res) => {

    var config = {
      method: 'put',
      url: 'http://localhost:8080/KingShoesApi/api/categories/disableCategory/'+req.body.idCate,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  })

  app.post('/disable-product', async (req, res) => {
    var config = {
      method: 'put',
      url: 'http://localhost:8080/KingShoesApi/api/products/disableProduct/'+req.body.id,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})