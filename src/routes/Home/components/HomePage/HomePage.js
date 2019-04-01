import React from 'react'
import './HomePage.css'

const Home = ({ classes }) => (
  <div className={classes.root}>
    <div className={[classes.circle, 'container'].join(' ')}>
      <image className={'centerImg'} />
    </div>
    <div className={classes.smash} />
    <div className={classes.spirits} />
    <div className={classes.games} />
    <div className={classes.vault}>Vault</div>
    <div className={classes.online} />
  </div>
)

export default Home
