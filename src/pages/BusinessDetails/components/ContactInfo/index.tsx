import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Business } from '../../../../reducers/business.reducers'
import '../../style.scss'

type Props = {
  selectedBusiness: Business | undefined
}

const ContactInfo = (props: Props) => {
  const { selectedBusiness } = props

  return (
    <Grid item xs={12} sm={6} md={2} lg={2} className="info-container">
      <Typography className="info-title">Contact</Typography>
      <Typography className="contact-info">
        {selectedBusiness?.phone}
      </Typography>
      <Typography className="contact-info">
        {selectedBusiness?.email}
      </Typography>
    </Grid>
  )
}

export default ContactInfo
