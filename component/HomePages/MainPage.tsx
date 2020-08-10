import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import AvatarPicturePicker from '../GeneralComp/AvatarPicturePicker';
import PictureWall from '../GeneralComp/PictureWall';
import PicturePicker from '../GeneralComp/PicturePicker';
import BottomBar from '../GeneralComp/BottomBar';

const MainPage:React.FunctionComponent = () => {

    let screenDimension = Dimensions.get("screen");
    const addBtnImage:Element = <Image style={{width:70, height: 40}}
                                       source={require('../../Images/addPicturePlusWall.png')}/>

    return (
        <View style={{height: '100%', width: '100%'}}>
            <View style={styles.avatarPicture}>
                <AvatarPicturePicker size={130}/>
            </View>

            <View>
                <Text style={{alignSelf: 'center', marginTop: '4%', fontSize: 25}}>UserName</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                    <TouchableOpacity style={styles.followBtn}>
                        <Text style={{color: 'white', textAlign: 'center', padding: 7, fontSize: 17}}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileBtn}>
                        <Text style={{color: 'black', textAlign: 'center', padding: 7, fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{width: '98%', height: '63%', marginTop: '1%', marginLeft: '1%'}}>
                <PictureWall />
            </View>

            <View style={{position: 'absolute', width: '100%', height: '80%', marginTop: '150%'}}>
                <BottomBar/>
            </View>
            <View style={styles.btnAddPicture}>
                <PicturePicker width={70} height={40} btn={addBtnImage}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    avatarPicture: {
        top: '2%', 
        alignSelf: 'center',
    },

    followBtn: {
        backgroundColor: 'black',
        width: '46%',
        marginLeft: '3%'
    },

    profileBtn: {
        width: '46%',
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: '2%'
    },

    btnAddPicture: {
        width: 75, 
        height:45, 
        top: '89%',
        alignSelf: 'center',
        position: 'absolute'
    },
});

export default MainPage;