import React from "react"
import * as moment from "moment"

const ID = cell => {
    return cell.value ? cell.value : ""
}


const Name = cell => {
    return cell.value ? cell.value : ""
}

const Type = cell => {
    return cell.value ? cell.value : "0"
}

const Path = cell => {
    return cell.value ? cell.value : "0"
}

const Status = cell => {
    return cell.value ? cell.value : "0"
}

export {
    ID,
    Name,
    Type,
    Path,
    Status
}
