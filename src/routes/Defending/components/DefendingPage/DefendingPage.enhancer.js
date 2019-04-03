import { compose } from 'redux'
import { connect } from 'react-redux'
import { withProps } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './DefendingPage.styles'
import { sections } from 'markdown/defending'

export default compose(
  connect(({ ui: { mode } }) => ({
    mode
  })),
  withProps(() => ({ sections })),
  withStyles(styles)
)
