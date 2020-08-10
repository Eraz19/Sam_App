import React, { } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignIn:React.FunctionComponent = () => {

    return (
        <View>
            <Text style={styles.title}>Sign In</Text>
            <View style={{...styles.normalSignInContainer, width: '60%',}}>
                <TextInput style={styles.inputText} placeholderTextColor={'white'} placeholder={'UserName or Email'}></TextInput>
                <TextInput style={styles.inputText} placeholderTextColor={'white'} placeholder={'Password'}></TextInput>   
            </View>
            <TouchableOpacity style={{alignItems: 'center'}}>
                <Text style={{color: '#5465a8'}} >Create new account</Text>
            </TouchableOpacity>

            <View style={{...styles.socialNetworkSignInContainer, width: '80%',}}>
                <View style={{backgroundColor: '#3b5998', borderRadius: 30,  paddingVertical: '3%'}}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-evenly',
                         alignItems: 'center'}}>
                        <Text style={{fontSize: 20, right: 30,color: 'white'}} >FaceBook</Text>
                        <Image style={{width:30, height: 30, left: 20}} source={require('../Images/facebookLogo.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{ borderRadius: 30,  paddingVertical: '3%',
                                 marginTop: '2%', borderColor: 'red', borderWidth: 1}}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-evenly',
                         alignItems: 'center'}}>
                        <Text style={{fontSize: 20, right: 30, color: 'red'}} >Google</Text>
                        <Image style={{width:30, height: 30, left: 30}} source={require('../Images/googleLogo.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    title: {
        alignSelf: 'center',
        marginTop: '10%',
        fontSize: 50
    },

    normalSignInContainer: {
        alignSelf: 'center',
        marginTop: '40%',
    },

    socialNetworkSignInContainer: {
        alignSelf: 'center',
        marginTop: '30%',
    },

    inputText: {
        textAlign: 'center',
        marginVertical: '2%',
        backgroundColor:  '#e0695c',
        borderRadius: 30,
        textAlignVertical: 'bottom',
        fontSize: 20,
        color: 'white'
    }
});

export default SignIn;