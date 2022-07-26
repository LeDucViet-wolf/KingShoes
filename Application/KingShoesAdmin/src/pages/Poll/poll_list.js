import React, { useEffect, useState, useRef, useMemo } from "react"
import { withRouter, Link } from "react-router-dom"
import TableContainer from "../../components/Common/TableContainer"
import ReactEcharts from "echarts-for-react"
import axios from "axios"
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
  RowValidate,
  RowNumberValidate,
} from "./contactlistCol"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import DeleteModal from "components/Common/DeleteModal"

import {
  getPolls as onGetPolls,
} from "store/polls/actions"
import { isEmpty } from "lodash"

//redux
import { useSelector, useDispatch } from "react-redux"

const ContactsList = props => {
  //meta title
  document.title = "Poll List | Trumpbet24 Admin & Dashboard"

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



  const { polls } = useSelector(state => ({
    polls: state.poll.polls,
  }))
  const [pollTotal, setPollTotal] = useState({
    "usaNo":0,
    "usaYes":0,
    "worldNo":0,
    "worldYes":0,
  })
  const [pollTotalByCountry, setPollTotalByCountry] = useState([])
  const fetchData = () => {
    var config = {
      method: 'get',
      url: 'http://38.242.236.227:3456/api/poll',
      headers: { 
        'Authorization': 'Bearer '+JSON.parse(localStorage.getItem("authUser")).accessToken
      }
    };
      axios(config)
      .then(function (response) {
        if (response.data) {
          const data = response.data
          analyze(data)
        } else {
          console.log([400, "Cannot get Poll"])
        }
      })
      .catch(function (error) {
        console.log([400, "Cannot get Poll"])
      });
  }
  const analyze = (data) => {
    setPollTotal(poll => ({
      ...poll,
      usaNo: data.filter(p => p.country == "US" && p.type_vote == 0).length,
      usaYes: data.filter(p => p.country == "US" && p.type_vote == 1).length,
      worldNo: data.filter(p => p.type_vote == 0).length,
      worldYes: data.filter(p => p.type_vote == 1).length,
    }))
    const unique = [...new Set(data.map(item => item.country))];
    const totalByCountryArr = [];
    unique.forEach(element => {
      const obj = {}
      var yes = data.filter(p => p.country == element && p.type_vote == 1).length
      var no = data.filter(p => p.country == element && p.type_vote == 0).length
      var totalYes = data.filter(p => p.type_vote == 1).length != 0 ? data.filter(p => p.type_vote == 1).length : 1;
      var totalNo = data.filter(p => p.type_vote == 0).length != 0 ? data.filter(p => p.type_vote == 0).length : 1;
      var total = data.length != 0 ? data.length : 1;
      obj.yes = yes
      obj.no = no
      obj.pyes = ((yes/totalYes)*100).toFixed(2) + "%"
      obj.pno = ((no/totalNo) *100).toFixed(2)+ "%"
      obj.ptotal = (((yes+no) / total)*100).toFixed(2)+ "%"
      obj.country = element
      totalByCountryArr.push(obj)
    });
    setPollTotalByCountry(totalByCountryArr)
  }


  useEffect(() => {
    fetchData();
  }, [])
  const options1 = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    color: ["#ec4561", "#38a4f8", "#3c4ccf"],
    series: [
      {
        name: "Total Votes",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: pollTotal.usaNo, name: "NO" },
          { value: pollTotal.usaYes, name: "YES" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }

  const options2 = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    color: ["#ec4561", "#38a4f8", "#3c4ccf"],
    series: [
      {
        name: "Total Votes",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: pollTotal.worldNo, name: "NO" },
          { value: pollTotal.worldYes, name: "YES" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }

  const [user, setUser] = useState("")

  const [isEdit, setIsEdit] = useState(false)

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        sort: true,
        Cell: cellProps => {
          return <ID {...cellProps} />
        },
      },
      {
        Header: "Ip Address",
        accessor: "ip_address",
        sort: true,
        Cell: cellProps => {
          return <RowValidate {...cellProps} />
        },
      },
      {
        Header: "Vote",
        accessor: "type_vote",
        sort: true,
        Cell: cellProps => { return cellProps.cell.value == 1 ? <span>Yes</span> : <span>No</span> }
      },
      {
        Header: "Voted At",
        accessor: "date_vote",
        sort: true,
        Cell: cellProps => {
          return <RowValidate {...cellProps} />
        },
      },
      {
        Header: "Country",
        accessor: "country",
        sort: true,
        Cell: cellProps => {
          return <RowValidate {...cellProps} />
        },
      },
      {
        Header: "User Id",
        accessor: "user_id",
        sort: true,
        Cell: cellProps => {
          return <RowValidate {...cellProps} />
        },
      }
    ],
    []
  )

  const columns_country = useMemo(
    () => [
      {
        Header: "Country",
        accessor: "country",
        sort: true,
        Cell: cellProps => {
          return <RowValidate {...cellProps} />
        },
      },
      {
        Header: "Yes",
        accessor: "yes",
        sort: true,
        Cell: cellProps => {
          return <RowNumberValidate {...cellProps} />
        },
      },
      {
        Header: "No",
        accessor: "no",
        sort: true,
        Cell: cellProps => {
          return <RowNumberValidate {...cellProps} />
        }
      },
      {
        Header: "Percent Yes",
        accessor: "pyes",
        sort: true,
        Cell: cellProps => {
          return <RowNumberValidate {...cellProps} />
        },
      },
      {
        Header: "Percent No",
        accessor: "pno",
        sort: true,
        Cell: cellProps => {
          return <RowNumberValidate {...cellProps} />
        },
      },
      {
        Header: "Percent Total",
        accessor: "ptotal",
        sort: true,
        Cell: cellProps => {
          return <RowNumberValidate {...cellProps} />
        },
      }
    ],
    []
  )

  useEffect(() => {
    if (polls && !polls.length) {
      dispatch(onGetPolls())
      setIsEdit(false)
    }
  }, [dispatch, polls])

  useEffect(() => {
    setContact(polls)
    setIsEdit(false)
  }, [polls])

  useEffect(() => {
    if (!isEmpty(polls) && !!isEdit) {
      setContact(polls)
      setIsEdit(false)
    }
  }, [polls])

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

  // const onClickDelete = polls => {
  //   setContact(polls)
  //   setDeleteModal(true)
  // }

  // const handleDeletePoll = () => {
  //   dispatch(onDeletePoll(contact))
  //   onPaginationPageChange(1)
  //   setDeleteModal(false)
  // }


  const keyField = "id"

  return (
    <React.Fragment>
      {/* <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeletePoll}
        onCloseClick={() => setDeleteModal(false)}
      /> */}
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Row>
            <Col lg="6">
              <h3>USA</h3>
              <div className="label-status">
              <div className="label-flex">
                <span className="label no"></span>
                <span className=" text">NO - Total NO: {pollTotal.usaNo} - Percent NO: {pollTotal.usaNo && pollTotal.usaYes && pollTotal.usaNo+pollTotal.usaYes != 0? ((Number(pollTotal.usaNo)/(Number(pollTotal.usaNo)+Number(pollTotal.usaYes)))*100).toFixed(2):"0"} %</span>
              </div>
              <div className="label-flex">
                <span className="label yes"></span>
                <span className=" text">YES - Total YES: {pollTotal.usaYes} - Percent YES: {pollTotal.usaNo && pollTotal.usaYes && pollTotal.usaNo+pollTotal.usaYes != 0? ((Number(pollTotal.usaYes)/(Number(pollTotal.usaNo)+Number(pollTotal.usaYes)))*100).toFixed(2):"0"} %</span>
              </div>
              </div>
              <div id="pie-chart" className="e-chart">
                <ReactEcharts style={{ height: "350px" }} option={options1} />

              </div>
            </Col>
            <Col lg="6">
              <h3>WORLD</h3>
              <div className="label-status">
              <div className="label-flex">
                <span className="label no"></span>
                <span className=" text">NO - Total NO: {pollTotal.worldNo} - Percent NO: {pollTotal.worldNo && pollTotal.worldYes && pollTotal.worldNo+pollTotal.worldYes != 0? ((Number(pollTotal.worldNo)/(Number(pollTotal.worldNo)+Number(pollTotal.worldYes)))*100).toFixed(2):"0"} %</span>
              </div>
              <div className="label-flex">
                <span className="label yes"></span>
                <span className=" text">YES - Total YES: {pollTotal.worldYes} - Percent YES: {pollTotal.worldNo && pollTotal.worldYes && pollTotal.worldNo+pollTotal.worldYes != 0? ((Number(pollTotal.worldYes)/(Number(pollTotal.worldNo)+Number(pollTotal.worldYes)))*100).toFixed(2):"0"} %</span>
              </div>
              </div>
              <div id="pie-chart" className="e-chart">
                <ReactEcharts style={{ height: "350px" }} option={options2} />
              </div>
            </Col>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns_country}
                    data={pollTotalByCountry}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={polls}
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
