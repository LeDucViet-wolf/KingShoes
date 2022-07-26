// src/components/filter.
import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"
import { Button } from "reactstrap"

import ContractsModel from "./Contracts-model"

function Contracts() {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const toggleViewModal = () => setModal1(!modal1)
  const columns = useMemo(
    () => [
      {
        Header: "BET ID",
        accessor: "code",
      },
      {
        Header: "Name",
        accessor: "contractsName",
      },
      {
        Header: "Code",
        accessor: "contractsCode",
      },
      {
        Header: "Creator",
        accessor: "creator_user",
      },
      {
        Header: "Acceptor",
        accessor: "acceptor_user",
      },
      {
        Header: "Action",
        accessor: "progress",
        disableFilters: true,
        Cell: () => {
          return (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              onClick={toggleViewModal}
            >
              View
            </Button>
          )
        },
      },
    ],
    []
  )

  const data = [
    {
      code : "BET14874563",
      contractsName: "Contract Bet",
      contractsCode: "Contract BET1487",
      creator_user: "Bruno Omilo",
      acceptor_user: "Bruno Omilo",
    }
  ]

  //meta title
  document.title = "Contracts | Trumpbet24 Admin & Dashboard"

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="Contracts" breadcrumbItem="Contracts" />
        {/* <Table columns={columns} data={data} /> */}
        <TableContainer
          columns={columns}
          data={data}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="custom-header-css"
        />
      </div>
    </div>
  )
}
Contracts.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default Contracts
