import React, { useEffect, useState, useRef, useMemo } from "react"
import { withRouter, Link } from "react-router-dom"
import TableContainer from "../../components/Common/TableContainer"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  UncontrolledTooltip,
  Input,
  Form,
} from "reactstrap"
import * as Yup from "yup"
import { useFormik } from "formik"

import {
  ID,
  Email,
} from "./contactlistCol"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import DeleteModal from "components/Common/DeleteModal"

import {
  getNewsletters as onGetNewsletters,
  deleteNewsletter as onDeleteNewsletter,
} from "store/newsletters/actions"
import { isEmpty } from "lodash"

//redux
import { useSelector, useDispatch } from "react-redux"

const ContactsList = props => {
  //meta title
  document.title = "Newsletter List | Trumpbet24 Admin & Dashboard"

  const dispatch = useDispatch()
  const [contact, setContact] = useState()
  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    // initialValues: {
    //   name: (contact && contact.name) || "",
    //   username: (contact && contact.username) || "",
    //   tags: (contact && contact.tags) || "",
    //   email: (contact && contact.email) || "",
    //   projects: (contact && contact.projects) || "",
    // },
    // validationSchema: Yup.object({
    //   name: Yup.string().required("Please Enter Your Name"),
    //   username: Yup.string().required("Please Enter Your User Name"),
    //   tags: Yup.array().required("Please Select Gender"),
    //   email: Yup.string().required("Please Enter Your Email"),
    //   projects: Yup.number().required("Please Enter Your Project"),
    // }),
    // onSubmit: values => {
    //   if (isEdit) {
    //     const updateUser = {
    //       id: contact.id,
    //       name: values.name,
    //       username: values.username,
    //       tags: values.tags,
    //       email: values.email,
    //       projects: values.projects,
    //     }

    //     // update user
    //     dispatch(onUpdateUser(updateUser))
    //     validation.resetForm()
    //     setIsEdit(false)
    //   } else {
    //     const newUser = {
    //       id: Math.floor(Math.random() * (30 - 20)) + 20,
    //       name: values["name"],
    //       username: values["username"],
    //       email: values["email"],
    //       tags: values["tags"],
    //       projects: values["projects"],
    //     }
    //     // save new user
    //     dispatch(onAddNewUser(newUser))
    //     validation.resetForm()
    //   }
    //   toggle()
    // },
  })

  const { newsletters } = useSelector(state => ({
    newsletters: state.nsl.newsletters,
  }))

  const [userList, setUserList] = useState([])
  const [modal, setModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const columns = useMemo(
    () => [
      // {
      //   Header: "#",
      //   Cell: () => {
      //     return <input type="checkbox" />
      //   },
      // },
      {
        Header: "ID",
        accessor: "id",
        sort: true,
        Cell: cellProps => {
          return <ID {...cellProps} />
        },
      },

      {
        Header: "Email",
        accessor: "email",
        sort: true,
        Cell: cellProps => {
          return <Email {...cellProps} />
        },
      },
      {
        Header: "Status",
        accessor: "status",
        sort: true,
        Cell: cellProps => {return cellProps.cell.value == 1? <span>Enable</span>: <span>Disable</span>}
      },
      {
        Header: "Action",
        Cell: cellProps => {
          return (
            <div className="d-flex gap-3" style={{justifyContent: "center"}}>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const userData = cellProps.row.original
                  onClickDelete(userData)
                }}
              >
                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          )
        },
      },
    ],
    []
  )

  useEffect(() => {
    if (newsletters && !newsletters.length) {
      dispatch(onGetNewsletters())
      setIsEdit(false)
    }
  }, [dispatch, newsletters])

  useEffect(() => {
    setContact(newsletters)
    setIsEdit(false)
  }, [newsletters])

  useEffect(() => {
    if (!isEmpty(newsletters) && !!isEdit) {
      setContact(newsletters)
      setIsEdit(false)
    }
  }, [newsletters])

  var node = useRef()
  const onPaginationPageChange = page => {
    if (
      node &&
      node.current &&
      node.current.props &&
      node.current.props.pagination &&
      node.current.props.pagination.options
    ) {
      node.current.props.pagination.options.onPageChange(page)
    }
  }

  //delete customer
  const [deleteModal, setDeleteModal] = useState(false)

  const onClickDelete = newsletters => {
    setContact(newsletters)
    setDeleteModal(true)
  }

  const handleDeleteNewsletter = () => {
    dispatch(onDeleteNewsletter(contact))
    onPaginationPageChange(1)
    setDeleteModal(false)
  }


  const keyField = "id"

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteNewsletter}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Newsletter List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={newsletters}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="custom-header-css"
                  />


                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ContactsList)
