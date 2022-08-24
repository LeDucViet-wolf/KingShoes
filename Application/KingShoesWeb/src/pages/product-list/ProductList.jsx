import React, { useEffect, useState, useRef } from "react"
import Sidebar from "./components/Sidebar"
import { Breadcrumb, ProductItem } from "@/components"
import { Link, useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getAllProduct, getAllProductSize, getAllCategory } from '@/stores/actions'
import Paging from "./components/Paging"
import * as Sentry from "@sentry/react"

const ProductList = () => {
  const dispatch = useDispatch()

  const { products, productSizes, categories } = useSelector((state) => ({
    products: state.productReducer.products,
    productSizes: state.productSizeReducer.productSizes,
    categories: state.categoryReducer.categories,
  }))

  const [searchParams, setSearchParams] = useSearchParams()
  const [productsChange, setProductsChange] = useState([])

  const productLength = products.length

  const productPriceLength01 = products.filter(item => (item.price > 0 && item.price <= 1000000)).length
  const productPriceLength13 = products.filter(item => (item.price >= 1000000 && item.price <= 3000000)).length
  const productPriceLength35 = products.filter(item => (item.price >= 3000000 && item.price <= 5000000)).length

  const idProductSize3035 = []
  productSizes.filter(item => (item.value >= 30 && item.value <= 35)).map((item) => {
    if (idProductSize3035.findIndex(x => x == item.productId) < 0) {
      idProductSize3035.push(item.productId);
    }
  })
  const productSizeLength3035 = idProductSize3035.length

  const idProductSize3540 = []
  productSizes.filter(item => (item.value >= 35 && item.value <= 40)).map((item) => {
    if (idProductSize3540.findIndex(x => x == item.productId) < 0) {
      idProductSize3540.push(item.productId);
    }
  })
  const productSizeLength3540 = idProductSize3540.length

  const idProductSize4045 = []
  productSizes.filter(item => (item.value >= 40 && item.value <= 45)).map((item) => {
    if (idProductSize4045.findIndex(x => x == item.productId) < 0) {
      idProductSize4045.push(item.productId);
    }
  })
  const productSizeLength4045 = idProductSize4045.length

  // #region PAGING
  const currentPage = searchParams.get('page') ?? 1
  const itemsPerPage = searchParams.get('show') ?? 10
  const numberPage = (productsChange && productsChange.length != 0) ? Math.ceil(productsChange.length / itemsPerPage) : 1
  const startIndexItem = (currentPage - 1) * itemsPerPage
  const endIndexItem = parseInt(startIndexItem) + parseInt(itemsPerPage)
  const [rowsPerPage, setRowsPerPage] = useState([])

  const buttonShow = useRef()

  const handleShowing = (e) => {
    e.preventDefault()
    let show = parseInt(e.target.text)
    buttonShow.current.innerHTML = e.target.text
    searchParams.set('show', show)
    setSearchParams(searchParams)
  }

  const handlePaging = (e) => {
    e.preventDefault()
    switch (e.target.innerText) {
      case 'Previous':
        currentPage <= 1
          ? (searchParams.set('page', 1), setSearchParams(searchParams))
          : (searchParams.set('page', parseInt(currentPage - 1)), setSearchParams(searchParams))
        break
      case 'Next':
        currentPage >= numberPage
          ? (searchParams.set('page', numberPage), setSearchParams(searchParams))
          : (searchParams.set('page', parseInt(currentPage + 1)), setSearchParams(searchParams))
        break
      default:
        let page = parseInt(e.target.innerText)
        searchParams.set('page', page)
        setSearchParams(searchParams)
        break
    }
  }

  useEffect(() => {
    setRowsPerPage(productsChange.slice(startIndexItem, endIndexItem))
  }, [productsChange, startIndexItem, endIndexItem])
  // #endregion

  // #region FILTERING 
  const categoryFilter = searchParams.get('category') ?? 0
  const priceFilter = searchParams.get('price') ?? 'price-all'
  const sizeFilter = searchParams.get('size') ?? 'size-all'

  const handleFilterByCategory = (e) => {
    [...e.target.form].map((input) => {
      input.checked = false
    })
    e.target.checked = true
    let categoryId = e.currentTarget.id
    searchParams.set('category', categoryId)
    setSearchParams(searchParams)
  }

  const handleFilterByPrice = (e) => {
    [...e.target.form].map((input) => {
      input.checked = false
    })
    e.target.checked = true
    let price = e.currentTarget.id
    searchParams.set('price', price)
    setSearchParams(searchParams)
  }

  const handleFilterBySize = (e) => {
    [...e.target.form].map((input) => {
      input.checked = false
    })
    e.target.checked = true
    let size = e.currentTarget.id
    searchParams.set('size', size)
    setSearchParams(searchParams)
  }
  // #endregion

  // #region SORTING
  const sorting = searchParams.get('sort') ?? 'lowest'
  const buttonSort = useRef()

  const handleSorting = (e) => {
    e.preventDefault()
    let sort = e.target.text.toLowerCase()
    buttonSort.current.innerHTML = e.target.text
    searchParams.set('sort', sort)
    setSearchParams(searchParams)
  }
  // #endregion

  // #region LOAD PRODUCTS
  const categoryId = searchParams.get('category') ?? 0

  useEffect(() => {
    if (products.length) {
      let newListProducts = products
      let newListProductSizes = productSizes
      let listIdProductSize = []

      if (categoryId != 0) {
        newListProducts = newListProducts.filter(item => item.categoryId == categoryId)
      }

      switch (sorting) {
        case 'lowest':
          newListProducts = [...newListProducts.sort((productFirst, productSecond) => (productFirst.price - productSecond.price))]
          break
        case 'highest':
          newListProducts = [...newListProducts.sort((productFirst, productSecond) => (productSecond.price - productFirst.price))]
          break
      }

      switch (priceFilter) {
        case 'price-all':
          newListProducts = newListProducts
          break
        case 'price-1':
          newListProducts = newListProducts.filter(item => (item.price > 0 && item.price <= 1000000))
          break
        case 'price-2':
          newListProducts = newListProducts.filter(item => (item.price >= 1000000 && item.price <= 3000000))
          break
        case 'price-3':
          newListProducts = newListProducts.filter(item => (item.price >= 3000000 && item.price <= 5000000))
          break
      }

      switch (sizeFilter) {
        case 'size-all':
          newListProducts = newListProducts
          break
        case 'size-1':
          newListProductSizes = newListProductSizes.filter(item => (item.value >= 30 && item.value <= 35))
          newListProductSizes.forEach((item) => {
            if (listIdProductSize.findIndex(x => x == item.productId) < 0) {
              listIdProductSize.push(item.productId);
            }
          })
          newListProducts = newListProducts.filter(item => listIdProductSize.findIndex(x => x == item.entityId) >= 0)
          break
        case 'size-2':
          newListProductSizes = newListProductSizes.filter(item => (item.value >= 35 && item.value <= 40))
          newListProductSizes.forEach((item) => {
            if (listIdProductSize.findIndex(x => x == item.productId) < 0) {
              listIdProductSize.push(item.productId);
            }
          })
          newListProducts = newListProducts.filter(item => listIdProductSize.findIndex(x => x == item.entityId) >= 0)
          break
        case 'size-3':
          newListProductSizes = newListProductSizes.filter(item => (item.value >= 40 && item.value <= 45))
          newListProductSizes.forEach((item) => {
            if (listIdProductSize.findIndex(x => x == item.productId) < 0) {
              listIdProductSize.push(item.productId);
            }
          })
          newListProducts = newListProducts.filter(item => listIdProductSize.findIndex(x => x == item.entityId) >= 0)
          break
      }

      setProductsChange(newListProducts)
    }
  }, [searchParams.get('category'), searchParams.get('price'), searchParams.get('size'), searchParams.get('sort'), products, productSizes])
  // #endregion

  useEffect(() => {
    dispatch(getAllProduct())
    dispatch(getAllProductSize())
    dispatch(getAllCategory())
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
          <Sidebar
            products={products}
            productLength={productLength}
            productPriceLength01={productPriceLength01}
            productPriceLength13={productPriceLength13}
            productPriceLength35={productPriceLength35}
            productSizeLength3035={productSizeLength3035}
            productSizeLength3540={productSizeLength3540}
            productSizeLength4045={productSizeLength4045}
            categories={categories}
            categoryFilter={categoryFilter}
            priceFilter={priceFilter}
            sizeFilter={sizeFilter}
            handleFilterByCategory={handleFilterByCategory}
            handleFilterByPrice={handleFilterByPrice}
            handleFilterBySize={handleFilterBySize} />

          {/* Shop Product */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div></div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button type="button" ref={buttonSort} className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link to={``} className="dropdown-item" onClick={handleSorting}>Lowest</Link>
                        <Link to={``} className="dropdown-item" onClick={handleSorting}>Highest</Link>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button type="button" ref={buttonShow} className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
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
                return (<ProductItem key={index} product={item} grid={{ lg: 4, md: 6, sm: 6 }} />)
              })}

              <Paging currentPage={currentPage} numberPage={numberPage} handlePaging={handlePaging} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sentry.withProfiler(ProductList)