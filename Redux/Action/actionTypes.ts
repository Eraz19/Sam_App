import { PictureData, UserProfile } from '../../component/Types';

export interface Action<T = ActionData>
{
    readonly type:ActionType,
    readonly data:T,
}

export enum ActionType
{
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    ADD_PICTURE_TO_WALL = 'ADD_PICTURE_TO_WALL',
    UPDATE_AVATAR_PICTURE = 'UPDATE_AVATAR_PICTURE',

}

export type  ActionData = (
    ActionData_AddPicture|
    ActionData_UpdateAvatarPicture|
    ActionData_SetUserProfile
);

export interface ActionData_AddPicture 
{ image:PictureData }

export interface ActionData_UpdateAvatarPicture
{ avatarPicture:string }

export interface ActionData_SetUserProfile
{ userProfile:UserProfile}
