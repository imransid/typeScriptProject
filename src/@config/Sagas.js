import { takeEvery, select, call, put } from "redux-saga/effects";
import actionType from '../@constants';
import { AuthService } from '../@services/apiService/authService';

// api call
export const _requestToApi = function* (action) {
  try {

    let mail = action.email;
    let pass = action.password;

    const payload = {
      mail,
      pass
    }

    const result = yield AuthService.login(payload).subscribe(
      (res) => {
        console.log("after response:", res);

        // return response 200 or error
        if (res.data.status === "success") {
          window.location.href = "/";
          console.log("login")
        }
      },
      (error) => {
        console.log(error);
      }
    );



    result.status === 201 ?
      yield put({
        type: actionType.AUTH_RESULT,
        loading: false,
        count: 1111111
      }) : console.log('Login ERror password not match')
  } catch (err) {
    console.log('Error ', err)
  }
}

// generator Func
const _AuthSignIn = function* (action) {
  try {

    const api_result = yield call(_requestToApi, action);

  } catch (err) {
    console.log("ERROR Is", err)
  }

}


const rootSaga = function* () {
  yield takeEvery(actionType.LOGIN, _AuthSignIn);
};

export default rootSaga;