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
  const [productsChange, setProductsChange] = useState([])

  // Paging
  const [paging, setPaging] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    numberPage: 1,
    startIndexItem: 0,
    endIndexItem: 10
  })
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const numberPage = (productsChange && productsChange.length != 0) ? Math.ceil(productsChange.length / itemsPerPage) : 1
  const startIndexItem = (currentPage - 1) * itemsPerPage
  const endIndexItem = startIndexItem + itemsPerPage
  const [rowsPerPage, setRowsPerPage] = useState([])
  console.log(rowsPerPage)
  // const [startIndexItem, setStartIndexItem] = useState()

  useEffect(() => {
    if (searchParams.get('page')) {
      setCurrentPage(searchParams.get('page'))
    }
  }, [searchParams.get('page')])

  useEffect(() => {
    if (searchParams.get('show')) {
      setItemsPerPage(searchParams.get('show'))
    }
  }, [searchParams.get('show')])

  useEffect(() => {
    if (products.length) {
      setProductsChange(products)
    }
  }, [products])

  useEffect(() => {
    if (productsChange.length) {
      setRowsPerPage(productsChange.slice(startIndexItem, endIndexItem))
    }
  }, [productsChange])

  const handlePaging = (e) => {
    e.preventDefault()
    switch (e.target.innerText) {
      case 'Previous':
        currentPage <= 1
          ? (searchParams.set('page', 1), setSearchParams(searchParams))
          : (searchParams.set('page', parseInt(currentPage) - 1), setSearchParams(searchParams))
        break
      case 'Next':
        currentPage >= numberPage
          ? (searchParams.set('page', numberPage), setSearchParams(searchParams))
          : (searchParams.set('page', parseInt(currentPage) + 1), setSearchParams(searchParams))
        break
      default:
        let page = parseInt(e.target.innerText)
        searchParams.set('page', page)
        setSearchParams(searchParams)
        break
    }
  }

  const handleShowing = (e) => {
    e.preventDefault()
    let show = parseInt(e.target.text)
    searchParams.set('show', show)
    setSearchParams(searchParams)
    // setItemsPerPage(show)
  }

  const handleSorting = (e) => {
    e.preventDefault()
    let sort = e.target.text.toLowerCase()
    searchParams.set('sort', sort)
    setSearchParams(searchParams)
  }

  const handleFilterByPrice = (e) => {
    let price = e.currentTarget.id
    searchParams.set('price', price)
    setSearchParams(searchParams)
  }

  const handleFilterBySize = (e) => {
    let size = e.currentTarget.id
    searchParams.set('size', size)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    if (searchParams.get('category')) {
      setProductsChange(products.filter(item => item.categoryId == searchParams.get('category')))
    }
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
          <Sidebar handleFilterByPrice={handleFilterByPrice} handleFilterBySize={handleFilterBySize} />

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