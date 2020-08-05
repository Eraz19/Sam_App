import React, { } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import PicturePicker from './PicturePicker';
import PictureWall from './PictureWall';

const MainPageTest:React.FunctionComponent = () => {

    const addPictureBtn:Element = <Image style={{width: '100%', height: '100%'}}
                                         source={require('../Images/addPicturePlus.png')} />;

    return (
        <View style={{width: '100%', height: '100%', backgroundColor: 'bisque'}}>
            <PicturePicker width={50} height={50} 
                           btn={addPictureBtn} left={'45%'} top={'70%'}/>
            <PictureWall width={'98%'} height={'80%'} left={'1%'}/>
        </View>
    );
};


export default MainPageTest;