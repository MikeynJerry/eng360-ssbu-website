import React from 'react'
import { FullSwitch } from 'components/Switch/Icons'
import TableSwitch from 'components/Switch'
import Markdown from 'components/Markdown'
import Joycons from 'components/Switch/Joycons'

const Switch = ({ mode }) => (
  <div>
    {mode === 'handheld' && <FullSwitch />}
    {mode === 'tabletop' && <TableSwitch />}
  </div>
)

export const DefendingPage = ({ classes, sections, mode }) => (
  <div className={classes.container}>
    <div className={classes.spacer} />
    {mode === 'tabletop' && <Joycons />}
    {sections.map((section, i) => (
      <div>
        <Markdown className={classes.root}>{section}</Markdown>
        <Switch mode={mode} />
      </div>
    ))}
  </div>
)

export default DefendingPage
