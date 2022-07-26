import React from "react"
import * as moment from "moment"

const formateDate = (date, format) => {
  const dateFormat = format ? format : "DD MMM Y"
  const date1 = moment(new Date(date)).format(dateFormat)
  return date1
}
const toLowerCase1 = str => {
  return str === "" || str === undefined ? "" : str.toLowerCase()
}

const Name = cell => {
  return cell.value ? cell.value : ""
}

const UserName = cell => {
  return cell.value ? cell.value : ""
}

const Email = cell => {
  return cell.value ? cell.value : ""
}

const Gender = cell => {
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

export {
  Name,
  Email,
  UserName,
  City,
  State,
  Country,
  Gender,
  formateDate,
}
