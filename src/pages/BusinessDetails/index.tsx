import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NearbyPlaces from '../../containers/NearbyPlaces'
import { ApplicationState } from '../../reducers'
import { Business } from '../../reducers/business.reducers'
import AddressInfo from './components/AddressInfo'
import ContactInfo from './components/ContactInfo'
import './style.scss'

const BussinessDetails = () => {
  const { id }: any = useParams()
  const businessState = useSelector((state: ApplicationState) => state.business)
  const selectedBusiness = businessState?.businesses.find(
    (business: Business) => business?.id === id
  )

  return (
    <Grid container className="bussiness-page-container">
      <Grid container className="bussiness-details-container">
        <img alt="" src={selectedBusiness?.image} className="business-image" />
        <Grid
          container
          justifyContent="space-between"
          className="business-info"
        >
          <AddressInfo selectedBusiness={selectedBusiness} />
          <ContactInfo selectedBusiness={selectedBusiness} />
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <NearbyPlaces
              selectedBusiness={selectedBusiness}
              businesses={businessState?.businesses}
              city={selectedBusiness?.address?.city || ''}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BussinessDetails
