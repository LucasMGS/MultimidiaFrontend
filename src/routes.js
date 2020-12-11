import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import UploadVideo from './Components/UploadVideo/UploadVideo';
import Profile from './Components/Profile/Profile';

function Routes() {
    return (                    
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/uploadvideo' component={UploadVideo} />
                    <Route path='/profile' component={Profile} />          
                </Switch>
            </BrowserRouter>    
    );
}

export default Routes;