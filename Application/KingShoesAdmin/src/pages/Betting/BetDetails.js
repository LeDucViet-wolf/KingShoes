import React from 'react'
import { fakeBetId } from 'common/data/bet'
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

const BetDetails = () => {
    const [betData, setBetData] = useState([])
    const [payment, setPayment] = useState([])
    let { id } = useParams();
    const fetchData = async () => {
        var config = {
            method: 'get',
            url: 'http://38.242.236.227:3456/api/bets/getByCode/' + id,
          };
          await axios(config)
            .then(async (response) => {
                setBetData(response.data)
            })
            .catch((error) => {
              return res.status(500).send("Server Error!")
            });
        var config2 = {
            method: 'get',
            url: 'http://38.242.236.227:3456/api/payments/',
            };
        try {
            await axios(config2)
                .then(async res => {
                    setPayment(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="page-content">
            <div id="DetailBet">
                <div className="main-detail">
                    <div className="detail-bet">
                        <div className="bet-id text-center">
                            <h5>Detail Bet: {betData.code}</h5>
                        </div>
                        <div className="row row-title">
                            <div className="col-title col-6 bg-red">
                                <div className="change-title">
                                    <h4 className="text-white mb-0">
                                        TRUMP IS BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR YES)
                                    </h4>
                                </div>
                            </div>
                            <div className="col-title col-6 bg-blue">
                                <div className="change-title">
                                    <h4 className="text-white mb-0">
                                        TRUMP IS NOT BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR NO)
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-1">
                            <table className='table list-bet-table mb-0'>
                                <thead>
                                    <th>Bettors YES </th>
                                    <th>Amount </th>
                                    <th>State </th>
                                    <th className='d-flex align-items-center'>Country<br /> Nationality </th>
                                    <th className='paid'>PAID

                                    </th>
                                    <th className='odd'>ODDS </th>
                                    <th className="d-arrow"></th>
                                    <th className='counter'>COUNTER

                                    </th>
                                    <th>Bettors NO </th>
                                    <th>Amount </th>
                                    <th>State </th>
                                    <th className='d-flex align-items-center'>Country<br /> Nationality </th>
                                    <th className='paid paid-no'>PAID

                                    </th>
                                </thead>
                                <tbody>
                                    {
                                        <tr>
                                            {betData.bettor_yes ? <td className='name-bet' data-tip data-for="two">1.{betData.bettor_yes.firstname} {betData.bettor_yes.lastname}<i className='bx bx-share-alt'></i></td> :
                                                <td className='name-bet' data-tip data-for="two">1. </td>
                                            }
                                            <td>{betData.bettor_yes ? (betData.bettor_yes.id == betData.created_user.id) ? betData.currency.symbol + " " + betData.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : betData.currency.symbol + " " + betData.amount_counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</td>
                                            <td>{betData.bettor_yes ? betData.bettor_yes.state : ""}</td>
                                            <td>{betData.bettor_yes ? betData.bettor_yes.country : ""}</td>
                                            <td></td>
                                            <td className={
                                                    betData.counter && betData.counter.id == 2
                                                        ?
                                                        "odd-bet lose"
                                                        :
                                                        betData.challenge_status && betData.challenge_status != 0
                                                            ?
                                                            betData.challenge_status == 2
                                                                ?
                                                                "odd-bet win"
                                                                :
                                                                "odd-bet lose"
                                                            :
                                                            "odd-bet win"
                                                }>
                                                    {
                                                        betData.created_user && betData.bettor_yes_id
                                                        ?
                                                        betData.created_user.id != betData.bettor_yes_id
                                                            ?
                                                            "1/" + betData.odds
                                                            :
                                                            betData.odds
                                                        :
                                                        ""
                                                    }
                                                </td>
                                            <td className="arrow">
                                                {
                                                    betData.bettor_yes_id
                                                    ?
                                                    betData.created_user.id == betData.bettor_yes_id
                                                        ?
                                                        <span className="arrow-win"><i className=
                                                            {
                                                                betData.counter && betData.counter.id != 2
                                                                    ?
                                                                    betData.challenge_status != 0
                                                                        ?
                                                                        betData.challenge_status == 1
                                                                            ?
                                                                            "fas fas fa-arrow-right lose"
                                                                            :
                                                                            "fas fas fa-arrow-right win"
                                                                        :
                                                                        "fas fas fa-arrow-right win"
                                                                    :
                                                                    "fas fas fa-arrow-right lose"
                                                            }
                                                            aria-hidden="true"></i></span>
                                                        :
                                                        <span className="arrow-win"><i className=
                                                            {
                                                                betData.counter && betData.counter.id != 2
                                                                    ?
                                                                    betData.challenge_status != 0
                                                                        ?
                                                                        betData.challenge_status == 1
                                                                            ?
                                                                            "fas fas fa-arrow-left lose"
                                                                            :
                                                                            "fas fas fa-arrow-left win"
                                                                        :
                                                                        "fas fas fa-arrow-left win"
                                                                    :
                                                                    "fas fas fa-arrow-left lose"
                                                            }
                                                            aria-hidden="true"></i></span>
                                                            :
                                                            null
                                                }
                                            </td>
                                            <td className='tag-bet'>
                                                <span className={
                                                        betData.counter && betData.counter.id == 2
                                                            ?
                                                            "lose"
                                                            :
                                                            betData.challenge_status && betData.challenge_status != 0
                                                                ?
                                                                betData.challenge_status == 2
                                                                    ?
                                                                    "win"
                                                                    :
                                                                    "lose"
                                                                :
                                                                "win"

                                                    }>{betData.counter?betData.counter.type:null}</span>
                                                        <span className='primary-bet'>
                                                            {
                                                                betData.challenge_status && betData.challenge_status != 0
                                                                    ?
                                                                    betData.challenge_status == 2
                                                                        ?
                                                                        "O"
                                                                        :
                                                                        "A"
                                                                    :
                                                                    ""
                                                            }
                                                    </span>
                                            </td>
                                            {betData.bettor_no ? <td className='list-bet-no'>1. {betData.bettor_no.firstname} {betData.bettor_no.lastname} <i className='bx bx-share-alt'></i></td>
                                                :
                                                <td className='name-bet' data-tip data-for="two">1. </td>
                                            }
                                            <td>{betData.bettor_no ? (betData.bettor_no.id == betData.created_user.id) ? betData.currency.symbol + " " + betData.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  : betData.currency.symbol + " " + betData.amount_counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  : ""}</td>
                                            <td>{betData.bettor_no ? betData.bettor_no.state : ""}</td>
                                            <td>{betData.bettor_no ? betData.bettor_no.country : ""}</td>
                                            <td></td>
                                        </tr>
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="detail-type-bet">
                            <div className="table-responsive">
                                <table className='table list-bet-table mb-0'>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Odds</th>
                                            <th>Fee</th>
                                            <th>Payment Method</th>
                                            <th>Payment Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            <tr>
                                                <td>{betData.created_user && betData.bettor_yes_id && betData.created_user.id === betData.bettor_yes_id ? "Challenger" : "Accepter"}</td>
                                                <td>{betData.bettor_yes_id ? (betData.bettor_yes_id == betData.created_user.id) ? betData.currency.symbol + " " + betData.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : betData.currency.symbol + " " + betData.amount_counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</td>
                                                <td>{betData.currency?betData.currency.code:""}</td>
                                                <td>{betData.odds ? betData.odds:"0"}</td>
                                                <td>{betData.created_user && betData.bettor_yes_id && betData.created_user.id === betData.bettor_yes_id ? betData.fee_create === null ?"0":betData.fee_create: betData.fee_accept === null ?"0":betData.fee_accept}</td>
                                                <td>{betData.by_detail != undefined && payment.length !=0 && betData.bettor_yes_id ?payment.find(x=>x.id == 1).name:null}</td>
                                                <td></td>
                                            </tr>
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="table-responsive">
                                <table className='table list-bet-table mb-0'>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Odds</th>
                                            <th>Fee</th>
                                            <th>Payment Method</th>
                                            <th>Payment Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{betData.created_user && betData.bettor_no_id && betData.created_user.id === betData.bettor_no_id ? "Challenger" : "Accepter"}</td>
                                            <td>{betData.bettor_no_id ? (betData.bettor_no_id == betData.created_user.id) ? betData.currency.symbol + " " + betData.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : betData.currency.symbol + " " + betData.amount_counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</td>
                                            <td>{betData.currency?betData.currency.code:""}</td>
                                            <td>{betData.odds ? betData.odds:"0"}</td>
                                            <td>{betData.created_user && betData.bettor_no_id && betData.created_user.id === betData.bettor_no_id ? betData.fee_create === null ?"0":betData.fee_create: betData.fee_accept === null ?"0":betData.fee_accept}</td>
                                            <td>{betData.bn_detail != undefined && payment.length !=0 && betData.bettor_no_id ?payment.find(x=>x.id == betData.bn_detail.payment_method).name:null}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="challange-message">
                        <div className='alert alert-primary mt-3 mb-3'><h4 className='mb-0'>Challange Message</h4></div>
                        <div className="row">
                            <div className="col-6">
                                <div className='alert alert-danger'>
                                    <span className='message-challange'>{betData.by_detail ? "" + betData.by_detail.message : null}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='alert alert-warning'>
                                    <span className='message-challange'>{betData.bn_detail ? "" + betData.bn_detail.message : null}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetDetails