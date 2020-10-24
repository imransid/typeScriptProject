import { ThanosAxiosIntance } from "../../@config/Api.config";

type LoginPyloadType = {
  mail: string;
  pass: string;
};

const END_POINT = "/auth/admin/login";
export const AuthService = {
  login: (payload: LoginPyloadType) =>
    ThanosAxiosIntance.post(END_POINT, {
      authType: "Credential",
      userType: "InternalUser",
      email: payload.mail,
      password: payload.pass,
    }),

  //   logout: () => {
  //     StorageService.remove("token");
  //     window.location.href = "/auth";
  //   },
};
