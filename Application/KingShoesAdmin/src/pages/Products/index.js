import React, { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { isEmpty } from "lodash"
import "bootstrap/dist/css/bootstrap.min.css"
import TableContainer from "../../components/Common/TableContainer"
import axios from "axios"
//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
  Cell
} from "./Col"

//redux

import {
  Badge,
  Button,
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap"
import ProductDelete from "./ProductDelete"

function Product() {
  //meta title
  document.title = "Products | KingShoe Admin & Dashboard"
  const [modal2, setModal2] = useState(false)
  const [id, setId] = useState()


  // validation

    const [ items, setItems ] = useState([])
    const [ category, setCategory ] = useState([])
    const [defaultData, setDefaultData] = useState({
      name: '',
      price: '',
      sku: '',
      description: '',
      categoryId: '',
    })
    const [daAdd, setDaAdd] = useState({
      name: '',
      price: '',
      sku: '',
      description: '',
      categoryId: 1,
    })
    const [daEdit, setDaEdit] = useState({
      name: '',
      price: '',
      sku: '',
      description: '',
      categoryId: '',
    })
    const [path, setpath] = useState();
  const fetchData = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:3113/get-all-products-enable',
    },
    config2 = {
      method: 'get',
      url: 'http://localhost:3113/get-all-categories',
    },
    config3 = {
      method: 'get',
      url: 'http://localhost:3113/get-all-categories-enable',
    }
    axios(config3)
    .then(function (res) {
      setCategory(res.data)
    })
    .catch(function (error) {
      console.log(error)
    });
    axios(config2)
      .then(function (response) {
        axios(config)
        .then(function (res) {
          const newArr = res.data.map(object => {
              return {...object, category: response.data.find(x=>x.entityId == object.categoryId)};
          });
          var i = 1;
          const arr = []
          newArr.forEach(element => {
            const obj = {
              no: i,
              ...element
            }
            i++
            arr.push(obj)
          });
          setItems(arr)
        })
        .catch(function (error) {
          console.log(error)
        });
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  useEffect(() => {
    fetchData()
},[])
const toggleViewModal = (e) => {
  document.querySelector('.opAll').style.display = "block"
  document.querySelector('.edit-modal').style.display = "block"
  setTimeout(() => {
  document.querySelector('.edit-modal').style.opacity = "1"
  document.querySelector('.opAll').style.opacity = ".5"
}, 100);
setDaEdit(prev=>({
    ...prev,
    id: e!=undefined?e.target.dataset.id:0,
    name: e!=undefined?e.target.dataset.name:null,
    price: e!=undefined?e.target.dataset.price:null,
    sku: e!=undefined?e.target.dataset.sku:null,
    description: e!=undefined?e.target.dataset.description:null,
    categoryId: e!=undefined?e.target.dataset.categoryid:null,
  }))
  setDefaultData(prev=>({
    ...prev,
    id: e!=undefined?e.target.dataset.id:0,
    name: e!=undefined?e.target.dataset.name:null,
    price: e!=undefined?e.target.dataset.price:null,
    sku: e!=undefined?e.target.dataset.sku:null,
    description: e!=undefined?e.target.dataset.description:null,
    categoryId: e!=undefined?e.target.dataset.categoryid:null,
  }))
}
const toggleAddModal = (e) => {
  document.querySelector('.opAll').style.display = "block"
  document.querySelector('.add-modal').style.display = "block"
  setTimeout(() => {
  document.querySelector('.add-modal').style.opacity = "1"
  document.querySelector('.opAll').style.opacity = ".5"
}, 100);
}

const handleClose = ()=> {
  document.getElementById("image")?document.getElementById("image").value = "":null;
  document.querySelector('.opAll').style.opacity = "0"
  document.querySelector('.add-modal').style.opacity = "0"
  document.querySelector('.edit-modal').style.opacity = "0"
  setTimeout(() => {
  document.querySelector('.opAll').style.display = "none"
  document.querySelector('.add-modal').style.display = "none"
  document.querySelector('.edit-modal').style.display = "none"
  }, 500);
  setDaAdd({
    name: '',
    price: '',
    sku: '',
    description: '',
    categoryId: 1,
  })
}
const toggleDeleteModal = (e) => {
  setModal2(!modal2)
  setId(e!=undefined?e.target.dataset.id:0)
  fetchData()

}


  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "no",
        width: "150px",
        style: {
          textAlign: "center",
          width: "10%",
          background: "#0000",
        },
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Price",
        accessor: "price",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Sku",
        accessor: "sku",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Description",
        accessor: "description",
        filterable: true,
        width: "300px",
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Category",
        accessor: "category.name",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Actions",
        accessor: "view",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div>
              <Button
                data-id={cellProps.row.original.entityId}
                data-name={cellProps.row.original.name}
                data-price={cellProps.row.original.price}
                data-sku={cellProps.row.original.sku}
                data-description={cellProps.row.original.description}
                data-category={cellProps.row.original.category?cellProps.row.original.category.name:null}
                data-categoryid={cellProps.row.original.categoryId}
                type="button"
                color="success"
                className="btn-sm btn-rounded"
                style={{margin: '10px 0 0 10px'}}
                onClick={toggleViewModal}
                >
                  Edit
              </Button>
              <Button
                data-id={cellProps.row.original.entityId}
                type="button"
                color="danger"
                className="btn-sm btn-rounded"
                style={{margin: '10px 0 0 10px'}}
                onClick={toggleDeleteModal}
                >
                  Delete
              </Button>
            </div>
          )
          
        },
      }
    ],
    []
  )
  const handleChangeName = async (e) => {
    const { value } = e.target;
    setDaEdit(d => ({
      ...d,
      name: value,
    }))
  }
  const handleChangePrice = (e) => {
    const { value } = e.target;
    setDaEdit(d => ({
      ...d,
      price: value,
    }))
  }
  const handleChangeSku = (e) => {
    const { value } = e.target;
    setDaEdit(d => ({
      ...d,
      sku: value,
    }))
  }
  const handleChangeDes = (e) => {
    const { value } = e.target;
    setDaEdit(d => ({
      ...d,
      description: value,
    }))
  }
  const handleChangeCate = (e) => {
    setDaEdit(d => ({
      ...d,
      categoryId: e.target.value,
    }))
  }
