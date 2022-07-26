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

const ID = cell => {
  return cell.value ? cell.value : ""
}


const RowValidate = cell => {
  return cell.value ? cell.value : ""
}

const RowNumberValidate = cell => {
  return cell.value ? cell.value : "0"
}

export {
  ID,
  RowValidate,RowNumberValidate
}
