import React, { Component } from 'react'
import { AutoComplete } from 'antd'

export default class test extends Component {


  state = {
    tips: [],
    value: ""
  }

  render() {
    return (
      <div>
        <AutoComplete
          value={this.state.value}
          onChange={txt => {
            //根据新的文本重新设置数据源
            const newTips = [txt, txt.repeat(2)]
            this.setState({
              value: txt,
              tips: newTips
            })
          }}
          dataSource={this.state.tips}
        />
      </div>
    )
  }
}
