import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {

    const[{}, dispatch] = useStateValue();

    useEffect(() => {
        // listen when logged in or out
        auth.onAuthStateChanged(authUser => {
            console.log('THe user is >>>>', authUser)
            if (authUser) {
                // user justed logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                // user logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
        return () => {
            
        }
    }, [])

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/cart">
                        <Header />
                        <Checkout />
                    </Route>

                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>

                    
                </Switch>

            </div>
        </Router>

    );
}

export default App;
