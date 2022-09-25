import React, { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import TableContainer from "../../components/Common/TableContainer"
import axios from "axios"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
  Cell
} from "./Col"

import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap"
import CategoryDelete from "./CategoryDelete"


function Category() {
  //meta title
  document.title = "Categories | KingShoe Admin & Dashboard"
  const [modal2, setModal2] = useState(false)
  const [defaultData, setDefaultData] = useState({
    name: '',
    image: ''
  })
  const [daAdd, setDaAdd] = useState({
    name: '',
    image: ''
  })
  const [daEdit, setDaEdit] = useState({
    name: '',
    image: ''
  })
  const [path, setpath] = useState();
  const [id, setId] = useState()
  // validation
    const [ items, setItems ] = useState([])
    const [ cateAll, setCateAll ] = useState([])
  const fetchData = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:3113/get-all-categories-enable',
    },
     config2 = {
      method: 'get',
      url: 'http://localhost:3113/get-all-categories',
    };
      axios(config)
        .then(function (response) {
          const data = response.data
          var i = 1;
          const arr = []
          data.forEach(element => {
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
        axios(config2)
        .then(function (response) {
          setCateAll(response.data)
        })
        .catch(function (error) {
         console.log(error)
        });
  }
  useEffect(() => {
    fetchData()
},[]);
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
    image: e!=undefined?e.target.dataset.image:null
  }))
  setDefaultData(prev=>({
    ...prev,
    id: e!=undefined?e.target.dataset.id:0,
    name: e!=undefined?e.target.dataset.name:null,
    image: e!=undefined?e.target.dataset.image:null
  }))
}
const initialState = {
  name: "", image: ""
};
const toggleAddModal = (e) => {
  document.querySelector('.opAll').style.display = "block"
  document.querySelector('.add-modal').style.display = "block"
  setTimeout(() => {
  document.querySelector('.add-modal').style.opacity = "1"
  document.querySelector('.opAll').style.opacity = ".5"
}, 100);
}

