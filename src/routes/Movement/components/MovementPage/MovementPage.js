import React from 'react'
import PropTypes from 'prop-types'
import Switch from 'components/Switch'

export const MovementPage = ({ movement, classes }) => (
  <div className={classes.container}>
    <Switch />
  </div>
)

MovementPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  movement: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default MovementPage
