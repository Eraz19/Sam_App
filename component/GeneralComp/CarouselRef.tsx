import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image, TextInput } from 'react-native';

import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import {PictureData} from '../Types';

const CarouselRef:React.FunctionComponent = () => {

    const [imageList, setImageList] = useState<PictureData[]>([]);

    const ImagePickerCallBack = (data:ImagePickerResponse) => {
        
        const tempPictureUri:PictureData = { uri: data.uri, 
                                             key: Math.random().toString(), 
                                             title:'', 
                                             width: 0, 
                                             height: 0};

        if (data.didCancel) { return; }

        if (data.error) { return; }

        if (!data.uri) { return; }

        setImageList([...imageList, tempPictureUri]);
    };

    const changeNameRef = (value:string, key:string) => {
        
        let index:number = 0;

        imageList.forEach(Arrayelem => {
            if (Arrayelem.key !== key)
                index++;
        });

        const cpyImageList:PictureData[] = [...imageList];
        cpyImageList[index].title = value;
        setImageList(cpyImageList);
    };

    return (
        <View>
            <Text style={{color: '#e0695c', left: '3%', fontSize: 17}} >Artist References</Text>
            <View style={styles.carouselContainer}>
                <ScrollView horizontal={true}>
                    {imageList.map(picElem => (
                        <View key={picElem.key} style={styles.pictureContainer}>
                            <Image style={styles.carouselImages} source={{ uri : picElem.uri}}/>
                            <TextInput placeholder={'Ref Name'} style={styles.title} 
                                       onChangeText={(newText) => changeNameRef(newText, picElem.key)}></TextInput>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={{...styles.btnAddPicture, zIndex: 2}}
                                  onPress={() => ImagePicker.showImagePicker({}, ImagePickerCallBack)}>
                    <Image style={{width: 50, height: 50, zIndex: 1}} source={require('../../Images/addPicturePlus.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        width: '90%',
        height: 200,
        borderColor: '#e0695c',
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: 'rgba(224, 105, 92, 0.7)'
    },

        pictureContainer: {
            width: 160,
            height: '100%',
            marginHorizontal: 10
        },

            carouselImages: {
                top: '5%',
                width: 150,
                height: 150,
                borderColor: 'black',
                borderWidth: 1
            },   

    btnAddPicture: {
        position: 'absolute',
        width: 50, 
        height: 50, 
        top: '70%', 
        left: '82%',},

    title: {
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        fontSize: 17
    }
});

export default CarouselRef;