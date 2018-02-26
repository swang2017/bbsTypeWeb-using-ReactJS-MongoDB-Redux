import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/home.js'
import Job from './components/job.js'
import FleaMarket from './components/fleaMarket.js'
import {Baselayout} from './components/baseLayout.js'
import YellowPage from './components/yellowPage.js'
import PostForm from './components/postForm.js'
import ReplyForm from './components/replyForm.js'
import PostDetails from './components/postDetails.js'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(
  reducer, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store = {store}>
  <BrowserRouter>
  <Baselayout>
  <Switch>
    <Route path="/yellowPage" component={YellowPage} />
    <Route path="/fleaMarket" component={FleaMarket} />
    <Route path="/jobs" component={Job} />
    <Route path="/newPost" component={PostForm} />
    <Route path="/newReply" component={ReplyForm} />
    <Route path="/postDetails" component={PostDetails} />
    <Route path="/" component={Home} />
  </Switch>
  </Baselayout>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
