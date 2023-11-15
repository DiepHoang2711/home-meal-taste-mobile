import APIClient from '@/app/api/axios/AxiosClient';
import { urlApi } from './authConstant';

export default class AuthClient extends APIClient {
  login(input: any, cancelToken?: any) {
    return super.post(urlApi.login, input, cancelToken);
  }
}
