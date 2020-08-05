import {createStore, Store} from 'redux';
import picWallUpdater from '../Reducer/pictureWallUpdater';

const store:Store = createStore(picWallUpdater);

export default store;

