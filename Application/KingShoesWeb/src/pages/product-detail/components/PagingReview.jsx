import React from "react"
import { Link } from "react-router-dom"

const PagingReview = ({ ...props }) => {
    const { currentPage, numberPage, handlePaging } = props

    return (
        <div className="col-12">
            <nav>
                <ul className="pagination justify-content-center">
                    <li onClick={handlePaging} className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
                        <Link to={``} className="page-link">Previous</Link>
                    </li>
                    {[...Array(numberPage)].map((value, index) => {
                        if ((currentPage == 1 && (index + 1) < currentPage + 5) ||
                            (currentPage == numberPage && (index + 1) > currentPage - 5) ||
                            ((index + 1) < currentPage + 3 && (index + 1) > currentPage - 3)) {
                            return (
                                <li onClick={handlePaging} key={index} className={`page-item ${currentPage == (index + 1) ? 'active' : ''}`} >
                                    <Link to={``} className={`page-link`}>
                                        {index + 1}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                    <li onClick={handlePaging} className={`page-item ${currentPage == numberPage ? 'disabled' : ''}`}>
                        <Link to={``} className="page-link">Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PagingReview