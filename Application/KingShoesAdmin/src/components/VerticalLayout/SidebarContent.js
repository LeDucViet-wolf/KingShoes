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
              <Link to={process.env.REACT_APP_SECURITY_URL + "/message"}>
                <i className="bx bx-message-dots"></i>
                <span>{props.t("Message")}</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="has-arrow">
                <i className="bx bx-money"></i>
                <span>{props.t("Bet")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.REACT_APP_SECURITY_URL + "/bet"}>{props.t("All Bet")}</Link>
                </li>
                <li>
                  <Link to={process.env.REACT_APP_SECURITY_URL + "/bet-review"}>{props.t("Review Bet")}</Link>
                </li>
                <li>
                  <Link to={process.env.REACT_APP_SECURITY_URL + "/bet-challange"}>{props.t("Challenged")}</Link>
                </li>
                <li>
                  <Link to={process.env.REACT_APP_SECURITY_URL + "/bet-open"}>{props.t("Open")}</Link>
                </li>
                <li>
                  <Link to={process.env.REACT_APP_SECURITY_URL + "/bet-close"}>{props.t("Close")}</Link>
                </li>
                <li>
                  <Link to={process.env.REACT_APP_SECURITY_URL + "/contracts"}>{props.t("Contracts")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/certificate"}>
                <i className="bx bx-poll"></i>
                <span>{props.t("Certificate")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/poll"}>
                <i className="bx bx-poll"></i>
                <span>{props.t("Poll")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/transaction"}>
                <i className="bx bx-list-ul"></i>
                <span>{props.t("Transaction")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/newsletter"}>
                <i className="bx bx-envelope"></i>
                <span>{props.t("Newsletter")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/meme"}>
                <i className="bx bx-list-ul"></i>
                <span>{props.t("Slide Meme")}</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.REACT_APP_SECURITY_URL + "/system"}>
                <i className="bx bx-share-alt"></i>
                <span>{props.t("System Configuration")}</span>
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
