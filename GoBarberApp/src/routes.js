import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
