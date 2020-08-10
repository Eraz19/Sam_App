import { Action, ActionData_AddPicture, ActionType, ActionData_UpdateAvatarPicture } from './actionTypes';

export const addPictureToWall = (image:ActionData_AddPicture):Action<ActionData_AddPicture> => {
    return (
        {
            type: ActionType.ADD_PICTURE_TO_WALL,
            data: image, 
        }
    );
};

export const updateAvatarPicture = (avatarPicture:ActionData_UpdateAvatarPicture):Action<ActionData_UpdateAvatarPicture> => {
    return (
        {
            type: ActionType.UPDATE_AVATAR_PICTURE,
            data: avatarPicture,
        }
    );
};
