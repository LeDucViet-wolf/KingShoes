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


function Ship_method() {
  //meta title
  document.title = "Orders | KingShoe Admin & Dashboard"
  // validation
    const [ items, setItems ] = useState([])
  const fetchData = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:3113/get-all-ships',
    }
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
        Header: "Code",
        accessor: "code",
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
Ship_method.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default Ship_method
