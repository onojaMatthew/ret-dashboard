import React from "react";
import { Icon } from "semantic-ui-react";
import { Card, CardBody, Row, Col } from "reactstrap";
import BarChart from "../Chart/BarChart";

import "./Dashboard.css";

const Content = () => {

  const dataArray = [ 45, 30, 19, 28, 35, 40, 47, 50 ];

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
                  <p><Icon name="user outline" size="big" className="users-icons" /><span className="card-number-text"><strong>604</strong></span></p>
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
                <p><Icon name="user outline" size="big" className="users-icons" /> <span className="card-number-text"><strong>604</strong></span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Video list */}
      <Row className="mt-4">
        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>1</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>2</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>3</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>4</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>5</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>6</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>7</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>8</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs="12" xl="4">
          <Card className="content-video-list">
            <Row>
              <Col xs="8" xl="1">
                <p>9</p>
              </Col>
              <Col xs="4" xl="8">
                <p>A man called God</p>
              </Col>
              <Col xs="4" xl="3">
                <p><Icon name="eye" size="small" /> <span className="views-number">50,462</span></p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs="12" xl="10">
          <Card className="bar-graph-card">
            <CardBody>
              <BarChart dataArray={dataArray} color="#1890ff" label="Progressive bond purchase chart" />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="2">
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
        </Col>
      </Row>
    </div>
  );
}

export default Content;