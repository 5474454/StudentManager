import { connect, routerRedux } from 'dva'

function PrivateRouter(props) {
  if (props.loginId) {
    //已登录
    return props.children;
  }
  else {
    //未登录
    props.onNotLogin && props.onNotLogin()
    return null;
  }
}

const mapStateToProps = state => {
  return {
    loginId: state.loginUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNotLogin() {
      dispatch(routerRedux.push('/login'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter)
