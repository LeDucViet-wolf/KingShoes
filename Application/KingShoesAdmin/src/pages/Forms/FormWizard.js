import React, { useState, useEffect } from "react"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import { Link } from "react-router-dom"
import axios from "axios"
//Import Breadcrumb
const FormWizard = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [passedSteps, setPassedSteps] = useState([1])
  const [currency, setCurrency] = useState([])
  const [userCreate, setUserCreate] = useState([])
  const [userAccept, setUserAccept] = useState([])
  const [errAmount, setErrAmount] = useState('')
  const [errOdds, setErrOdds] = useState('')
  const [disable, setDisable] = useState(true)
  const [checkAUser, setCheckAUser] = useState(true);
  const [errAU, setErrAU] = useState("")
  const [fbet, setFbet] = useState({
    "bet_type": "1",
    "amount": "",
    "currency": "1",
    "odds": "",
    "user_accept": "-1",
    "payment": "1",
    "user_create": "",
    "message_create": "",
    "message_accept": "",
    "status":"0"
  })
  const nextTab = (tab) => {
    var modifiedSteps = [...passedSteps, tab]
    if (tab >= 1 && tab <= 5) {
      setactiveTab(tab)
      setPassedSteps(modifiedSteps)
      setErrAmount('')
    }
  }
  function toggleTab(tab) {
    if (activeTab !== tab) {
      switch (activeTab) {
        case 1:
          if (fbet.user_create === "") {
            setFbet(fbet => ({
              ...fbet,
              user_create: userCreate[0],
            }))
            nextTab(tab)
          }else{
            nextTab(tab)
          }
          break;
        case 3:
          if (fbet.amount !== '' && fbet.amount >= 1000) {
            nextTab(tab)
          }else{
            setErrAmount("Please insert amount bigger than 1000!")
          }
          break;
        case 4:
          if (fbet.odds !== '' && fbet.odds >= 1) {
            nextTab(tab)
          }else{
            setErrOdds("Please insert odds bigger than 1!")
          }
          break;
        default:
          nextTab(tab)
          break;
      }
    }
  }
  const fetchData = async () => {
    var config = {
      method: 'get',
      url: 'http://38.242.236.227:3456/api/currency',
    };
    await axios(config)
      .then(function (response) {
        setCurrency(response.data)
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  const getUser = async (f_status, c) => {
    var config = {};
    f_status == undefined || f_status == false
      ?
      config = {
        method: 'get',
        url: 'http://38.242.236.227:3456/api/customer',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("authUser")).accessToken,
        }
      }
      :
      config = {
        method: 'get',
        url: 'http://38.242.236.227:3456/api/customer/getFUser',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("authUser")).accessToken,
        }
      }

    await axios(config)
      .then(function (response) {
        if (c == 2) {
          setUserCreate(response.data)
          setUserAccept(response.data)
        } else {
          c == 0
            ?
            setUserCreate(response.data)
            :
            setUserAccept(response.data)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchData();
    getUser(undefined, 2);
  }, [])

  const handleAddFakeBet = () => {
    const d = {
      "amount": fbet.amount,
      "odds": fbet.odds,
      "currency": fbet.currency,
      "created_user": fbet.user_create.id,
      "accepted_user": fbet.user_accept.id,
      "bettor_yes_id": fbet.bet_type == 1?fbet.user_create.id:fbet.user_accept.id,
      "bettor_no_id": fbet.bet_type == 2?fbet.user_create.id:fbet.user_accept.id,
      "challenge_status": fbet.status
    }
    var config = {
      method: 'post',
      url: 'http://38.242.236.227:3456/api/bets/create',
      headers: { 
        'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem("authUser")).accessToken,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(d)
    };
    if (checkAUser == true) {
      setErrAU("")
      axios(config)
        .then(function (resp) {
          var dt = JSON.stringify({
            "bet_id": resp.data.id,
            "payment_method": fbet.payment,
            "message": fbet.message_create,
            "user_id": fbet.user_create.id
          });
          
          var config = {
            method: 'post',
            url: 'http://38.242.236.227:3456/api/bet-details/create',
            headers: { 
              'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem("authUser")).accessToken,
              'Content-Type': 'application/json'
            },
            data : dt
          };
          axios(config)
          .then(function (response) {
            alert("Success!");
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
          var dta = JSON.stringify({
            "bet_id": resp.data.id,
            "payment_method": fbet.payment,
            "message": fbet.message_accept,
            "user_id": fbet.user_accept.id
          });
          var config2 = {
            method: 'post',
            url: 'http://38.242.236.227:3456/api/bet-details/create',
            headers: { 
              'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem("authUser")).accessToken,
              'Content-Type': 'application/json'
            },
            data : dta
          };
          if (fbet.user_accept != -1) {
            axios(config2)
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }else{
      setErrAU("This user is used for create user")
    }
  }
  const handleChangeUserCreate = (e) => {
    getUser(e.target.checked, 0);
  }
  const handleChangeUserAccept = (e) => {
    getUser(e.target.checked, 1);

  }
  const handleChangeAcceptUser = (e) => {
    const { value } = e.target;
    if (value==fbet.user_create.id) {
      setCheckAUser(false)
    }
    else{
      setCheckAUser(true)
      setFbet(fbet => ({
        ...fbet,
        user_accept: value != -1 ? userAccept.find(x=>x.id == value) : value,
        status: value != -1 ? 2 : 0
      }))
      if (e.target.value == -1) {
        setDisable(true)
      }else{
        setDisable(false)
      }
    }
  }
  const handleChangeCreateUser = (e) => {
    const { value } = e.target;
    setFbet(fbet => ({
      ...fbet,
      user_create: userCreate.find(x=>x.id == value)
    }))
  }
  const handleSelectCurrency = (e) => {
    setFbet(fbet => ({
      ...fbet,
      currency: e.target.value
    }))
  }
  const handleChangeAmount = async (e) => {
    const { value } = e.target;
    setFbet(fbet => ({
      ...fbet,
      amount: value
    }))
  }
  const handleChangeOdd = (e) => {
    const { value } = e.target;
    setFbet(fbet => ({
      ...fbet,
      odds: value
    }))
  }
  const handleChangeMessageCreate = (e) => {
    const { value } = e.target;
    setFbet(fbet => ({
      ...fbet,
      message_create: value
    }))
  }
  const handleChangeMessageAccept = (e) => {
    const { value } = e.target;
    setFbet(fbet => ({
      ...fbet,
      message_accept: value
    }))
  }
  const handleChangeType = (e) => {
    const checkedValue = e.target.value;
    setFbet(fbet => ({
      ...fbet,
      bet_type: checkedValue
    }))
  }

  const handleChangeStatus = (e) => {
    const checkedValue = e.target.value;
    setFbet(fbet => ({
      ...fbet,
      status: checkedValue
    }))
  }
  return (
    <React.Fragment>
      <Container fluid={true} className="form-dynamic-bet">
        <Row>
          <Col lg="12" className="p-0">
            <Card>
              <CardBody>
                <div className="wizard clearfix">
                  <div className="steps clearfix">
                    <ul>
                      <NavItem
                        className={classnames({ current: activeTab === 1 })}
                      >
                        <NavLink
                          className={classnames({ current: activeTab === 1 })}
                          onClick={() => {
                            setactiveTab(1)
                          }}
                          disabled={!(passedSteps || []).includes(1)}
                        >
                          <span className="number">1.</span> Selects Users
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={classnames({ current: activeTab === 2 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTab === 2 })}
                          onClick={() => {
                            setactiveTab(2)
                          }}
                          disabled={!(passedSteps || []).includes(2)}
                        >
                          <span className="number">02</span> Choose Bet
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={classnames({ current: activeTab === 3 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTab === 3 })}
                          onClick={() => {
                            setactiveTab(3)
                          }}
                          disabled={!(passedSteps || []).includes(3)}
                        >
                          <span className="number">03</span> Add Amount
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={classnames({ current: activeTab === 4 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTab === 4 })}
                          onClick={() => {
                            setactiveTab(4)
                          }}
                          disabled={!(passedSteps || []).includes(4)}
                        >
                          <span className="number">04</span> Choose Odds
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={classnames({ current: activeTab === 5 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTab === 5 })}
                          onClick={() => {
                            setactiveTab(5)
                          }}
                          disabled={!(passedSteps || []).includes(4)}
                        >
                          <span className="number">05</span> Challenge
                        </NavLink>
                      </NavItem>
                    </ul>
                  </div>
                  <div className="content clearfix mt-4">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1}>
                        <Form>
                          <Row className="align-items-center">
                            <Col lg="6">
                              <div className="mb-3">
                                <div>
                                  <Label>Select Challenger</Label>
                                  <select className="form-select" onChange={handleChangeCreateUser}>
                                    {
                                      userCreate.map((u, key) => <option key={key} value={u.id}>{u.firstname + " " + u.lastname}</option>)
                                    }
                                  </select>
                                </div>
                                <div>
                                </div>
                              </div>
                            </Col>
                            <Col lg="6">
                              <Input type="checkbox" onChange={handleChangeUserCreate} />
                              <Label className="mb-0 ml-2">Filter Only Fake User</Label>
                            </Col>
     
                            <Col lg="12" className="mb-3">
                              <Label >Message of challenger</Label>
                              <textarea onChange={handleChangeMessageCreate} name="message" id="message" rows="3" className='form-control' placeholder='This message has a limit of 255 chars'></textarea>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>
                      <TabPane tabId={2}>
                        <Row>
                          <Col lg="6">
                            <Form>
                              <Label>Select Bet</Label>
                              <div className="mb-3">
                                <div className="form-check form-check-inline font-size-16">
                                  <Input
                                    type="radio"
                                    value="1"
                                    onChange={handleChangeType}
                                    id="customRadioInline2"
                                    name="customRadioInline1"
                                    className="form-check-input"
                                    defaultChecked
                                  />
                                  <Label
                                    className="form-check-label font-size-13"
                                    htmlFor="customRadioInline2"
                                  >
                                    TRUMP IS BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR YES)
                                  </Label>
                                </div><br />
                                <div className="form-check form-check-inline font-size-16">
                                  <Input
                                    type="radio"
                                    value="2"
                                    onChange={handleChangeType}
                                    id="customRadioInline3"
                                    name="customRadioInline1"
                                    className="form-check-input"
                                  />
                                  <Label
                                    className="form-check-label font-size-13"
                                    htmlFor="customRadioInline3"
                                  >
                                    TRUMP IS NOT BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR NO)
                                  </Label>
                                </div>
                              </div>
                            </Form>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId={3}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-namecard-input11">
                                    Amount
                                  </Label>
                                  <Input
                                    type="number" name="amount" id="amount" className='form-control' placeholder='Enter amount' onChange={handleChangeAmount}
                                  />
                                  <p>{errAmount}</p>
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label>Currency</Label>
                                  <select className="form-select" onChange={handleSelectCurrency}>
                                    {
                                      currency.map((cur, key) => <option key={key} value={cur.id}>{cur.code}</option>)
                                    }
                                  </select>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>
                      <TabPane tabId={4}>
                        <Row className="mb-5">
                          <Col lg="6">
                            <Label>Coefficient/odds</Label>
                            <Input onChange={handleChangeOdd} type="number" name="odds" id="odds" className='form-control' placeholder='Enter your coefficient/odds' />
                            <p>{errOdds}</p>
                          </Col>
                        </Row>
                        <Row className="bettings">
                          <Col lg="6" className="bg-red">
                            <div className="change-title col-title">
                              <h4 className="text-white mb-0 bold font-size-15">
                                TRUMP IS BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR YES)
                              </h4>
                            </div>
                          </Col>
                          <Col lg="6" className="bg-blue ">
                            <div className="change-title col-title">
                              <h4 className="text-white mb-0 bold font-size-15">
                                TRUMP IS NOT BACK AS POTUS BEFORE THE 2024 ELECTION (BETTOR NO)
                              </h4>
                            </div>
                          </Col>
                          <Col lg="12" className="list-bet">
                            <div className="table-responsive mt-1">
                              <table className='table list-bet-table mb-0'>
                                <thead>
                                  <tr>
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
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    fbet.bet_type && fbet.bet_type == 1
                                    ?
                                      <tr>
                                        <td className="name-bet" aria-describedby="popup-1">1. {fbet.user_create?fbet.user_create.firstname+" "+fbet.user_create.lastname:""}. <i className="bx bx-share-alt"></i></td>
                                        <td>{currency.length!= 0?currency[fbet.currency-1].symbol + " " + fbet.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):fbet.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{fbet.user_create?fbet.user_create.state:""}</td>
                                        <td>{fbet.user_create?fbet.user_create.country:""}</td>
                                        <td></td>
                                        <td className="odd-bet">{fbet.odds?fbet.odds:1}</td>
                                        <td className="arrow">
                                        <span className="arrow-win"><i className={fbet.status!=0?fbet.status==1? "fas fas fa-arrow-right lose":"fas fas fa-arrow-right win":"fas fas fa-arrow-right win"} aria-hidden="true"></i></span>
                                        </td>
                                        <td className="tag-bet close-bet text-center"><span className={fbet.status!=0?fbet.status==1?"lose":"win":"win"}>{fbet.user_accept!=-1?"CHALLENGED":"OPEN"}</span></td>
                                        <td aria-describedby="popup-2">{fbet.user_accept!=-1?"1. "+fbet.user_accept.firstname+" "+fbet.user_accept.lastname+".":""}</td>
                                        <td>
                                          {
                                            fbet.odds != ""
                                            ?
                                              currency.length!= 0
                                              ?
                                                currency[fbet.currency-1].symbol + " " + (fbet.amount*fbet.odds).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                              :
                                                (fbet.amount*fbet.odds).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                            :
                                              currency.length!= 0
                                              ?
                                                currency[fbet.currency-1].symbol + " " + (fbet.amount*1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                              :
                                                (fbet.amount*1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                          }
                                        </td>
                                        <td>{fbet.user_accept || fbet.user_accept==""?fbet.user_accept.state:""}</td>
                                        <td>{fbet.user_accept || fbet.user_accept==""?fbet.user_accept.country:""}</td>
                                        <td></td>
                                      </tr>
                                    :
                                      <tr>
                                        <td className="name-bet" aria-describedby="popup-1">{fbet.user_accept!=-1?"1. "+fbet.user_accept.firstname+" "+fbet.user_accept.lastname+".":""}</td>
                                        <td>
                                          {
                                            fbet.odds != ""
                                            ?
                                              currency.length!= 0
                                              ?
                                                currency[fbet.currency-1].symbol + " " + (fbet.amount/fbet.odds).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                              :
                                                (fbet.amount/fbet.odds).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                            :
                                              currency.length!= 0
                                              ?
                                                currency[fbet.currency-1].symbol + " " + (fbet.amount/1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                              :
                                                (fbet.amount/1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                          }
                                        </td>
                                        <td>{fbet.user_accept || fbet.user_accept==""?fbet.user_accept.state:""}</td>
                                        <td>{fbet.user_accept || fbet.user_accept==""?fbet.user_accept.country:""}</td>
                                        <td></td>
                                        <td className="odd-bet">{fbet.odds?fbet.odds:1}</td>
                                        <td className="arrow">
                                          <span className="arrow-lose"><i className={fbet.status!=0?fbet.status==1?"fas fas fa-arrow-left lose":"fas fas fa-arrow-left win":"fas fas fa-arrow-left lose"} aria-hidden="true"></i></span>
                                        </td>
                                        <td className="tag-bet close-bet text-center"><span className={fbet.status!=0?fbet.status==1?"lose":"win":"win"}>{fbet.user_accept!=-1?"CHALLENGED":"OPEN"}</span></td>
                                        <td aria-describedby="popup-2">1. {fbet.user_create?fbet.user_create.firstname+" "+fbet.user_create.lastname:""}.<i className="bx bx-share-alt"></i></td>
                                        <td>{currency.length!= 0?currency[fbet.currency-1].symbol + " " + fbet.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):fbet.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{fbet.user_create?fbet.user_create.state:""}</td>
                                        <td>{fbet.user_create?fbet.user_create.country:""}</td>
                                        <td></td>
                                      </tr>
                                  }
                                </tbody>
                              </table>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId={5}>
                        <Row className="align-items-center">
                          <Col lg="6" className="mb-4">
                            <Label>Select Accepter</Label>
                            <select className="form-select" onChange={handleChangeAcceptUser}>
                              <option value="-1">Select Accepter</option>
                              {
                                userAccept.map((u, key) => <option key={key} value={u.id}>{u.firstname + " " + u.lastname}</option>)
                              }
                            </select>
                            <p>{errAU}</p>
                          </Col>
                          <Col lg="6">
                            <Input type="checkbox" onChange={handleChangeUserAccept} />
                            <Label className="mb-0 ml-2">Filter Only Fake User</Label>
                          </Col>
                          <Col className="mb-4" lg="6">
                            <Input onChange={handleChangeStatus} name="status_challege" type="radio" disabled={disable} value="1" />
                            <Label className="mb-0 ml-2">Accepted</Label>
                            <Input onChange={handleChangeStatus} name="status_challege" type="radio" disabled={disable} defaultChecked className="ml-25" value="2" />
                            <Label className="mb-0 ml-2">Open</Label>
                          </Col>
                          <Col lg="12" className="mb-3">
                            <Label >Message of accepter</Label>
                            <textarea onChange={handleChangeMessageAccept} name="message" id="message" rows="3" className='form-control' placeholder='This message has a limit of 255 chars'></textarea>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </div>
                  <div className="actions clearfix">
                    <ul>
                      <li
                        className={
                          activeTab === 1 ? "previous disabled" : "previous"
                        }
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTab(activeTab - 1)
                          }}
                        >
                          Previous
                        </Link>
                      </li>
                      <li
                        className={activeTab === 5 ? "next d-none" : "next"}
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTab(activeTab + 1)
                          }}
                        >
                          Next
                        </Link>
                      </li>
                      <li
                        className={activeTab === 5 ? "add-bet" : "add-bet d-none"}
                      >
                        <Link
                          to="#"
                          onClick={handleAddFakeBet}
                        >
                          Add Bet
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
export default FormWizard