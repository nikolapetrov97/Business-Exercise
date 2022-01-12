import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Business } from '../../reducers/business.reducers'
import './style.scss'

type Props = {
  selectedBusiness: Business | undefined
  businesses: Business[]
  city: string
}

const NearbyPlaces = (props: Props) => {
  const { businesses, city, selectedBusiness } = props
  const history = useHistory()

  const nearbyPlaces = businesses?.filter(
    (business: Business) =>
      business?.address?.city === city && business?.id !== selectedBusiness?.id
  )

  const handleSelect = (id: string) => {
    if (id) history.push(`/business/${id}`)
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="nearby-places-container"
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography className="nearby-places-text">Nearby Places</Typography>
      </Grid>
      {nearbyPlaces?.length > 0
        ? nearbyPlaces?.map((business: Business) => {
            return (
              <Grid
                key={business?.id}
                container
                className="businesses-details"
                onClick={() => handleSelect(business?.id)}
              >
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Typography>{business?.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={9}>
                  <Typography>{business?.description}</Typography>
                </Grid>
              </Grid>
            )
          })
        : null}
    </Grid>
  )
}

export default NearbyPlaces
