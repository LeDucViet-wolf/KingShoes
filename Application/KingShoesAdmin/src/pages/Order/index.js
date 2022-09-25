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


function Order() {
  //meta title
  document.title = "Orders | KingShoe Admin & Dashboard"
  // validation
    const [ items, setItems ] = useState([])
  const fetchData = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:3113/get-all-orders',
    },
    config2 = {
      method: 'get',
      url: 'http://localhost:3113/get-all-ships',
    },    
    config3 = {
      method: 'get',
      url: 'http://localhost:3113/get-all-payments',
    }
    axios(config2)
      .then(function (resp) {
        axios(config3)
          .then(function (res) {
            axios(config)
              .then(function (response) {
                const data = response.data
                var i = 1;
                const arr = []
                data.forEach(element => {
                  const obj = {
                    no: i,
                    ship: resp.data.find(x => x.entityId == element.shippingId).name,
                    payment: res.data.find(x => x.entityId == element.paymentId).name,
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
          .catch(err => {
          })
      })
      .catch(err => {
      })

      
  }
  useEffect(() => {
    fetchData()
},[]);
  console.log(items)
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
        Header: "Shipping Method",
        accessor: "ship",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Payment Method",
        accessor: "payment",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Total",
        accessor: "grandTotal",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      },
      {
        Header: "Note",
        accessor: "note",
        filterable: true,
        Cell: cellProps => {
          return <Cell {...cellProps} />
        },
      }
    ],
    []
  )

  return (
    <React.Fragment>
      <div className="page-content">
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
                    customPageSize={10}
                    className="custom-header-css"
                  />

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}
Order.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default Order
