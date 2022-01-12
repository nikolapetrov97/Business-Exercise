// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getBusinesses } from '../../actions'
import { ApplicationState } from '../../reducers'
import { Business } from '../../reducers/business.reducers'
import './style.scss'

const Home = () => {
  const dispatch = useDispatch()
  const businessState = useSelector((state: ApplicationState) => state.business)
  const history = useHistory()

  useEffect(() => {
    dispatch(getBusinesses())
  }, [])

  const handleSelect = (id: string) => {
    if (id) history.push(`/business/${id}`)
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="home-page-container"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="businesses-container"
      >
        <Grid container className="column-titles-container">
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography className="column-title">NAME</Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Typography className="column-title">DESCRIPTION</Typography>
          </Grid>
        </Grid>
        {businessState?.businesses?.length > 0
          ? businessState?.businesses?.map((business: Business) => {
              return (
                <Grid
                  key={business?.id}
                  container
                  className="businesses-details"
                  onClick={() => handleSelect(business?.id)}
                >
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography>{business?.name}</Typography>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8} lg={8}>
                    <Typography>{business?.description}</Typography>
                  </Grid>
                </Grid>
              )
            })
          : null}
      </Grid>
    </Grid>
  )
}

export default Home
