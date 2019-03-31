import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import styles from './SwitchPage.styles'
import { withHandlers } from 'recompose'

export default compose(
  withStyles(styles),
  connect(({ ui: { rightJoyconColor, leftJoyconColor, mode } }) => ({
    rightJoyconColor,
    leftJoyconColor,
    mode
  })),
  withHandlers(({ dispatch }) => ({
    setLeftJoyconColor: props => color =>
      dispatch({ type: 'CHANGE_LEFT_COLOR', payload: color }),
    setRightJoyconColor: props => color =>
      dispatch({ type: 'CHANGE_RIGHT_COLOR', payload: color }),
    selectMode: props => mode =>
      dispatch({ type: 'CHANGE_DISPLAY_MODE', payload: mode })
  }))
)
