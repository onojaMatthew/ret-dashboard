import React from "react";
import { Icon, Input } from "semantic-ui-react";
import { Card, CardBody, Row, Col, Table } from "reactstrap";

import "./Users.css";
import Paginations from "../Pagination/Pagination";

const Users = () => {
  return (
    <div>
      <Row>
        <Col xs="12" xl="3">
          <Card className="number-card">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <p className="card-title-text">Total Balance</p>
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
                  <p className="card-title-text">Subscription Success</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                  <p><Icon name="credit card" size="big" className="users-icons" /><span className="card-number-text"><strong>604</strong></span></p>
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
                  <p className="card-title-text">Due Cards</p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                  <p><Icon name="credit card" size="big" className="users-icons" /> <span className="card-number-text"><strong>604</strong></span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="2">
          <Card className="export-data">
            <CardBody>
              <Row>
                <Col xs="12" xl="12">
                  <p className="download-icon text-center"><Icon name="download" id={"download-icon-icon"} size={"big"} /></p>
                  <p className="download-icon text-center">Export data</p>
                </Col>
              </Row>
              
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Video list */}
      <Row className="mt-4">
        <Col xs="12" xl="12">
          <Card className="transaction-video-list">
            <CardBody>
              <Row>
                <Col xs="8" xl="9">
                  <p className="transaction-table-title">All Transactions</p>
                </Col>
                <Col xs="8" xl="3">
                  <Input icon={<Icon id="search-icon" name="search" size="big" />} placeholder="Search for users or reference IDs" id="search-input" className="search-input" />
                </Col>
              </Row>
              <Row>
                <Col xs="8" xl="9">
                  <p ><span className="transaction-day-time">Today</span> <Icon name="clock outline" size="small" /></p>
                </Col>
              </Row>
              <Row>
                <Col xs="8" xl="12">
                  <Table responsive>
                    <tr>
                      <th className="fainted-text">S/N</th>
                      <th className="fainted-text">Full name</th>
                      <th className="fainted-text">Email</th>
                      <th className="fainted-text">Phone number</th>
                      <th className="fainted-text">Type</th>
                      <th className="fainted-text">Amount</th>
                      <th className="fainted-text">Plan</th>
                      <th className="fainted-text">Date joined</th>
                      <th className="fainted-text">Status</th>
                    </tr>
                    <tbody>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">Paul Okeke</td>
                        <td className="body-text">paulokeke@gmail.com</td>
                        <td className="body-text">+234 703 778 6423</td>
                        <td className="body-text">Viewer</td>
                        <td className="body-text">4,500</td>
                        <td className="body-text">Premium</td>
                        <td className="body-text">22nd February</td>
                        <td className="body-text"><span className="transaction-status">Active</span></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                <Col xs="11" xl="3">
                  <Paginations />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Users;