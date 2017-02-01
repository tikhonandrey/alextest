import { browserHistory } from 'react-router'
import store from './store/index';
import { syncHistoryWithStore } from 'react-router-redux'

// Create an enhanced history that syncs navigation events with the store
export default syncHistoryWithStore(browserHistory, store,{
    //When false, the URL will not be kept in sync during time travel.
    // This is useful when using persistState from Redux DevTools
    // and not wanting to maintain the URL state when restoring state.
    adjustUrlOnReplay: false
});
