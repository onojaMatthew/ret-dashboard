import React from "react";
import { Layout } from "antd";
import { Row, Col } from "reactstrap";
import "./Header.css";
import { Button, Icon } from "semantic-ui-react";
import Avatar from "antd/lib/avatar/avatar";

const { Header } = Layout;

const MainHeader = () => {

  return (
    <Header className="header-container" style={{ padding: 0 }}>
        <Row>
          <Col xs="12" xl="8" className="nav-container">
           
          </Col>
          <Col xs="12" xl="4">
            <div className="nav-second-ul">
              <ul>
                <li>
                  <Button className="picture-upload-button">Upload</Button>
                </li>
                <li><Avatar size={60} /></li>
                <li>John Doe<Icon name="caret down" /></li>
              </ul>
            </div>
          </Col>
        </Row>
    </Header>
  );
}

export default MainHeader;