const handleClose = ()=> {
  document.getElementById("image").value = "";
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
    image: ''
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
        Header: "Image",
        accessor: "image",
        filterable: true,
        Cell: cellProps => {
          return <img style={{width: 100, height: 100}} src={cellProps.value}/>
        },
      },
      {
        Header: "Actions",
        accessor: "view",
        width: 200,
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div>
              <Button
                data-id={cellProps.row.original.entityId}
                data-name={cellProps.row.original.name}
                data-image={cellProps.row.original.image}
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
  const handleFormSubmit = async (e) => {
    const form = document.querySelector("form.uploadimgEdit");
    const certilist = [
        'image/png',
        'image/jpeg',
    ]
      if ( certilist.includes(e?e.type:null)) {
        if ((e.size / (1024 * 1024)).toFixed(2) > 50) {
            alert('File size must be smaller than 50 MB!')
        } else {
            const formData = new FormData(form);
            console.log(form)
            var config = {
                method: 'post',
                url: 'http://localhost:3113/uploadCateImage',
                headers: { "Content-Type": "multipart/form-data" },
                data: formData
            };
            axios(config)
                .then(async (res) => {
                    setpath(res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    } else {
        alert('Files must be jpeg, png, docx or pdf!')
    }
}
  const handleSave = () => {
    if (daEdit.name != defaultData.name) {
      if (!checkDuplicate(daEdit.name) ) {
        if (daEdit.name != "") {
          var dataEdit = {}
          path
          ?
          dataEdit = {"entityId": daEdit.id, "name": daEdit.name, "image": path}
          :
          dataEdit = {"entityId": daEdit.id, "name": daEdit.name, "image": daEdit.image}
          axios.post("http://localhost:3113/update-category", {dataEdit})
            .then(function (response) {
              fetchData()
              handleClose()
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          alert("Category Name can't be empty!")
        }
       
      } else {
        alert("Category Name already exist!")
      }
    } else {
      if (daAdd.name != "") {
        var dataEdit = {}
        path
        ?
        dataEdit = {"entityId": daEdit.id, "name": daEdit.name, "image": path}
        :
        dataEdit = {"entityId": daEdit.id, "name": daEdit.name, "image": daEdit.image}
        axios.post("http://localhost:3113/update-category", {dataEdit})
          .then(function (response) {
            fetchData()
            handleClose()
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          alert("Category Name can't be empty!")
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

  const checkDuplicate = (name) => {
    if (items.find(x => x.name == name) ) {
      return true;
    } else {
      return false
    }

  }
  const handleFormSubmitAdd = async (e) => {
    const form = document.querySelector("form.uploadimgAdd");
    const certilist = [
        'image/png',
        'image/jpeg',
    ]
    if (certilist.includes(e.type)) {
        if ((e.size / (1024 * 1024)).toFixed(2) > 50) {
            alert('File size must be smaller than 50 MB!')
        } else {
            const formData = new FormData(form);
            console.log(form)
            var config = {
                method: 'post',
                url: 'http://localhost:3113/uploadCateImage',
                headers: { "Content-Type": "multipart/form-data" },
                data: formData
            };
            axios(config)
                .then(async (res) => {
                    setpath(res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    } else {
        alert('Files must be jpeg, png, docx or pdf!')
    }
}
  const handleSaveAdd = () => {
      if (!checkDuplicate(daAdd.name) ) {
        if (daAdd.name != "") {
          var dataEdit = {}
          path
          ?
          dataEdit = {"name": daAdd.name, "image": path, "status": 1  }
          :
          dataEdit = {"name": daAdd.name, "image": null, "status": 1  }
          console.log(dataEdit)
          axios.post("http://localhost:3113/add-category", {dataEdit})
            .then(function (response) {
            fetchData()
            handleClose()
            })
            .catch(err => {
              console.log(err)
            })
          } else {
            alert("Category Name can't be empty!")
          }
      } else {
        alert("Category Name already exist!")
      }
  }

  return (
    <React.Fragment>
      {/* <CategoryView isOpen={modal1} data={itemEdit} toggle={toggleViewModal} /> */}
      <CategoryDelete isOpen={modal2} idCate={id} toggle={toggleDeleteModal} />
      <div className="page-content">
        <div className="edit-modal" style={{
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
          <h5 style={{padding:'20px 10px', borderBottom: '1px solid #eff2f7'}}>Edit Category: {defaultData.name}</h5>
            <div style={{padding:'10px 10px', borderBottom: '1px solid #eff2f7'}}>
              <div className="name">
                    <label htmlFor="name">Category Name</label><br/>
                    <input style={{padding: '5px', width: '100%'}} value={daEdit.name} onChange={handleChangeName} id="name" type='text'/>
                </div>
                <div className="image" style={{padding: "20px 0 0 0 "}}>
                  <form className="uploadimgEdit">
                    <label htmlFor="image">Category Image</label><br/>
                      <input style={{padding: '5px', width: '100%'}} type="file" name="uploaded_file" id="imageEdit" onChange={async (event) => {
                            handleFormSubmit(event.target.files[0])
                      }} />
                      {/* <div className="col-lg-12">
                          <Button disabled={disable} style={{margin:"10px 0 0 0"}} onClick={handleFormSubmit}>Upload</Button>
                      </div> */}
                </form>
                </div>
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
        <h5 style={{padding:'20px 10px', borderBottom: '1px solid #eff2f7'}}>Add New Category</h5>
          <div style={{padding:'10px 10px', borderBottom: '1px solid #eff2f7'}}>
            <div className="name">
                  <label htmlFor="name">Category Name</label><br/>
                  <input style={{padding: '5px', width: '100%'}} value={daAdd.name} onChange={handleInputName} id="name" type='text'/>
              </div>
              <div className="image" style={{padding: "20px 0 0 0 "}}>
                <form className="uploadimgAdd">
                  <label htmlFor="image">Category Image</label><br/>
                    <input style={{padding: '5px', width: '100%'}} type="file" name="uploaded_file" id="image" onChange={async (event) => {
                        handleFormSubmitAdd(event.target.files[0])
                    }} />
                    {/* <div className="col-lg-12">
                        <Button disabled={disable} style={{margin:"10px 0 0 0"}} onClick={handleFormSubmit}>Upload</Button>
                    </div> */}
              </form>
              </div>
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
Category.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default Category
