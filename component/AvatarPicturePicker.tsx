import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';

interface Props {

    top?:string,
    left?:string,
    rigth?:string,
    bottom?:string,
    
}

const AvatarPicturePicker:React.FunctionComponent<Props> = (props:Props) => {

    const ImagePickerOption = {};
    const size:number = 200;
    const radius:number = size/2; 

    const [avatarPicture, setAvatarPicture] = useState<ImagePickerResponse>();

    const ImagePickerCallBack = (data:ImagePickerResponse) => {
        
        if (data.didCancel) { return; }

        if (data.error) { return; }

        if (!data.uri) { return; }

        setAvatarPicture(data);
    };

    return (
        <View style={{width: size, height: size,  
                        top:props.top ? props.top : 0, bottom:props.bottom ? props.bottom : 0,
                        left:props.left ? props.left : 0, right:props.rigth ? props.rigth : 0}}>
            <Image
                style={{ width: size, height: size, borderRadius: radius}} 
                source={{ uri : avatarPicture
                ? avatarPicture.uri
                : 'https://fr.imoconsultores.pt/Assets/Images/avatar-placeholder.jpg'}}
            />
            <TouchableOpacity
                style={{ ...styles.containBtn, width: size, height: size, borderRadius: radius}} 
                onPress={() => ImagePicker.showImagePicker({}, ImagePickerCallBack)}
                >

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