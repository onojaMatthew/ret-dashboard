import React from "react";
import { Layout, Menu } from 'antd';
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import { Icon } from "semantic-ui-react";

const { Sider } = Layout;
const { SubMenu } = Menu;


const Sidebar = () => {
  return (
    <div>
      <Sider  className="sidebar-container">
        <div className="logo">
          <img src={Logo} alt="App logo" className="app-logo" />
        </div>
        
        <Menu className="sidebar-menu" mode="inline" defaultSelectedKeys={['1']}>
          <span className="label-span">Menu</span>
          <SubMenu className="submenu" key="sub1" icon={<Icon name="dashboard" />} title="Dashboard">
            <Menu.Item onClick={() => window.location.href="/dashboard"} className="menu-item" key="1" icon={<Icon name="user" />}>User</Menu.Item>
            <Menu.Item onClick={() => window.location.href="/dashboard/content"} className="menu-item" key="2" icon={<Icon name="hourglass" />}>Content</Menu.Item>
            <Menu.Item onClick={() => window.location.href="/dashboard/finance"} className="menu-item" key="3" icon={<Icon name="dollar sign"/>}>Finance</Menu.Item>
          </SubMenu>
          
          <Menu.Item onClick={() => window.location.href="/dashboard/transactions"} key="5" icon={<Icon name="briefcase" />}>
            Transactions
          </Menu.Item>
          <Menu.Item key="6" icon={<Icon name="cloud upload" />}>
            Upload Requests
          </Menu.Item>

          <span className="label-span">Content</span>

          <Menu.Item onClick={() => window.location.href="/dashboard/movies"} key="7" icon={<Icon name="video" />}>
            Movies
          </Menu.Item>
          <Menu.Item onClick={() => window.location.href="/dashboard/tvshows"} key="8" icon={<Icon name="video" />}>
            TV Shows
          </Menu.Item>
          <Menu.Item onClick={() => window.location.href="/dashboard/realityshows"} key="9" icon={<Icon name="video" />}>
            Reality TV Shows
          </Menu.Item>
          <Menu.Item onClick={() => window.location.href="/dashboard/originals"} key="10" icon={<Icon name="video" />}>
            Originals
          </Menu.Item>

          <span className="label-span">Support</span>

          <Menu.Item onClick={() => window.location.href="/dashboard/users"} key="11" icon={<Icon name="users" />}>
            Users
          </Menu.Item>
          <Menu.Item onClick={() => window.location.href="/dashboard/customers"} key="12" icon={<Icon name="phone volume" />}>
            Customer Care
          </Menu.Item>
          <Menu.Item onClick={() => window.location.href="/dashboard/settings"} key="13" icon={<Icon name="cog" />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default Sidebar;