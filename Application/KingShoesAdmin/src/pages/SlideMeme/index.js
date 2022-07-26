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
} from "reactstrap"

import {
    ID,
    Name,
    Type,
    Path,
    Status
} from "./slideCol"



//redux
import { useSelector, useDispatch } from "react-redux"

const SlideList = props => {
    //meta title
    document.title = "Poll List | Trumpbet24 Admin & Dashboard"

    const dispatch = useDispatch()
    const [slide, setSlide] = useState([])



    const fetchData = () => {
        var config = {
            method: 'get',
            url: 'http://38.242.236.227:3456/api/meme',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("authUser")).accessToken
            }
        };
        axios(config)
            .then(function (response) {
                if (response.data) {
                    const data = response.data
                    setSlide(data)
                } else {
                    console.log([400, "Cannot get meme"])
                }
            })
            .catch(function (error) {
                console.log([400, "Cannot get meme"])
            });
    }



    useEffect(() => {
        fetchData();
    }, [])



    const [isEdit, setIsEdit] = useState(false)

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id",
                sort: true,
                Cell: cellProps => {
                    return <ID {...cellProps} />
                },
            },
            {
                Header: "Name",
                accessor: "name",
                sort: true,
                Cell: cellProps => {
                    return <Name {...cellProps} />
                },
            },
            {
                Header: "Type",
                accessor: "type",
                sort: true,
                Cell: cellProps => {
                    return <Type {...cellProps} />
                }
            },
            {
                Header: "Path",
                accessor: "path",
                sort: true,
                Cell: cellProps => {
                    return <Path {...cellProps} />
                },
            },
            {
                Header: "Actions",
                disableFilters: true,
                Cell: (e) => {
                    return (
                        <div className="text-center">
                            <button
                                className="btn btn-sm btn-rounded mb-1 btn-danger"
                            >
                                Accepted
                            </button>
                        </div>
                    )
                },
            }
        ],
        []
    )




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
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <TableContainer
                                        columns={columns}
                                        data={slide}
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

export default withRouter(SlideList)
