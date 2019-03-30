import { Loadable } from 'utils/components'
import { MOVEMENT_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Movement' */ './components/MovementPage')
  })
}
