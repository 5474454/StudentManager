import React from 'react'
import styles from './index.css'
import { Layout } from 'antd'

const { Header, Content, Sider } = Layout

export default function index(props) {

  return (
    <Layout>
      <Header className={styles.header}>
        {props.header}
      </Header>
      <Layout className={styles.main}>
        <Sider>
          {props.aside}
        </Sider>
        <Content>
          {props.main}
        </Content>
      </Layout>
    </Layout>
  )
}
