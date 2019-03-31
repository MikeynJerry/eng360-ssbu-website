import React from 'react'
import { LeftJoyconIcon, SwitchIcon, RightJoyconIcon } from './Icons'
import Sticky from 'react-stickynode'

const TableSwitch = ({
  classes,
  leftJoyconColor,
  rightJoyconColor,
  onPressX,
  onPressY,
  onPressA,
  onPressB
}) => (
  <div>
    <Sticky top={300}>
      <LeftJoyconIcon color={leftJoyconColor} />
      <RightJoyconIcon
        color={rightJoyconColor}
        onPressB={onPressX}
        onPressA={onPressY}
        onPressX={onPressA}
        onPressY={onPressB}
      />
    </Sticky>
    <SwitchIcon />
  </div>
)

export default TableSwitch
