import { ThanosAxiosIntance } from "../../@config/Api.config";
// import { StorageService } from './storageService';

type ReggisterPyloadType = {
  email: string;
  password: string;
};

const END_POINT = "/auth​/admin​/register";
export const RegisterService = {
  register: (payload: ReggisterPyloadType) =>
    ThanosAxiosIntance.post(END_POINT, {
      authType: "Credential",
      userType: "InternalUser",
      email: payload.email,
      password: payload.password,
    }),
};
