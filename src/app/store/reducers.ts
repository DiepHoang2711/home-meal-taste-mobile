import * as authReducer from '@/features/auth/store/reducer';
import { FluxStandardAction } from 'redux-promise-middleware';

const appReducer = combineReducers({
  auth: authReducer.reducer,
});

export const rootReducer: Reducer = (state: any, action: FluxStandardAction) => {
  return appReducer(state, action);
};
