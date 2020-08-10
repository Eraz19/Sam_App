import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../Redux/Store/store';

import {PictureData} from '../Types';


const PictureWall:React.FunctionComponent = () => {
                               
    const defaultDataPicture:PictureData = { uri: '',
                                             key: Math.random().toString(),
                                             width: 0,
                                             height: 0,
                                             spaceTakenInRow: 1};

    const pictureWall = useSelector( (store:GlobalState) => store.picturesOnTheWall)
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [pictureToDisplay, setPictureToDisplay] = useState<PictureData>(defaultDataPicture);

    const displayPicture = (newPictureData:PictureData) => {
        
        if (isVisible)
            setIsVisible(false);
        else 
            setIsVisible(true);

        setPictureToDisplay(newPictureData);
    };

    return (
        <View style={{ width: '100%', height: '100%'}}>

            <View>
                <FlatList data={pictureWall} 
                          numColumns={3}
                          keyExtractor={item => item.image.key}
                          renderItem={({item}) => (
                            <TouchableOpacity style={{...styles.pictureContainer, flex: item.image.spaceTakenInRow}} 
                                              onPress={() => displayPicture(item.image)}>
                                <Image style={styles.picture} source={{ uri : item.image.uri}}/>
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