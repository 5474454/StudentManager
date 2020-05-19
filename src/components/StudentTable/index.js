import React from 'react'
import { withRouter } from 'umi'
import { Table, Button } from 'antd'


function StundentTable(props) {
  const columns = [
    {
      title: '学号',
      dataIndex: 'sNo',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render(sex) {
        return sex === 1 ? "女" : "男"
      }
    },
    {
      title: '出生日期',
      dataIndex: 'birth',
    },
    {
      title: '住址',
      dataIndex: 'address',
    },
    {
      title: "操作",
      render(stu) {
        return <Button type="link"
          onClick={() => {
            props.history.push(`/student/${stu.sNo}`)
          }}
        >详情</Button>
      }
    }
  ]
  return (
    <Table
      rowKey="id"
      dataSource={props.stus}
      columns={columns}
      pagination={{
        current: props.current,
        total: props.total,
        pageSize: props.pageSize,
        showQuickJumper: true,
        onChange: props.onPageChange
      }}
      loading={props.loading}
    >

    </Table>
  )
}

export default withRouter(StundentTable) 