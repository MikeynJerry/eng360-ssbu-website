import React from 'react'
import {
  LeftJoyconIcon,
  SwitchIcon,
  RightJoyconIcon
} from 'components/Switch/Icons'
import { Typography, Fab } from '@material-ui/core'

const leftColorsRGB = [
  'rgb(130, 130, 130)',
  'rgb(255, 60, 40)',
  'rgb(10, 185, 230)',
  'rgb(230, 255, 0)',
  'rgb(255, 50, 120)'
]

const leftColors = ['gray', 'red', 'blue', 'yellow', 'pink']

const rightColorsRGB = [
  'rgb(130, 130, 130)',
  'rgb(255, 60, 40)',
  'rgb(10, 185, 230)',
  'rgb(230, 255, 0)',
  'rgb(30, 220, 0)'
]

const rightColors = ['gray', 'red', 'blue', 'yellow', 'green']

export const SwitchPage = ({
  classes,
  leftJoyconColor,
  rightJoyconColor,
  setLeftJoyconColor,
  setRightJoyconColor
}) => {
  const override = {
    top: '15vh'
  }
  return (
    <div className={classes.root}>
      <LeftJoyconIcon override={override} color={leftJoyconColor} />
      <SwitchIcon override={override} />
      <RightJoyconIcon override={override} color={rightJoyconColor} />
      <div className={classes.left}>
        <Typography variant="h3">Left Joy-Con Color</Typography>
        {leftColors.map((color, i) => (
          <Fab
            key={color}
            size="large"
            style={{ backgroundColor: leftColorsRGB[i] }}
            onClick={() => setLeftJoyconColor(color)}
            className={classes.fab}
          />
        ))}
      </div>
      <div className={classes.right}>
        <Typography variant="h3">Right Joy-Con Color</Typography>
        {rightColors.map((color, i) => (
          <Fab
            key={color}
            size="large"
            style={{ backgroundColor: rightColorsRGB[i] }}
            onClick={() => setRightJoyconColor(color)}
            className={classes.fab}
          />
        ))}
      </div>
    </div>
  )
}

export default SwitchPage
