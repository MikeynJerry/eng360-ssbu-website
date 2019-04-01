import React from 'react'

const Home = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.circle} />
    <div className={classes.col}>
      <div className={classes.quad1}>Test1</div>
      <div className={classes.quad3}>Test3</div>
    </div>
    <div className={classes.col}>
      <div className={classes.quad2}>Test2</div>
      <div className={classes.quad4}>Test4</div>
    </div>
  </div>
)

export default Home
