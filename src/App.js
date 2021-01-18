import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe(
    "pk_test_51IAU7vFP8FWrVSGdSz4q0ok9dSUMTXHdeQW1XVgsvHNLXjmPd6eyfonloWna3w2EbdARTzpWXdS5QqjSIaWQC9g800Uw8L6Syr"
);

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
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/orders">
                        <Header />
                        <Orders />
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
