import { AxiosResponse } from 'axios'
import { getBusinessesApi } from '../requests'
import { dispatchErrorHandler } from '../utils/globalHandlers/errorHandlerHelper'
import { businessConstants } from './constants'

export const getBusinesses = () => {
  return async (dispatch: any) => {
    dispatch({ type: businessConstants.GET_BUSINESSES_REQUEST })
    const response: AxiosResponse = await getBusinessesApi()
    if (response.status === 200) {
      const { data } = response
      dispatch({
        type: businessConstants.GET_BUSINESSES_SUCCESS,
        payload: {
          businesses: data,
        },
      })
    } else {
      dispatchErrorHandler('error')
    }
  }
}
