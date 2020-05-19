import { connect } from 'dva'
import StudentSearchBar from '../StudentSearchBar'

const mapStateToProps = state => {
  return {
    key: state.students.condition.key,
    sex: state.students.condition.sex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch(newCondition) {
      newCondition.page = 1;
      dispatch({
        type: "students/setCondition",
        payload: newCondition
      })
      dispatch({
        type: "students/fetchStudents"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)
