import { businessConstants } from '../actions/constants'

export interface Business {
  id: string
  name: string
  description: string
  phone: string
  image: string
  email: string
  address: {
    number: string
    street: string
    city: string
    country: string
    zip: string
  }
}

export interface BusinessState {
  businesses: Business[]
  error: any
}

export const initState: BusinessState = {
  businesses: [],
  error: '',
}

export default (state = initState, action: any) => {
  switch (action.type) {
    case businessConstants.GET_BUSINESSES_REQUEST:
      state = {
        ...state,
      }
      break
    case businessConstants.GET_BUSINESSES_SUCCESS:
      state = {
        ...state,
        businesses: action.payload.businesses,
      }
      break
    case businessConstants.GET_BUSINESSES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      }
      break
  }

  return state
}
