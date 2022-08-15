import React, { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar"
import { Breadcrumb, ProductItem } from "@/components"
import { Link, useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getAllProduct } from '@/stores/actions'
import Paging from "./components/Paging"

const ProductList = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state) => ({
    products: state.productReducer.products,
  }))

  const [searchParams, setSearchParams] = useSearchParams()
  const [productsChange, setProductsChange] = useState(products)

  // Paging
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const numberPage = (productsChange && productsChange.length != 0) ? Math.ceil(productsChange.length / itemsPerPage) : 1
  const startIndexItem = (currentPage - 1) * itemsPerPage
  const endIndexItem = startIndexItem + itemsPerPage
  const rowsPerPage = (productsChange && productsChange.length != 0) ? productsChange.slice(startIndexItem, endIndexItem) : []

  const handlePaging = (e) => {
    switch (e.target.innerText) {
      case 'Previous':
        currentPage <= 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1)
        break
      case 'Next':
        currentPage >= numberPage ? setCurrentPage(numberPage) : setCurrentPage(currentPage + 1)
        break
      default:
        setCurrentPage(parseInt(e.target.innerText))
        break
    }
  }

  const handleShowing = (e) => {
    setItemsPerPage(parseInt(e.target.text))
  }

  const handleSorting = (e) => {
    e.preventDefault()
    let sort = e.target.text.toLowerCase()
    setSearchParams({ ...searchParams.entries(), sort })
  }

  const handleFiltering = {

  }

  useEffect(() => {
    setProductsChange(products.filter(item => item.categoryId == searchParams.get('category')))
  }, [searchParams.get('category')])

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Breadcrumb
        pageUrl="/product-list"
        pageName="Shop"
        pageNameChild="Shop List"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <Sidebar setSearchParams={setSearchParams} />

          {/* Shop Product */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div></div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link to={``} className="dropdown-item" onClick={handleSorting}>Lowest</Link>
                        <Link to={``} className="dropdown-item" onClick={handleSorting}>Highest</Link>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link to={``} className="dropdown-item" onClick={handleShowing}>5</Link>
                        <Link to={``} className="dropdown-item" onClick={handleShowing}>10</Link>
                        <Link to={``} className="dropdown-item" onClick={handleShowing}>15</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {rowsPerPage.map((item, index) => {
                return (
                  <ProductItem key={index} product={item} grid={{ lg: 4, md: 6, sm: 6 }} />
                )
              })}

              <Paging currentPage={currentPage} numberPage={numberPage} handlePaging={handlePaging} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList