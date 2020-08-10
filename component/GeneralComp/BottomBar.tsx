import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const BottomBar:React.FunctionComponent = () => {

    const [bottomBarIsVisible, setBottomBarIsVisible] = useState<boolean>(false);                                   

    const showBottomBar = () => {

        if (bottomBarIsVisible)
            setBottomBarIsVisible(false);
        else 
            setBottomBarIsVisible(true);
    };

    return (
        <View style={{width: '100%', height: '100%'}}>
            { bottomBarIsVisible && <View style={styles.bottomBar}>
                <TouchableOpacity style={{...styles.bottomBarBtn, marginLeft: '6%'}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../../Images/homeIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.bottomBarBtn, marginLeft: '8%'}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../../Images/messageIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.bottomBarBtn, marginLeft: '43%'}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../../Images/searchIcon.png')}/>
                </TouchableOpacity>
            </View>}

            <TouchableOpacity style={styles.btnShowBottomBar}
                              onPress={() => showBottomBar()}></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    btnShowBottomBar: {
        width: '30%', 
        height: '1%',
        marginTop: '4%',
        backgroundColor: 'black', 
        borderRadius: 20,
        alignSelf: 'center',
    },

        bottomBar: {
            borderTopColor: 'black',
            borderTopWidth: 0.5,
            position: 'absolute',
            flexDirection: 'row',
            width : '100%',
            height: '7%',
            backgroundColor: 'white',
        },

            bottomBarBtn: {
                width: 30, 
                height: 30, 
                top: '2%',
            }
});

export default BottomBar;