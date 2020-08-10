import React, { } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatarPicture } from '../../Redux/Action/pictureAction';
import { GlobalState } from '../../Redux/Store/store';

interface Props {
    size:number;
}

const AvatarPicturePicker:React.FunctionComponent<Props> = (props:Props) => {

    const dispatch = useDispatch();
    const avatarPicture = useSelector((store:GlobalState) => store.avatarPicture)

    const ImagePickerCallBack = (data:ImagePickerResponse) => {
        
        if (data.didCancel) { return; }

        if (data.error) { return; }

        if (!data.uri) { return; }

        dispatch(updateAvatarPicture({avatarPicture: data.uri}));
    };

    return (
        <View style={{width: props.size, height: props.size}}>
            <Image style={{ width: props.size, height: props.size, borderRadius: props.size/2}} 
                   source={{ uri : avatarPicture.avatarPicture }}/>
            
            <TouchableOpacity style={{ ...styles.containBtn, width: props.size, 
                                       height: props.size, borderRadius: props.size/2}} 
                              onPress={() => ImagePicker.showImagePicker({}, ImagePickerCallBack)}>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    containBtn: {
        position: 'absolute',
    },
    
});

export default AvatarPicturePicker;