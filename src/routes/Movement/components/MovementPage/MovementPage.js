import React from 'react'
import { FullSwitch } from 'components/Switch/Icons'
import TableSwitch from 'components/Switch'
import Markdown from 'components/Markdown'

const Switch = ({ mode }) => (
  <div>
    {mode === 'handheld' && (
      <FullSwitch
        onPressB={() => console.log('b')}
        onPressA={() => console.log('a')}
        onPressX={() => console.log('x')}
        onPressY={() => console.log('y')}
      />
    )}
    {mode === 'tabletop' && <TableSwitch />}
  </div>
)

export const MovementPage = ({
  classes,
  firstSection,
  secondSection,
  mode
}) => (
  <div className={classes.container}>
    <div className={classes.spacer} />
    <Markdown className={classes.root}>{firstSection}</Markdown>
    <Switch mode={mode} />
    <Markdown className={classes.root}>{secondSection}</Markdown>
  </div>
)

export default MovementPage
