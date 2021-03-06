import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { Card, CardBody, Row, Col } from "reactstrap";
import LineChart from "../Chart/LineChart";
import BarChart from "../Chart/BarChart";

import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/actions/actions_users";
import { getAll } from "../../store/actions/actions_videos";

const Users = () => {
  const accounts = useSelector(state => state.accounts);
  const videos = useSelector(state => state.video);
  const dispatch = useDispatch();
  const [ userList, setUserList ] = useState([]);
  const [ videoList, setVideoList ] = useState([]);

  const dataArray = [ 45, 30, 19, 28, 35, 40, 47, 50 ];

  useEffect(() => {
    const data = { limit: 5, skip: 0 };
    const query = { page: 0 }
    dispatch(fetchUsers(data));
    dispatch(getAll(query));
  }, [ dispatch ]);

  useEffect(() => {
    if (accounts.usersSuccess) {
      setUserList(accounts.users && accounts.users.docs && accounts.users.docs);
    }
  }, [ accounts ]);

  // useEffect(() => {
  //   if (accounts.usersSuccess) {
  //     setUserList(accounts.users && accounts.users.docs && accounts.users.docs);
  //   }
  // }, [ accounts ]);

  console.log(userList, " the accounts")
  console.log(videos, " the videos")
  return (
    <div>
      <Row>
        <Col xs="12" xl="3">
          <Card className="number-card">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <p className="card-title-text">Total Income</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                  <p><span className="users-icons">&#8358;</span> <span className="card-number-text"><strong>15,604</strong></span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="3">
          <Card className="number-card">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <p className="card-title-text">Premium Users</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                  <p><Icon name="user outline" size="big" className="users-icons" /><span className="card-number-text"><strong>1,203</strong></span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="3">
        <Card className="number-card">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <p className="card-title-text">Standard Users</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                  <p><Icon name="user outline" size="big" className="users-icons" /> <span className="card-number-text"><strong>604</strong></span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="3">
          <Card className="number-card">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <p className="card-title-text">Basic Users</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                <p><Icon name="user outline" size="big" className="users-icons" /> <span className="card-number-text"><strong>500</strong></span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs="12" xl="8">
          <Card className="graph-card">
            <CardBody>
              <Row>
                <Col xs="8" xl="8">
                  <h3 className="heading-text"><strong>Users Statistics</strong></h3>
                </Col>
                <Col xs="4" xl="4">
                  <p><span className="graph-time">01 - 22 April 2021</span> <Icon size="big" name="clock outline" /></p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs="8" xl="8">
                  <p className="based-on">Based on</p>
                  <p className="units-purchased"><span className="units-purchased-text">Registered Users</span> <Icon size="big" name="clock outline" /></p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                  <LineChart dataArray={dataArray} color="#1890ff" label="Progressive user chart" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="4">
          <Card className="users-stat">
            <CardBody>
              <Row>
                <Col xs="8" xl="10">
                  <p className="s-subscription">Subscription Successful</p>
                </Col>
                <Col xs="4" xl="2">
                  <p className="see-all">See all</p>
                </Col>
              </Row>
              <Row className="mt-4 sub-list-row">
                <Col xs="2" xl="1">
                  <span className="icon-wrapper">
                    <Icon name="sun outline" className="sub-icon" />
                  </span>
                </Col>
                <Col xs="7" xl="8" className="sub-col">
                  <p className="sub-status">Subscription Successful</p>
                  <p className="subscriber-name">Adewole Daniel</p>
                </Col>
                <Col xs="3" xl="3" className="sub-col2">
                  <p className="subscription-amount">N2,500</p>
                  <p className="sub-month">Nov 27</p>
                </Col>
              </Row>

              <Row className="mt-4 sub-list-row">
                <Col xs="2" xl="1">
                  <span className="icon-wrapper">
                    <Icon name="sun outline" className="sub-icon" />
                  </span>
                </Col>
                <Col xs="7" xl="8" className="sub-col">
                  <p className="sub-status">Subscription Successful</p>
                  <p className="subscriber-name">Adewole Daniel</p>
                </Col>
                <Col xs="3" xl="3" className="sub-col2">
                  <p className="subscription-amount">N2,500</p>
                  <p className="sub-month">Nov 27</p>
                </Col>
              </Row>

              <Row className="mt-4 sub-list-row">
                <Col xs="2" xl="1">
                  <span className="icon-wrapper">
                    <Icon name="sun outline" className="sub-icon" />
                  </span>
                </Col>
                <Col xs="7" xl="8" className="sub-col">
                  <p className="sub-status">Subscription Successful</p>
                  <p className="subscriber-name">Adewole Daniel</p>
                </Col>
                <Col xs="3" xl="3" className="sub-col2">
                  <p className="subscription-amount">N2,500</p>
                  <p className="sub-month">Nov 27</p>
                </Col>
              </Row>

              <Row className="mt-4 sub-list-row">
                <Col xs="2" xl="1">
                  <span className="icon-wrapper">
                    <Icon name="sun outline" className="sub-icon" />
                  </span>
                </Col>
                <Col xs="7" xl="8" className="sub-col">
                  <p className="sub-status">Subscription Successful</p>
                  <p className="subscriber-name">Adewole Daniel</p>
                </Col>
                <Col xs="3" xl="3" className="sub-col2">
                  <p className="subscription-amount">N2,500</p>
                  <p className="sub-month">Nov 27</p>
                </Col>
              </Row>

              <Row className="mt-4 sub-list-row">
                <Col xs="2" xl="1">
                  <span className="icon-wrapper">
                    <Icon name="sun outline" className="sub-icon" />
                  </span>
                </Col>
                <Col xs="7" xl="8" className="sub-col">
                  <p className="sub-status">Subscription Successful</p>
                  <p className="subscriber-name">Adewole Daniel</p>
                </Col>
                <Col xs="3" xl="3" className="sub-col2">
                  <p className="subscription-amount">N2,500</p>
                  <p className="sub-month">Nov 27</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs="12" xl="12">
          <Card className="bar-graph-card">
            <CardBody>
              <Row>
                <Col xs="8" xl="8">
                  <h3 className="heading-text"><strong>Subscription Statistics</strong></h3>
                </Col>
                <Col xs="4" xl="4">
                  <p><span className="graph-time">01 - 22 April 2021</span> <Icon size="big" name="clock outline" /></p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs="8" xl="8">
                  <p className="based-on">Based on</p>
                  <p className="units-purchased"><span className="units-purchased-text">Subscription</span> <Icon size="big" name="clock outline" /></p>
                </Col>
              </Row>
              <BarChart dataArray={dataArray} color="#1890ff" label="Progressive subscription chart" />
            </CardBody>
          </Card>
        </Col>
        {/* <Col xs="12" xl="2">
          <Row>
            <Card className="add-card">
              <CardBody>
                <Icon className="plus-icon" size="huge" name="plus" />
              </CardBody>
            </Card>
          </Row>
          <Row className="mt-4">
            <Card className="active-card">
              <CardBody>
                <h3>Hello my card</h3>
              </CardBody>
            </Card>
          </Row>
        </Col> */}
      </Row>
    </div>
  );
}

export default Users;