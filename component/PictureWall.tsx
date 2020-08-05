import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native';

import { pictureData } from './Types';

interface Props {
    width:number|string;
    height:number|string;
    left?:number|string;
    right?:number|string;
    top?:number|string;
    bottom?:number|string;
}

const PictureWall:React.FunctionComponent<Props> = (props:Props) => {
                               
    const defaultDataPicture:pictureData = { uri: '',
                                             key: Math.random().toString(),
                                             width: 0,
                                             height: 0,
                                             spaceTakenInRow: 1};

    const [imageList, setImageList] = useState<pictureData[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [pictureToDisplay, setPictureToDisplay] = useState<pictureData>(defaultDataPicture);

    const displayPicture = (newPictureData:pictureData) => {
        
        if (isVisible)
            setIsVisible(false);
        else 
            setIsVisible(true);

        setPictureToDisplay(newPictureData);
    };

    return (
        <View style={{ width: '100%', height: '100%', borderColor: 'black', borderWidth: 2}}>

            <View style={{ width: props.width, height: props.height, 
                           left: props.left ? props.left : 0, right: props.right ? props.right : 0,
                           top: props.top ? props.top : 0, bottom: props.bottom ? props.bottom : 0,
                           position:'absolute', borderColor: 'red', borderWidth: 2}}>
                <FlatList data={imageList} 
                          numColumns={3}
                          renderItem={({item}) => (
                            <TouchableOpacity style={{...styles.pictureContainer, flex: item.spaceTakenInRow}} 
                                              onPress={() => displayPicture(item)}>
                                <Image style={styles.picture} source={{ uri : item.uri}}/>
                            </TouchableOpacity>)}>   
                </FlatList>
            </View>

            <Modal visible={isVisible} transparent={true}>
                <TouchableOpacity style={styles.imageDisplayBackground}
                                  onPress={() => displayPicture(defaultDataPicture)}>
                        <View style={styles.imageDisplayContainer}>
                            <View style={{ width: (pictureToDisplay.width + 100), 
                                           height: (pictureToDisplay.height + 100)}}>
                                <Image style={styles.imageDisplay} 
                                       resizeMode={'contain'} 
                                       source={{ uri : pictureToDisplay.uri}}/>
                            </View>
                        </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({

    pictureContainer: {
        width: 200, 
        height: 200, 
        margin: '1%',
    },
    
        picture: {
            width: '100%', 
            height: '100%',
        },

    imageDisplayBackground: {
        backgroundColor: 'rgba(0,0,0, 0.8)', 
        height: '100%',
    },

        imageDisplayContainer: {
            flex: 1, 
            alignSelf: 'center', 
            justifyContent: 'center',
        },

            imageDisplay: {
                width: '100%', 
                height: '100%', 
                flex:1,
            },

});

export default PictureWall;