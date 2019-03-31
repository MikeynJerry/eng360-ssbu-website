import { compose } from 'redux'
import { connect } from 'react-redux'
import { withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './MovementPage.styles'
import { firstSection, secondSection } from 'markdown/movement.js'

export default compose(
  connect(({ ui: { mode } }) => ({
    mode
  })),
  withProps(() => ({ firstSection, secondSection })),
  withStyles(styles)
)
