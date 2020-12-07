import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Details from '../Components/Details';
import NewBlog from '../Components/NewBlog';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact render={() => <Dashboard />} />
                <Route path='/posts/:id' render={() => <Details />} />
                <Route path='/NewPosts' render={() => <NewBlog />} />
            </Switch>
        </>
    );
};

export default Routes;
