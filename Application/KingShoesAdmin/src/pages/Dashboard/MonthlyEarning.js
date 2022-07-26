import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import ApexRadial from "./ApexRadial"

const MonthlyEarning = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="bettings dashboard-bet">
        <div className="row row-title row-total">
          <div className="col-title col-total total-yes  col-12">
            <div className="change-title bg-blue">
              <h4 className="text-white mb-0 bold">
                TRUMP IS NOT BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR NO)
              </h4>
            </div>
            <div className="total-number table-responsive">
            <table className="table table-change mb-4">
            <tbody>
                  <tr className="table-number">
                    <td className="close-bet">100.00</td>
                    <td>236,000</td>
                    <td>34,01%</td>
                  </tr>
                  <tr className="table-text-sub">
                    <td>
                      Ø Odd Bettors NO -{" "}
                      <span className="close-bet">ACCEPTED</span>
                    </td>
                    <td>Total Bettors NO</td>
                    <td>% of All Bettors YES / NO</td>
                  </tr>
                  <tr className="table-number-sub open">
                    <td>150.00</td>
                    <td>750/75</td>
                    <td>$3,000,000,000 ($)</td>
                  </tr>
                  <tr className="table-text-sub fs-12">
                    <td>
                      Ø Odd Bettors NO - <span className="open">OPEN</span>
                    </td>
                    <td>
                      Highest / Lowest Odd - <span className="open">OPEN</span>
                    </td>
                    <td>
                      Highest Bet Amount - <span className="open">OPEN</span>
                    </td>
                  </tr>
                </tbody>
            </table>
            <div className="col-money col-money-yes table-responsive">
          <table className="table">
          <thead>
              <tr className="table-money">
                <th>
                  Bettors NO - <span className="close-bet">CLOSED</span>
                </th>
                <th>
                  Matched Total - <span className="close-bet">CLOSED</span>
                </th>
                <th>
                  Average Wage NO - <span className="close-bet">CLOSED</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-number-money">
                <td>
                  <ul>
                    <li>125,000 ($) </li>
                    <li>10,000 (BTC)</li>
                    <li>10,000 (BTC)</li>
                    <li>100,000 ($Gold)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>$ 437’500’000</li>
                    <li>BTC$ 125,000,000</li>
                    <li>CHF 5,000,000</li>
                    <li>$Gold 400,000,000</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>$ 3,500.00</li>
                    <li>BTC$ 12,500.00</li>
                    <li>CHF 5,000.00</li>
                    <li>$Gold 4,000.00</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table mb-0">
          <thead>
              <tr className="table-money">
                <th>
                  Bettors NO - <span className="close-bet">OPEN</span>
                </th>
                <th>
                  Matched Total - <span className="close-bet">OPEN</span>
                </th>
                <th>
                  Average Wage NO - <span className="close-bet">OPEN</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-number-money">
                <td>
                  <ul>
                    <li>125,000 ($) </li>
                    <li>10,000 (BTC)</li>
                    <li>10,000 (BTC)</li>
                    <li>100,000 ($Gold)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>$ 437’500’000</li>
                    <li>BTC$ 125,000,000</li>
                    <li>CHF 5,000,000</li>
                    <li>$Gold 400,000,000</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>$ 3,500.00</li>
                    <li>BTC$ 12,500.00</li>
                    <li>CHF 5,000.00</li>
                    <li>$Gold 4,000.00</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MonthlyEarning
