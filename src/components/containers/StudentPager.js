import { connect } from 'dva'
import { Pagination } from 'antd'

const mapStateToProps = state => {
  return {
    current: state.students.condition.page,
    total: state.students.result.total,
    limit: state.students.condition.limit,
    showQuickJumper: true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange(newPage) {
      //重新设置条件
      dispatch({
        type: 'students/setCondition',
        payload: {
          page: newPage
        }
      })
      //重新查询
      dispatch({
        type: "students/fetchStudents"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)