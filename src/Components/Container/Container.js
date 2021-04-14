import React from "react";
import { Route, Switch } from "react-router-dom"
import { Layout } from "antd";
import MainHeader from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Transaction from "../Transaction/Transaction";

const { Content } = Layout;

const Container = (props) => {
  const { match } = props;
  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">
        <MainHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path={`${match.url}`} render={(props) => <Dashboard {...props} />} />
            <Route exact path={`${match.url}/transactions`} render={(props) => <Transaction {...props} />} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Container;