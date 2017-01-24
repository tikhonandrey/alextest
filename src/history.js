import { browserHistory } from 'react-router'
import store from './store/index';
import { syncHistoryWithStore } from 'react-router-redux'

// Create an enhanced history that syncs navigation events with the store
export default syncHistoryWithStore(browserHistory, store);
