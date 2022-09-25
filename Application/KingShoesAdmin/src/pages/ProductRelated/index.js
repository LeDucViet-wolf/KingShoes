import React, { useEffect, useMemo, useState } from "react"
import PropTypes, { element } from "prop-types"
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
  Button,
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap"

function ProductRelated() {
  //meta title
  document.title = "Related Products | KingShoe Admin & Dashboard"
  // validation

    const [ items, setItems ] = useState([])
    const [ products, setProducts ] = useState([])
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
  const fetchData = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:3113/get-all-products-enable',
    },
    config3 = {
      method: 'get',
      url: 'http://localhost:3113/get-all-related',
    }
    axios(config3)
    .then(function (resp) {
        axios(config)
        .then(function (res) {
          var i = 1;
          const arr = []
          const arr2 = []
          setProducts(res.data)
          res.data.forEach(element => {
            const array = []
            resp.data.filter(x=>x.productId == element.entityId).forEach(e=>{
              array.push(e.relatedProductId)
            })
            const middleArr = []

            array.forEach(el => {
              middleArr.push(res.data.find(x=>x.entityId === el).name)
            })
            const relateObj = Object.assign({},middleArr)
            const relateObj2 = Object.assign({},array)
            const obj2 = {
              no: i,
              relatedProduct: relateObj2,
              ...element
            }

            const obj = {
              no: i,
              relatedProduct: relateObj,
              ...element
            }
            i++
            arr.push(obj)
            arr2.push(obj2)
          });
          setItems(arr)
          setProducts(arr2)
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
  
// console.log(items)
const toggleViewModal = (e) => {
  document.querySelector('.opAll').style.display = "block"
  document.querySelector('.edit-modal').style.display = "block"
  setTimeout(() => {
  document.querySelector('.edit-modal').style.opacity = "1"
  document.querySelector('.opAll').style.opacity = ".5"
  }, 100);
  console.log(products?products.find(x => x.entityId == e.target.dataset.id):null)
  setDefaultData(prev=>({
    ...prev,
    id: e!=undefined?e.target.dataset.id:0,
    name: e!=undefined?e.target.dataset.name:null,
  }))
}

const handleClose = ()=> {
  document.querySelector('.opAll').style.opacity = "0"
  document.querySelector('.edit-modal').style.opacity = "0"
  setTimeout(() => {
  document.querySelector('.opAll').style.display = "none"
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
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "no",
        width: "1",
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
        Header: "Related Products",
        accessor: "relatedProduct",
        filterable: true,
        Cell: cellProps => {
          var array = array = Object.keys(cellProps.row.original.relatedProduct).map(function(key) { return cellProps.row.original.relatedProduct[key]})
            return (
              <div style={{display:'flex', flexWrap:'wrap'}}>
                  {array.map((item, index) => (
                    <div style={{padding: '2px 5px', background:'lightGray', margin:"2px", borderRadius:'5px'}} key={index}>{item}</div>
                  ))}
              </div>
            )
            
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
                type="button"
                color="success"
                className="btn-sm btn-rounded"
                style={{margin: '10px 0 0 10px'}}
                onClick={toggleViewModal}
                >
                  Edit
              </Button>
            </div>
          )
          
        },
      }
    ],
    []
  )
  
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
            transition: 'opacity .5s',
          }}>
          <h5 style={{padding:'20px 10px', borderBottom: '1px solid #eff2f7'}}>Change Related Products for <span style={{color: 'Red'}}>{defaultData.name}</span></h5>
            <div style={{padding:'10px 10px', borderBottom: '1px solid #eff2f7', overflowY: 'scroll', height: '700px'}}>
              <table width={'100%'} style={{width: '100%'}}>
                <tbody>
                  <tr style={{background: '#EFF2F7'}}>
                    <th style={{border: '1px solid #EFF2F7', padding: '10px'}}>Product</th>
                    <th style={{border: '1px solid #EFF2F7', textAlign:'center'}}>
                      <input type='checkbox'></input>
                    </th>
                  </tr>
                  {products.map((item, index) => (
                      <tr key={index}>
                        <td style={{border: '1px solid #EFF2F7', padding: '10px'}}>{item.name}</td>
                        <td style={{border: '1px solid #EFF2F7', textAlign:'center'}}>
                          <input type='checkbox'></input>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
              <div style={{padding:'20px 10px'}}>
              <Button type="button" color="success">
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
ProductRelated.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default ProductRelated
