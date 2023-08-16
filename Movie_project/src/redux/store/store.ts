import { configureStore } from '@reduxjs/toolkit'
import  rootReducer  from '../reducers/rootReducer'
import { Api } from '../../api/api'
// ...

const store = configureStore({
  reducer: rootReducer,
  middleware:getDefaultMiddleware =>getDefaultMiddleware().concat([Api.middleware]),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store