import { takeEvery, select, call, put } from "redux-saga/effects";
import actionType from '../@constants';
// import { _all_Catagory } from "../saga_actions/Category";
import { AuthService } from '../@services/apiService/authService';

// const _AuthSignIn = (email) => {
//     let mail=email.email
//     let pass=email.password  
// const payload={
//     mail,
//     pass
// }

// try {
//           AuthService.login(payload).subscribe(
//           (res) => {
//             console.log("after response:", res);
//             if (res.data.status === "success") {
//               window.location.href = "/";
//               console.log("logedin")
//             }
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//       } catch (error) {
//         console.log(error);
//       }
// }


const apiCall = () => {
  return true
}


// generator Func
const _AuthSignIn = function* () {
  try {

    const api_result = yield call(apiCall)

    yield put({
      type: actionType.AUTH_RESULT,
      loading: false,
      count: 1111111
    })

  } catch (err) {
    console.log("ERROR Is", err)
  }

}


const rootSaga = function* () {
  yield takeEvery(actionType.LOGIN, _AuthSignIn);
};

export default rootSaga;