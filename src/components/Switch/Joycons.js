import React from 'react'
import { LeftJoyconIcon, RightJoyconIcon } from './Icons'
import Sticky from 'react-stickynode'

const Joycons = ({
  classes,
  leftJoyconColor,
  rightJoyconColor,
  onPressX,
  onPressY,
  onPressA,
  onPressB
}) => (
  <div>
    <Sticky top={100}>
      <LeftJoyconIcon color={leftJoyconColor} />
      <RightJoyconIcon
        color={rightJoyconColor}
        onPressB={onPressX}
        onPressA={onPressY}
        onPressX={onPressA}
        onPressY={onPressB}
      />
    </Sticky>
  </div>
)

export default Joycons
