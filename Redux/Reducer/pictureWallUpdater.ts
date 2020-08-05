import { Action, ActionData_AddPicture, ActionType } from '../Action/actionTypes';
import { GlobalState } from '../Store/store';

export default function picWallUpdater(store:GlobalState, action:Action<ActionData_AddPicture>)
{
    let nextStoreState;

    switch (action.type)
    {
        case (ActionType.ADD_PICTURE_TO_WALL):
            let newPictureWallList = [...store.picturesOnTheWall, action.data];
            let cpyCurrentGlobalState = {...store};

            cpyCurrentGlobalState.picturesOnTheWall = newPictureWallList;
            nextStoreState = cpyCurrentGlobalState;
            return (nextStoreState);
        default:
            return (store);
    }
}