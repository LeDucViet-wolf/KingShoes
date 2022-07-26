import React from "react"
import { Link } from "react-router-dom"
import * as moment from "moment"
import { Badge } from "reactstrap"

const formateDate = (date, format) => {
  const dateFormat = format ? format : "DD MMM Y"
  const date1 = moment(new Date(date)).format(dateFormat)
  return date1
}
const toLowerCase1 = str => {
  return str === "" || str === undefined ? "" : str.toLowerCase()
}

const OrderId = cell => {
  return (
    <Link to="#" className="text-body fw-bold">
      {cell.value ? cell.value : ""}
    </Link>
  )
}

const BettorYes = cell => {
  return cell.value ? cell.value : ""
}

const Amount = cell => {
  return cell.value ? cell.value : ""
}

const City = cell => {
  return cell.value ? cell.value : ""
}

const State = cell => {
  return cell.value ? cell.value : ""
}

const Country = cell => {
  return cell.value ? cell.value : ""
}

const Odd = cell => {
  return (
    <Badge
      className={
        "font-size-13 badge-soft-danger"
      }
      pill
    >
      {cell.value}
    </Badge>
  )
}

const Counter = cell => {
  return (
    <Badge
      className={
        "font-size-13 badge-soft-" +
        (cell.value === "CHALLENGED"
          ? "success"
          : "danger" && cell.value === "OPEN"
          ? "success"
          : "danger")
      }
      pill
    >
      {cell.value}
    </Badge>
  )
}

const BettorNo = cell => {
  return cell.value ? cell.value : ""
}

const AmountNo = cell => {
  return cell.value ? cell.value : ""
}

const CityNo = cell => {
  return cell.value ? cell.value : ""
}

const StateNo = cell => {
  return cell.value ? cell.value : ""
}

const CountryNo = cell => {
  return cell.value ? cell.value : ""
}

export {BettorYes, Amount, City, State, Country,Odd, Counter,BettorNo, AmountNo, CityNo, StateNo, CountryNo }
