import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())

ReactDOM.render(<Provider store= {store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
