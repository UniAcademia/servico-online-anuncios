import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Establishment from './pages/Establishment';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/entrar" component={Login} />
                <Route path="/cadastrar" component={Cadastro} />
                <Route path="/estabelecimento" component={Establishment} />
            </Switch>
        </BrowserRouter>
    )
}