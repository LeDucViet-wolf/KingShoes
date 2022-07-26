// src/components/filter.
import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"
import { Button } from "reactstrap"

function Certificate() {
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
                accessor: "certificateName",
            },
            {
                Header: "Bettors",
                accessor: "bettors",
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
                            className="btn-sm"
                            onClick={toggleViewModal}
                        >
                            View Details
                        </Button>
                    )
                },
            },
        ],
        []
    )

    const data = [
        {
            code: "BET14874563",
            certificateName: "Certificate Bet",
            bettors: "Bruno Omilo",
        }
    ]

    //meta title
    document.title = "Certificate | Trumpbet24 Admin & Dashboard"

    return (
        <div className="page-content">
            <div className="container-fluid">
                <Breadcrumbs title="Certificate" breadcrumbItem="Certificate" />
                {/* <Table columns={columns} data={data} /> */}
                <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="custom-header-css"
                />
            </div>
        </div>
    )
}
Certificate.propTypes = {
    preGlobalFilteredRows: PropTypes.any,
}

export default Certificate
