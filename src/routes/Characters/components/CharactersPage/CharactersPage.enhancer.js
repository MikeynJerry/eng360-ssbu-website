import { compose } from 'redux'
import { connect } from 'react-redux'
import { withProps, withHandlers } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './CharactersPage.styles'
import { characters, characterList } from 'constants/characters'

export default compose(
  withProps(() => ({ characters, characterList })),
  connect(({ character }) => ({ character })),
  withHandlers(({ dispatch }) => ({
    selectCharacter: props => character =>
      dispatch({ type: 'SELECT_CHARACTER', payload: character })
  })),
  withStyles(styles)
)
