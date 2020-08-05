import React, { } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import AvatarPicturePicker from './AvatarPicturePicker';
import PictureWall from './PictureWall';

const MainPage:React.FunctionComponent = () => {

    let screenDimension = Dimensions.get("screen");

    return (
        <View style={{height: screenDimension.height}}>
            <View style={{top: '2%', alignSelf: 'center'}}>
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
            <PictureWall />
            <View style={styles.bottomBar}>
                <TouchableOpacity style={{width: 25, height: 25, marginLeft: '6%'}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../Images/searchIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 25, height: 25, marginLeft: '8%'}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../Images/homeIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 25, height: 25, marginLeft: '48%'}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../Images/messageIcon.png')}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.bottomBtnBar}></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

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

    bottomBtnBar: {
        width: '30%', 
        height: '1%', 
        backgroundColor: 'black', 
        bottom: '1.5%',
        alignSelf: 'center',
        borderRadius: 10
    },

        bottomBar: {
            flexDirection: 'row',
            position: 'absolute',
            width : '100%',
            backgroundColor: 'white',
            marginTop: '148.2%',
            paddingVertical: '3%'
        }
});

export default MainPage;