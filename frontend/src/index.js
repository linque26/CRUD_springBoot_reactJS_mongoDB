import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import Edit from './components/Edit';
import Add from './components/Add';
import Show from './components/Show';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
<div>
    <Route exact path='/' component={App} />
    <Route path='/edit/:id' component={Edit} />
    <Route path='/add' component={Add} />
    <Route path='/show/:id' component={Show} />
</div>
</BrowserRouter>, 
document.getElementById('root')
);
registerServiceWorker();
