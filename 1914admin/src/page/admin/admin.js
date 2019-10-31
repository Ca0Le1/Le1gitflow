import React from 'react'
import  Style from './admin.module.less'
import { Layout, Menu, Icon } from 'antd';
import { Progress } from 'antd';
import CustomSlider from '../../components/customSlider/customSlider'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends  React.Component{
    render(){
        return(
     <Layout>
    <Sider
        style={{
            overflow: 'auto',
            height: '100vh', 
            position: 'fixed',
            left: 0,
        }} 
    >
      <CustomSlider></CustomSlider>
    </Sider>

    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          {this.props.children}
              <div style={{ width: 170 }}>
                <Progress percent={99} size="small" />
                <Progress percent={88} size="small" status="active" />
                <Progress percent={77} size="small" status="exception" />
                <Progress percent={66} size="small" />
              </div>,
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        )
    }
}
export default Admin