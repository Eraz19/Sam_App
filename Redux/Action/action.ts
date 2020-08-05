import { Action, ActionData_AddPicture, ActionType } from './actionTypes';

export const addPictureToWall = (image:ActionData_AddPicture):Action<ActionData_AddPicture> => {
    return (
        {
            type: ActionType.ADD_PICTURE_TO_WALL,
            data: image, 
        }
    );
};
