import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/dashboard"}>
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/user"}>
                <i className="bx bx-user"></i>
                <span>{props.t("User")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/category"}>
                <i className="bx bxs-category"></i>
                <span>{props.t("Category")}</span>
              </Link>
            </li>
            <li className="menu-title">{props.t("Product")} </li>

            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/products"}>
                <i className='bx bxl-product-hunt' ></i>
                <span>{props.t("Products")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/products-related"}>
                <i className='bx bxl-product-hunt' ></i>
                <span>{props.t("Related Products")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/order"}>
                <i className="bx bxl-product-hunt"></i>
                <span>{props.t("Orders")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/ship"}>
                <i className="bx bxl-product-hunt"></i>
                <span>{props.t("Shipping Methods")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/payment"}>
                <i className="bx bxl-product-hunt"></i>
                <span>{props.t("Payments")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
