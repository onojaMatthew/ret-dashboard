import React from "react";
import { Icon, Input } from "semantic-ui-react";
import { Card, CardBody, Row, Col, Table } from "reactstrap";

import "./Reality.css";
import Paginations from "../Pagination/Pagination";

const Reality = () => {
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
                <p><Icon name="user outline" size="big" className="users-icons" /> <span className="card-number-text"><strong>604</strong></span></p>
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
                  <p className="transaction-table-title">Movies</p>
                </Col>
                <Col xs="8" xl="3">
                  <Input icon={<Icon id="search-icon" name="search" size="big" />} placeholder="Search for users or reference IDs" id="search-input" className="search-input" />
                </Col>
              </Row>
              <Row>
                <Col xs="8" xl="9">
                  <p ><span className="transaction-day-time">All Movies</span> <Icon name="clock outline" size="small" /></p>
                </Col>
              </Row>
              <Row>
                <Col xs="8" xl="12">
                  <Table responsive>
                    <tr>
                      <th className="fainted-text">S/N</th>
                      <th className="fainted-text">Movie Title</th>
                      <th className="fainted-text">Studio</th>
                      <th className="fainted-text">Year</th>
                      <th className="fainted-text">Industry</th>
                      <th className="fainted-text">PG</th>
                      <th className="fainted-text">Season</th>
                      <th className="fainted-text">Cast</th>
                      <th className="fainted-text">Tags</th>
                      <th className="fainted-text">Rating</th>
                      <th className="fainted-text">Views</th>
                    </tr>
                    <tbody>
                      <tr> 
                        <td className="fainted-text">001</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">002</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">003</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">004</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">005</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">006</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
                      </tr>
                      <tr> 
                        <td className="fainted-text">007</td>
                        <td className="body-text">To All The Boys I've Ever Loved</td>
                        <td className="body-text">Red TV</td>
                        <td className="body-text">2017</td>
                        <td className="body-text">Nollywood</td>
                        <td className="body-text">18+</td>
                        <td className="body-text">5</td>
                        <td className="body-text">Angelina Jones, Lewis Capaldi</td>
                        <td className="body-text">Love, Romance, Relationships</td>
                        <td className="body-text">15 min ago</td>
                        <td className="body-text"><span className="transaction-status">558, 996</span></td>
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

export default Reality;