import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return (
          <Redirect
            to={{
              pathname: process.env.REACT_APP_SECURITY_URL + "/login",
              state: { from: props.location },
            }}
          />
        )
      }else if(props.location.pathname === process.env.REACT_APP_SECURITY_URL+"/login" && localStorage.getItem("authUser")){
        return (
          <Redirect
            to={{
              pathname: process.env.REACT_APP_SECURITY_URL,
              state: { from: props.location },
            }}
          />
        )
      }
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware
