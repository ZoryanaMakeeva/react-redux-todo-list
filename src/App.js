import React from "react";
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import AllItems from "./containers/pages/AllItems";
import Completed from "./containers/pages/Completed";
import InProgress from "./containers/pages/InProgress";
import store from "./redux/store";

const supportsHistory = 'pushState' in window.history;

function App() {
    return (
        <BrowserRouter forceRefresh={!supportsHistory}>
            <Provider store={store}>
                <header>
                    <NavLink to="/">All Items</NavLink>
                    <NavLink to="/completed">Completed</NavLink>
                    <NavLink to="/in-progress">In Progress</NavLink>
                </header>
                <Switch>
                    <Route exact path="/" component={AllItems}/>
                    <Route exact path="/completed" component={Completed}/>
                    <Route exact path="/in-progress" component={InProgress}/>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
