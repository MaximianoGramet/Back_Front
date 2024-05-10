import './App.css'
import LoginPage from './Components/Login'
import RegisterPage from './Components/Register'
import ComponenteSolicitud from './Components/ComponenteSolicitud'
import { Redirect, Route, Switch } from 'wouter';
import CurretUser from './Components/Current';
import Cart from './Components/Cart';


function App() {

  return (
    <>

      <Route path="/register" component={RegisterPage} />
      <Route path="/current" component={CurretUser} />
      <Route path="/Cart" component={Cart} />
       <Switch>
       <Route path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/products" component={ComponenteSolicitud} />
        {/* <Route path="/redirect" component={RedirectPage} /> */}
      </Switch>
      <Redirect to="/login"/>
    </>
  )
}

export default App
