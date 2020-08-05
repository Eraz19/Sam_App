import React, { } from 'react';
import { TouchableOpacity, View, Button } from 'react-native';
import ImagePicker, { ImagePickerResponse, ImagePickerOptions } from 'react-native-image-picker';
import store from '../Redux/Store/store';

import { PictureData } from './Types';
import { addPictureToWall } from '../Redux/Action/action';
import { ActionData_AddPicture } from '../Redux/Action/actionTypes';

interface Props {
    width:number|string;
    height:number|string;
    left?:number|string;
    right?:number|string;
    top?:number|string;
    bottom?:number|string;

    btn:Element;
}

const PicturePicker:React.FunctionComponent<Props> = (props:Props) => {

    const defaultDataPicture:PictureData = { uri: '',
                                             key: Math.random().toString(),
                                             width: 0,
                                             height: 0,
                                             spaceTakenInRow: 1};

    const imagePickerOption:ImagePickerOptions = { mediaType: 'mixed',
                                                   noData: true};

    const spaceTakenByImageInRow = ():number => {

        let imageSpace:number;

        imageSpace = Math.random();
        if (imageSpace < 0.4)
            imageSpace = 1;
        else if(imageSpace < 0.8)
            imageSpace = 2;
        else
            imageSpace = 3;

        return (imageSpace);
    };

    const ImagePickerCallBack = (data:ImagePickerResponse) => {
        
        if (data.didCancel) { return; }

        if (data.error) { return; }

        if (!data.uri) { return; }

        const tempPictureData:PictureData = { uri: data.uri, 
                                             key: Math.random().toString(), 
                                             width: data.width,
                                             height: data.height,
                                             spaceTakenInRow: spaceTakenByImageInRow()};
        console.log(tempPictureData);

        const dataToUpdatePictureWall:ActionData_AddPicture = {image: tempPictureData};

        console.log(dataToUpdatePictureWall);

        store.dispatch(addPictureToWall(dataToUpdatePictureWall));
        store.getState();
    };

    return (
        <View>
            <Button title={'fuck you'} onPress={() => ImagePicker.showImagePicker( imagePickerOption, ImagePickerCallBack)}/>
        </View>
    );
};

export default PicturePicker;