import { createStore } from 'redux';

import { reducer } from '../Reducer/reducer';

import { ActionData_AddPicture, 
         ActionData_UpdateAvatarPicture, 
         ActionData_SetUserProfile} from '../Action/actionTypes';

import { StringList, UserProfile } from '../../component/Types';

export interface GlobalState {

    userProfilData:ActionData_SetUserProfile,
    picturesOnTheWall:ActionData_AddPicture[],
    avatarPicture:ActionData_UpdateAvatarPicture,
    
    profession:StringList[],
    professionalSpecialisation:StringList[],
}

export const initial_store:GlobalState = {

    userProfilData: {userProfile: { firstName: '',
                                    familyName: '',
                                    email: '',
                                    dateOfBirth: '',
                                    tel: '',
                                    profession: '',
                                    professionalSpeciality: ''}},

    picturesOnTheWall: [],

    avatarPicture: {avatarPicture: 'https://fr.imoconsultores.pt/Assets/Images/avatar-placeholder.jpg'},

    
    profession: [{key: Math.random().toString(),title: 'Musicien',},
                    {key:  Math.random().toString(),title: 'Graphist',},
                    {key:  Math.random().toString(),title: 'Actor',},],

    professionalSpecialisation: [{key: Math.random().toString(),title: 'Singer',},
                                {key:  Math.random().toString(),title: 'Drummer',},
                                {key:  Math.random().toString(),title: 'Guitarist',}]

}

const store:GlobalState = createStore(reducer, initial_store);

export default store;

