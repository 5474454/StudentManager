import { searchStudents } from '../services/student'


export default {
  state: {
    condition: { //搜索条件
      key: "",
      sex: -1,
      page: 1,
      limit: 10
    },
    result: {
      total: 0, //总数据量
      datas: [],//学生数
    }
  },
  subscriptions: {
    initStudents({ dispatch }) {
      dispatch({
        type: "fetchStudents"
      })
    }
  },
  reducers: {
    setCondition(state, action) {
      return {
        ...state,
        condition: {
          ...state.condition,
          ...action.payload
        }
      }
    },
    setResult(state, action) {
      return {
        ...state,
        result: action.payload
      }
    }

  },
  effects: {
    /**
     * 根据当前条件搜索学生
     * @param {*} param0 
     * @param {*} param1 
     */
    *fetchStudents({ payload }, { put, call, select }) {
      //拿到仓库中当前的搜索条件
      const condition = yield select(state => state.students.condition)
      yield Delay(1000)
      const result = yield call(searchStudents, condition)
      yield put({
        type: "setResult",
        payload: {
          total: result.cont,
          datas: result.datas
        }
      })
    }
  }
}


function Delay(mili) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, mili)
  })
}