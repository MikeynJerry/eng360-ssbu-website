import React from 'react'
import { FullSwitch } from 'components/Switch/Icons'
import TableSwitch from 'components/Switch'
import Markdown from 'components/Markdown'
import VisibilitySensor from 'react-visibility-sensor'
import Joycons from 'components/Switch/Joycons'

const Switch = ({ mode, video, flashing, ...rest }) => (
  <div>
    {mode === 'handheld' && <FullSwitch video={video} {...flashing} />}
    {mode === 'tabletop' && <TableSwitch video={video} {...rest} />}
  </div>
)

const visiblity = [false, false, false, false, false, false, false]

const onVisibilityChange = (flashing, setFlashing, i) => isVisible => {
  if (isVisible) {
    setFlashing(flashing)
  } else {
    if (visiblity[i] !== isVisible) setFlashing({})
  }
  visiblity[i] = isVisible
}

export const DefendingPage = ({
  classes,
  sections,
  videos,
  switches,
  spacing,
  flashing,
  mode,
  character,
  setFlashing,
  currentFlashing
}) => (
  <div className={classes.container}>
    <div className={classes.spacer} />
    {mode === 'tabletop' && <Joycons {...currentFlashing} />}
    {sections(character).map((section, i) => (
      <div key={i}>
        <Markdown className={classes.root}>{section}</Markdown>
        {switches[i] && (
          <VisibilitySensor
            onChange={onVisibilityChange(flashing[i], setFlashing, i)}>
            <Switch mode={mode} video={videos[i]} flashing={flashing[i]} />
          </VisibilitySensor>
        )}
        {spacing[i] > 0 && (
          <div style={{ width: '100%', height: spacing[i] }} />
        )}
      </div>
    ))}
  </div>
)

export default DefendingPage
