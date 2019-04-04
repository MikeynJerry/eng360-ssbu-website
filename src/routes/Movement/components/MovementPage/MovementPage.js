import React from 'react'
import { FullSwitch } from 'components/Switch/Icons'
import TableSwitch from 'components/Switch'
import Markdown from 'components/Markdown'
import { Waypoint } from 'react-waypoint'
import Joycons from 'components/Switch/Joycons'

const Switch = ({ mode, video, flashing }) => (
  <div>
    {mode === 'handheld' && <FullSwitch video={video} {...flashing} />}
    {mode === 'tabletop' && <TableSwitch video={video} {...flashing} />}
  </div>
)

const cameFromBelow = ({ previousPosition }) =>
  previousPosition === Waypoint.above

const cameFromAbove = ({ previousPosition }) =>
  previousPosition === Waypoint.below
export const MovementPage = ({
  classes,
  sections,
  videos,
  switches,
  spacing,
  flashing,
  mode,
  character
}) => (
  <div className={classes.container}>
    <div className={classes.spacer} />
    {mode === 'tabletop' && <Joycons />}
    {sections(character).map((section, i) => (
      <div key={i}>
        <Markdown className={classes.root}>{section}</Markdown>
        <Waypoint
          onEnter={e => {
            if (cameFromBelow(e)) console.log('came from below')
            if (cameFromAbove(e)) console.log('came from above')
          }}
        />
        {switches[i] && (
          <Switch mode={mode} video={videos[i]} flashing={flashing[i]} />
        )}
        {spacing[i] > 0 && (
          <div style={{ width: '100%', height: spacing[i] }} />
        )}
      </div>
    ))}
  </div>
)

export default MovementPage
