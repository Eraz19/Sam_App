import { PictureData } from '../../component/Types';
import { Action, ActionData_AddPicture, ActionType } from '../Action/actionTypes';

let initPicWall:ActionData_AddPicture[] = [];

export default function picWallUpdater(state = initPicWall, action:Action<ActionData_AddPicture>) 
{
    let nextState:ActionData_AddPicture[] ;

    switch (action.type)
    {
        case (ActionType.ADD_PICTURE_TO_WALL):
            nextState = [...state, action.data];
            return (nextState);
        default:
            return (state);
    }
}