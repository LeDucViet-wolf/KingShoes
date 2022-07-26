import axios from 'axios'
import TableContainer from 'components/Common/TableContainer'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'

import { ID, Code, Symbol } from "./configCurrencyCol"

const config = () => {
    const [currencis, setCurrencis] = useState([])
    const getCurrency = () => {
        axios.get('http://38.242.236.227:3112/get-currency/')
            .then((res) => {
                setCurrencis(res.data)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    useEffect(() => {
        getCurrency()
    }, [])
    const columns = useMemo(
        () => [
            {
                Header: "ID",
                sort: true,
                accessor: "id",
                Cell: cellProps => {
                    return <ID {...cellProps} />
                },
            },
            {
                Header: "Code",
                accessor: "code",
                sort: true,
                Cell: cellProps => {
                    return <Code {...cellProps} />
                },
            },
            {
                Header: "Currency",
                accessor: "symbol",
                sort: true,
                Cell: cellProps => {
                    return <Symbol {...cellProps} />
                },
            },
            {
                Header: "Actions",
                disableFilters: true,
                Cell: (e) => {
                    return (
                        <div className="">
                            <Button
                                type="button"
                                color="success"
                                className="btn-sm btn-rounded"
                            >
                                Edit
                            </Button>
                            {" "}
                            <Button
                                type="button"
                                color="danger"
                                className="btn-sm btn-rounded"
                            >
                                Delete
                            </Button>
                            {" "}
                            <Button
                                type="button"
                                color="info"
                                className="btn-sm btn-rounded"
                            >
                                Fee
                            </Button>
                        </div>
                    )
                },
            }
        ],
        []
    )
    const handleCurrencyClick = () => {
        toggle()
    }
    return (
        <div className="page-content">
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <TableContainer
                                    columns={columns}
                                    data={currencis}
                                    isAddCurrency={handleCurrencyClick}
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
    )
}

export default config