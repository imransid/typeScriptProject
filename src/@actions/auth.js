import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import actionType from "../@constants";
import { AuthService } from '../@services/apiService/authService';


export function login(email, password) {

    return {
        type: actionType.LOGIN,
        email: email,
        password: password
    };
}
