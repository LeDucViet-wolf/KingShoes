import React from "react"

import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import avatar1 from "../../assets/images/users/avatar-1.png"
import profileImg from "../../assets/images/profile-img.png"

const WelcomeComp = () => {
  return (
    <React.Fragment>
      <div className="bettings dashboard-bet mb-3">
        <div className="row row-title row-total">
          <div className="col-title col-total total-yes  col-12">
            <div className="change-title bg-red">
              <h4 className="text-white mb-0 bold">
                TRUMP IS BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR YES)
              </h4>
            </div>
            <div className="total-number table-responsive">
            <table className="table table-change mb-4">
              <tbody>
                <tr className="table-number">
                  <td>1</td>
                  <td>458,000</td>
                  <td>65,99%</td>
                </tr>
                <tr className="table-text-sub">
                  <td>Odd Bettors YES</td>
                  <td>Total Bettors YES</td>
                  <td>% of All Bettors YES / NO</td>
                </tr>
                <tr className="table-number-sub">
                  <td></td>
                  <td>1000/50</td>
                  <td>$2,500,000,000 (BTC)</td>
                </tr>
                <tr className="table-text-sub fs-12">
                  <td></td>
                  <td>
                    Highest / Lowest Odd -{" "}
                    <span className="close-bet">ACCEPTED</span>
                  </td>
                  <td>
                    Highest Bet Amount -{" "}
                    <span className="close-bet">ACCEPTED</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="col-money col-money-yes table-responsive">
          <table className="table">
            <thead>
              <tr className="table-money">
                <th>
                  Bettors YES - <span className="close-bet">CLOSED</span>
                </th>
                <th>
                  Matched Total - <span className="close-bet">CLOSED</span>
                </th>
                <th>
                  Average Wage YES - <span className="close-bet">CLOSED</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-number-money">
                <td>
                  <ul className="close-bet">
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
                  <ul className="close-bet">
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
                  Bettors YES - <span className="close-bet">CLOSED</span>
                </th>
                <th>
                  Matched Total - <span className="close-bet">CLOSED</span>
                </th>
                <th>
                  Average Wage YES - <span className="close-bet">CLOSED</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-number-money">
                <td>
                  <ul className="close-bet">
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
                  <ul className="close-bet">
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
export default WelcomeComp
