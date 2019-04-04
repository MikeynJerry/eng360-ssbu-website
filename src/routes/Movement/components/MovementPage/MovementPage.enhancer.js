import { compose } from 'redux'
import { connect } from 'react-redux'
import { withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './MovementPage.styles'
import {
  sections,
  videos,
  switches,
  spacing,
  flashing
} from 'markdown/movement.js'

export default compose(
  connect(({ ui: { mode }, character: { name: character } }) => ({
    mode,
    character
  })),
  withProps(() => ({ sections, videos, switches, spacing, flashing })),
  withStyles(styles)
)
