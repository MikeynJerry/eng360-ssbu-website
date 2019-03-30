import { Loadable } from 'utils/components'
import { CHARACTERS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Characters' */ './components/CharactersPage')
  })
}
