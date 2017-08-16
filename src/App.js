import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { Link } from 'react-router-dom';

import './App.css';

export default class extends Component {
  render(){
    return (
      <Layout style={{height:'100%',width:'100%'}}>
        <Header className="header">
          <div className="logo">Donkey</div>
        </Header>
        <Layout style={{height:'100%'}}>
          <Sider width={200}>
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />工单</span>}>
                <Menu.Item key="1"><Link to='/order-list'>工单列表</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/order-new'>新增工单</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />业务2</span>}>
                <Menu.Item key="3"><Link to='/todo'>Todo</Link></Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />业务3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px'}}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
        <Footer>
          <div className="footer">
            <p>欢迎使用</p>
          </div>
        </Footer>
      </Layout>

    )
  }
}