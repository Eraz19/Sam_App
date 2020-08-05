import { PictureData } from '../../component/Types';

export interface Action<T = ActionData>
{
    readonly type:ActionType,
    readonly data:T,
}

export enum ActionType
{
    ADD_PICTURE_TO_WALL = "ADD_PICTURE_TO_WALL",

}

export type  ActionData = (
    ActionData_AddPicture
);

export interface ActionData_AddPicture 
{ image:PictureData }