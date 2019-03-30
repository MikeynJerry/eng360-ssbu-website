import { Loadable } from 'utils/components'
import { SWITCH_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Switch' */ './components/SwitchPage')
  })
}