const handleSave = () => {
  if (daEdit.sku != defaultData.sku) {
    if (!checkDuplicate(daEdit.sku) ) {
      if (daEdit.name != "" && daEdit.price != "" && daEdit.sku != "") {
        const dataEdit = {"entityId": daEdit.id,"name": daEdit.name, "price": daEdit.price, "sku": daEdit.sku, "description" : daEdit.description, "categoryId": daEdit.categoryId, "status": 1  }
        axios.post("http://localhost:3113/update-product", {dataEdit})
          .then(function (response) {
            fetchData()
            handleClose()
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert("Name, price or sku can't be empty!")
      }
     
    } else {
      alert("SKU already exist!")
    }
  } else {
    if (daEdit.name != "" && daEdit.price != "" && daEdit.sku != "") {
      const dataEdit = {"entityId": daEdit.id,"name": daEdit.name, "price": daEdit.price, "sku": daEdit.sku, "description" : daEdit.description, "categoryId": daEdit.categoryId , "status": 1 }
      axios.post("http://localhost:3113/update-product", {dataEdit})
        .then(function (response) {
          fetchData()
          handleClose()
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        alert("Name, price or sku can't be empty!")
      }
  }
}

  const handleInputName = async (e) => {
    const { value } = e.target;
    setDaAdd(d => ({
      ...d,
      name: value,
    }))
  }
  const handleInputPrice = (e) => {
    const { value } = e.target;
    setDaAdd(d => ({
      ...d,
      price: value,
    }))
  }
  const handleInputSku = (e) => {
    const { value } = e.target;
    setDaAdd(d => ({
      ...d,
      sku: value,
    }))
  }
  const handleInputDes = (e) => {
    const { value } = e.target;
    setDaAdd(d => ({
      ...d,
      description: value,
    }))
  }
  const handleInputCate = (e) => {
    setDaAdd(d => ({
      ...d,
      categoryId: e.target.value,
    }))
  }

  const checkDuplicate = (sku) => {
    console.log(items.find(x=>x.sku == sku))
    if (items.find(x => x.sku == sku) ) {
      return true;
    } else {
      return false
    }

  }
  const handleSaveAdd = () => {
    checkDuplicate(daAdd.sku)
    if (!checkDuplicate(daAdd.sku) ) {
      if (daAdd.name != "" && daAdd.price != "" && daAdd.sku != "") {
        const dataEdit = {"entityId": daAdd.id,"name": daAdd.name, "price": daAdd.price, "sku": daAdd.sku, "description" : daAdd.description, "categoryId": daAdd.categoryId , "status": 1 }
        axios.post("http://localhost:3113/add-product", {dataEdit})
          .then(function (response) {
            handleClose()
            fetchData()
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          alert("Name, price or sku can't be empty!")
        }
    } else {
      alert("SKU already exist!")
    }
  }
  return (
    <React.Fragment>
      <ProductDelete isOpen={modal2} id={id} toggle={toggleDeleteModal} />
      <div className="page-content">
        <div className="edit-modal" style={{
            width:'40%',
            position:'fixed',
            top: '50%',
            zIndex: '1056',
            background: 'white',
            borderRadius: '0.4rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border :'1px solid #f6f6f6',
            display: 'none',
            opacity: 0,
            transition: 'opacity .5s'
          }}>
          <h5 style={{padding:'20px 10px', borderBottom: '1px solid #eff2f7'}}>Edit Product: {defaultData.name}</h5>
            <div style={{padding:'10px 10px', borderBottom: '1px solid #eff2f7'}}>
            <table width={'100%'}>
                <tbody>
                  <tr className="name">
                    <td>
                      <label htmlFor="name">Category Name</label>
                    </td>
                    <td>
                      <input style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daEdit.name} onChange={handleChangeName} id="name" type='text'/>
                    </td>
                  </tr>
                  <tr className="price">
                    <td>
                      <label htmlFor="name">Price</label>
                    </td>
                    <td>
                      <input style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daEdit.price}  onChange={handleChangePrice} id="price" type='number'/>
                    </td>
                  </tr>
                  <tr className="sku">
                    <td>
                      <label htmlFor="name">Sku</label>
                    </td>
                    <td>
                      <input style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daEdit.sku} onChange={handleChangeSku} id="sku" type='text'/>
                    </td>
                  </tr>
                  <tr className="description">
                    <td>
                      <label htmlFor="name">Description</label>
                    </td>
                    <td>
                      <textarea rows={10} style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daEdit.description} onChange={handleChangeDes} id="desc" type='text'>

                      </textarea>
                    </td>
                  </tr>
                  <tr className="category">
                    <td>
                      <label htmlFor="name">Category</label>
                    </td>
                    <td>
                      <select style={{padding: '5px', width: '100%', margin: '10px 0'}} onChange={handleChangeCate} value={daEdit.categoryId}>
                          {category.map((item) => (
                            <option key={item.entityId} value={item.entityId}>{item.name}</option>
                          ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              <div style={{padding:'20px 10px'}}>
              <Button type="button" color="success" onClick={handleSave}>
                Save
              </Button>
              <Button style={{margin:'0px 10px'}} type="button" color="secondary" onClick={handleClose}>
                Close
              </Button>
              </div>
        </div>
        <div className="add-modal" style={{
            width:'40%',
            position:'fixed',
            top: '50%',
            zIndex: '1056',
            background: 'white',
            borderRadius: '0.4rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border :'1px solid #f6f6f6',
            display: 'none',
            opacity: 0,
            transition: 'opacity .5s'
          }}>
          <h5 style={{padding:'20px 10px', borderBottom: '1px solid #eff2f7'}}>Add Product</h5>
            <div style={{padding:'10px 10px', borderBottom: '1px solid #eff2f7'}}>
            <table width={'100%'}>
                <tbody>
                  <tr className="name">
                    <td>
                      <label htmlFor="name">Category Name</label>
                    </td>
                    <td>
                      <input style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daAdd.name} onChange={handleInputName} id="name" type='text'/>
                    </td>
                  </tr>
                  <tr className="price">
                    <td>
                      <label htmlFor="name">Price</label>
                    </td>
                    <td>
                      <input style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daAdd.price}  onChange={handleInputPrice} id="price" type='number'/>
                    </td>
                  </tr>
                  <tr className="sku">
                    <td>
                      <label htmlFor="name">Sku</label>
                    </td>
                    <td>
                      <input style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daAdd.sku} onChange={handleInputSku} id="sku" type='text'/>
                    </td>
                  </tr>
                  <tr className="description">
                    <td>
                      <label htmlFor="name">Description</label>
                    </td>
                    <td>
                      <textarea rows={10} style={{padding: '5px', width: '100%', margin: '10px 0'}} value={daAdd.description} onChange={handleInputDes} id="desc" type='text'>

                      </textarea>
                    </td>
                  </tr>
                  <tr className="category">
                    <td>
                      <label htmlFor="name">Category</label>
                    </td>
                    <td>
                      <select style={{padding: '5px', width: '100%', margin: '10px 0'}} onChange={handleInputCate} value={daAdd.categoryId}>
                          {category.map((item) => (
                            <option key={item.entityId} value={item.entityId}>{item.name}</option>
                          ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              <div style={{padding:'20px 10px'}}>
              <Button type="button" color="success" onClick={handleSaveAdd}>
                Save
              </Button>
              <Button style={{margin:'0px 10px'}} type="button" color="secondary" onClick={handleClose}>
                Close
              </Button>
              </div>
        </div>
        <div className="container-fluid">
          <Breadcrumbs title="Admin" breadcrumbItem="Category" />
          <Row>

            <Col xs="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={items}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    isAddCategory={true}
                    handleCategoryClick={toggleAddModal}
                    customPageSize={10}
                    className="custom-header-css"
                  />

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="opAll"  style={{
          position:'fixed',
          top: '0',
          zIndex: '1055',
          background: 'black',
          left: '0',
          width: '100%',
          height: '100%',
          opacity: 0,
          display: 'none',
          transition: 'opacity .5s'
        }}
        onClick={handleClose}
        ></div>
      </div>
    </React.Fragment>
  )
}
Product.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default Product
