import React from "react";
import { Menu, Dropdown } from "antd";

const menuItems = [1, 2, 3].map(i => <Menu.Item key={i}>Item-{i}</Menu.Item>);

const menu = <Menu>{menuItems}</Menu>;

const App = () => (
  <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
);

export default App;
