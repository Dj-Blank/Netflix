import React, { useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import "./styles/styles.scss";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Loginscreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import { GlobalProvider } from './features/GlobalState';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth => {
      if (userAuth) {
        console.log(userAuth);;
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    })) ;

    return unsubsribe;
  }, [dispatch]);

  return (
    <div className="app">
      <GlobalProvider>
      <Router>
        {!user ? (
          <Loginscreen />

        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
          </Route>
            <Route exact path="/">
              <HomeScreen />
          </Route>
        </Switch>
        )}
        
    </Router>

      </GlobalProvider>
      

    </div>
  );
}

export default App;
