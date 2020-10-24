import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import actionType from "../@constants";
import {RegisterService} from '../@services/apiService/authService';
//
export function register(email, password) {
console.log(email,password)
    

    return {
        type: actionType.SIGN_UP,
        email: email,
        password: password
    };
}

// function Login( )
//     {
//       
//     }
