import React from "react"
import { Link } from "react-router-dom"

const Cell = cell => {
  return cell.value ? cell.value : ""
}

export { Cell }
