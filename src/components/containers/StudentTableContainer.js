import { connect } from 'dva'
import StudentTable from '../StudentTable'

const mapStateToProps = state => {
  return {
    stus: state.students.result.datas,
    current: state.students.condition.page,
    total: state.students.result.total,
    limit: state.students.condition.limit,
    loading: state.loading.effects["students / fetchStudents"]
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onPageChange(newPage) {
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



export default connect(mapStateToProps, mapDispatchToProps)(StudentTable)