import React from 'react'
import { FullSwitch } from 'components/Switch/Icons'
import TableSwitch from 'components/Switch'
import Markdown from 'components/Markdown'
import { Waypoint } from 'react-waypoint'
import Joycons from 'components/Switch/Joycons'

const Switch = ({ mode }) => (
  <div>
    {mode === 'handheld' && <FullSwitch />}
    {mode === 'tabletop' && <TableSwitch />}
  </div>
)

const cameFromBelow = ({ previousPosition }) =>
  previousPosition === Waypoint.above

const cameFromAbove = ({ previousPosition }) =>
  previousPosition === Waypoint.below
export const DefendingPage = ({ classes, sections, mode }) => (
  <div className={classes.container}>
    <div className={classes.spacer} />
    {mode === 'tabletop' && <Joycons />}
    {sections.map((section, i) => (
      <div>
        <Markdown className={classes.root}>{section}</Markdown>
        <Waypoint
          onEnter={e => {
            if (cameFromBelow(e)) console.log('came from below')
            if (cameFromAbove(e)) console.log('came from above')
          }}
        />
        <Switch mode={mode} />
      </div>
    ))}
  </div>
)

export default DefendingPage
