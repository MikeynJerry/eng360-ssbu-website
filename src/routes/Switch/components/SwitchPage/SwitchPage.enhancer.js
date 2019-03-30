import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import styles from './SwitchPage.styles'
import { withHandlers } from 'recompose'

export default compose(
  withStyles(styles),
  connect(({ ui: { rightJoyconColor, leftJoyconColor } }) => ({
    rightJoyconColor,
    leftJoyconColor
  })),
  withHandlers(({ dispatch }) => ({
    setLeftJoyconColor: props => color =>
      dispatch({ type: 'CHANGE_LEFT_COLOR', payload: color }),
    setRightJoyconColor: props => color =>
      dispatch({ type: 'CHANGE_RIGHT_COLOR', payload: color })
  }))
)
