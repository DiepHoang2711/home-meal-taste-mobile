import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reduxFlipper from 'redux-flipper';
import { rootReducer } from './reducers';
import { notificationMiddleware } from '@/features/notification/store/middlewares';
const middlewares = [thunk, promise];
if (__DEV__ || process.env.NODE_ENV === 'development') {
  const createDebugger = reduxFlipper;
  middlewares.push(createDebugger());
}
middlewares.push(notificationMiddleware);
const enhancer = compose(applyMiddleware(...middlewares));
const store = createStore(rootReducer, undefined, enhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
