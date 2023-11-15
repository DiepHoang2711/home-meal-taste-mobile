import { baseApiUrl } from '@/configs/envConfig';
import instance, { cancelToken } from './axios/AxiosInstance';
import {
  AuthRequest,
} from './requests';
const authRequest = new AuthRequest(baseApiUrl, instance);
export {
  authRequest,
  cancelToken
};
