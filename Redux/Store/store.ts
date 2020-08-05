import { createStore } from 'redux';

import picWallUpdater from '../Reducer/pictureWallUpdater';
import { ActionData_AddPicture } from '../Action/actionTypes';

export interface GlobalState {

    picturesOnTheWall:ActionData_AddPicture[],

}

const initial_store:GlobalState = {

    picturesOnTheWall : [],
}

const store:GlobalState = createStore(picWallUpdater, initial_store);

export default store;

