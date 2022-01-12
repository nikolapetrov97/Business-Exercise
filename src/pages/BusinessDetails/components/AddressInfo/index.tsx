import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Business } from '../../../../reducers/business.reducers'
import '../../style.scss'

type Props = {
  selectedBusiness: Business | undefined
}

const AddressInfo = (props: Props) => {
  const { selectedBusiness } = props

  return (
    <Grid item xs={12} sm={6} md={2} lg={2} className="info-container">
      <Typography className="info-title">Address</Typography>
      <Typography className="address-info">
        {`${selectedBusiness?.address?.number}
              ${selectedBusiness?.address?.street},
              ${selectedBusiness?.address?.city},
              ${selectedBusiness?.address?.country}
              ${selectedBusiness?.address?.zip}`}
      </Typography>
    </Grid>
  )
}

export default AddressInfo
