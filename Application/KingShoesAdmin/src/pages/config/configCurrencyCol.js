import React from "react"
import * as moment from "moment"

const ID = cell => {
    return cell.value ? cell.value : ""
}


const Code = cell => {
    return cell.value ? cell.value : ""
}

const Symbol = cell => {
    return cell.value ? cell.value : ""
}

export {
    ID,
    Code,
    Symbol
}
