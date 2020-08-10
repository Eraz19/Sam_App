import { Action, ActionData_AddPicture, ActionType, ActionData_UpdateAvatarPicture, ActionData } from '../Action/actionTypes';
import { GlobalState, initial_store } from '../Store/store';

export function reducer(store:GlobalState = initial_store, action:Action<ActionData>)
{
    let cpyCurrentGlobalState = {...store};

    switch (action.type)
    {
        case (ActionType.ADD_PICTURE_TO_WALL):
        {
            const args:ActionData_AddPicture = action.data as ActionData_AddPicture;
            let newPictureWallList:ActionData_AddPicture[] = [...store.picturesOnTheWall, args];

            cpyCurrentGlobalState.picturesOnTheWall = newPictureWallList;
            return (cpyCurrentGlobalState);
        }
        case (ActionType.UPDATE_AVATAR_PICTURE):
        {
            const args:ActionData_UpdateAvatarPicture = action.data as ActionData_UpdateAvatarPicture;
            cpyCurrentGlobalState.avatarPicture = args;
            return (cpyCurrentGlobalState);
        }
        default:
            return (store);
    }
}