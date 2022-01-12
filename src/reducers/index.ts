import { Reducer, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import businessReducers, { BusinessState } from './business.reducers'
import { globalEvents, GlobalEventsState } from './globalEvents.reducers'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApplicationState {
  form: any
  globalEvents: GlobalEventsState
  business: BusinessState
}

export const rootReducer: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    form,
    globalEvents: globalEvents,
    business: businessReducers,
  })

export default rootReducer
