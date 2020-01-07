import {createAppContainer,createSwitchNavigator} from 'react-navigation'

import Login from './pages/Login'
import Console from './pages/Console'


const Routes = createAppContainer(
   createSwitchNavigator({
      Login,
      Console
   })
)
export default Routes