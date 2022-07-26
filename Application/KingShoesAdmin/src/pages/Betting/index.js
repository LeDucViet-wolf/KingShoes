import React, { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { isEmpty } from "lodash"
import "bootstrap/dist/css/bootstrap.min.css"
import TableContainer from "../../components/Common/TableContainer"
import * as Yup from "yup"
import axios from "axios"
import { useFormik } from "formik"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import DeleteModal from "../../components/Common/DeleteModal"

import {
  getAllBet as onGetAllBet
} from "store/actions"

import {
  BettorYes, Amount, City, State, Country, Odd, Counter, BettorNo, AmountNo, CityNo, StateNo, CountryNo
} from "./BetCol"

//redux
import { useSelector, useDispatch } from "react-redux"
import MessagesModal from "./BetModel"

import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  Input, Badge,
  Form,
} from "reactstrap"
import FormWizard from "pages/Forms/FormWizard"

function AllBet() {
  //meta title
  document.title = "All Bet | Trumpbet24 Admin & Dashboard"

  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [isEdit, setIsEdit] = useState(false)


  const [betList, setBetList] = useState([])
  const [bets, setBets] = useState(null)


  const toggleViewModal = () => setModal1(!modal1)

  const dispatch = useDispatch()
  const { allBets } = useSelector(state => ({
    allBets: state.Bet.allBets,
  }))

  useEffect(() => {
    if (allBets && !allBets.length) {
      dispatch(onGetAllBet())
    }
  }, [dispatch, allBets])

  useEffect(() => {
    setBetList(allBets)
  }, [allBets])

  useEffect(() => {
    if (!isEmpty(allBets) && !!isEdit) {
      setBetList(allBets)
      setIsEdit(false)
    }
  }, [allBets])

  const toggle = () => {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  const handleOrderClick = arg => {
    const order = arg
    setOrder({
      id: order.id,
      orderId: order.orderId,
      billingName: order.billingName,
      orderdate: order.orderdate,
      total: order.total,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      badgeclass: order.badgeclass,
    })

    setIsEdit(true)

    toggle()
  }

  //delete order
  const [deleteModal, setDeleteModal] = useState(false)

  const onClickDelete = order => {
    setOrder(order)
    setDeleteModal(true)
  }

  const handleDeleteOrder = () => {
    if (order.id) {
      dispatch(onDeleteOrder(order))
      setDeleteModal(false)
    }
  }
  const handleOrderClicks = () => {
    setBetList("")
    setIsEdit(false)
    toggle()
  }

  const types = ['close'];
  const handlePublish = (e) => {
    var data = JSON.stringify({
      "status": 1
    });
    var config = {
      method: 'put',
      url: 'http://38.242.236.227:3456/api/bets/editBetStatus/' + e.target.id,
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("authUser")).accessToken,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleBetClick = () => {
    toggle()
  }

  const handleUnpublish = (e) => {
    var data = JSON.stringify({
      "status": 0
    });
    var config = {
      method: 'put',
      url: 'http://38.242.236.227:3456/api/bets/editBetStatus/' + e.target.id,
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("authUser")).accessToken,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const columns = useMemo(
    (e) => [
      {
        Header: "ID",
        accessor: "code",
        filterable: true,
        Cell: cellProps => {
          return <BettorYes {...cellProps} />
        },
      },
      {
        Header: "Bettor Yes",
        accessor: "bettor_yes.username",
        filterable: true,
        Cell: cellProps => {
          return <BettorYes {...cellProps} />
        },
      },
      {
        Header: "Amount",
        accessor: "amountYes",
        filterable: true,
        Cell: cellProps => {
          return <Amount {...cellProps} />
        },
      },
      {
        Header: "City",
        accessor: "bettor_yes.city",
        filterable: true,
        Cell: cellProps => {
          return <City {...cellProps} />
        },
      },
      {
        Header: "State",
        accessor: "bettor_yes.state",
        filterable: true,
        Cell: cellProps => {
          return <State {...cellProps} />
        },
      },
      {
        Header: "Country",
        accessor: "bettor_yes.country",
        Cell: cellProps => {
          return <Country {...cellProps} />
        },
      },
      {
        Header: "Odds",
        accessor: "odds",
        Cell: cellProps => {
          return <Odd {...cellProps} />
        },
      },
      {
        Header: "Counter",
        accessor: "counter.type",
        Cell: cellProps => {
          return (
            <Badge
              className={
                "font-size-13 badge-soft-" +
                (cellProps.row.original.counter.id == 3
                  ?
                  cellProps.row.original.challenge_status == 1
                    ?
                    "danger"
                    :
                    "success"
                  :
                  cellProps.row.original.counter.id == 1
                    ? "success"
                    : "danger"
                )
              }
              pill
            >
              {cellProps.row.original.counter.type}
            </Badge>
          )
        },
      },
      {
        Header: "Bettor No",
        accessor: "bettor_no.username",
        filterable: true,
        Cell: cellProps => {
          return <BettorNo {...cellProps} />
        },
      },
      {
        Header: "Amount",
        accessor: "amountNo",
        filterable: true,
        Cell: cellProps => {
          return <AmountNo {...cellProps} />
        },
      },
      {
        Header: "City",
        accessor: "bettor_no.city",
        filterable: true,
        Cell: cellProps => {
          return <CityNo {...cellProps} />
        },
      },
      {
        Header: "State",
        accessor: "bettor_no.state",
        filterable: true,
        Cell: cellProps => {
          return <StateNo {...cellProps} />
        },
      },
      {
        Header: "Country",
        accessor: "bettor_no.country",
        Cell: cellProps => {
          return <CountryNo {...cellProps} />
        },
      },
      {
        Header: "Actions",
        accessor: "status",
        disableFilters: true,
        Cell: (e) => {
          return (
            <div className="text-center">
              <Link
                to={"/backend_wdwqd/bet/"+e.row.original.code}
                className="btn btn-sm btn-rounded mb-1 btn-primary"
              >
                View
              </Link>
            </div>
          )
        },
      }
    ],
    []
  )

  return (
    <React.Fragment>
      <MessagesModal isOpen={modal1} toggle={toggleViewModal} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Bet" breadcrumbItem="All Bet" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={allBets}
                    isGlobalFilter={true}
                    customPageSize={10}
                    isAddBet={true}
                    handleBetClick={handleBetClick}
                    className="custom-header-css"
                  />
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} tag="h4">
                      Dummy Bets
                    </ModalHeader>
                    <ModalBody>
                      <FormWizard />
                    </ModalBody>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

AllBet.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default AllBet
