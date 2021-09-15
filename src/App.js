
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/Shop/shopcomponent'
import Header  from './components/header/Headercomponent';
import SignInAndSignUpPage from './pages/signinsignup/SignInsignUp'

function App() {
  return (

    <div>
         <Header />
      { <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-In' component={SignInAndSignUpPage} />
    </Switch> }
    </div>
  );
}

export default App;
