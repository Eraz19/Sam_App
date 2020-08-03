import React, { } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import AvatarPicturePicker from './AvatarPicturePicker';
import DatePicker from './DatePicker';
import ModalSelector from './ModalSelector';
import CarouselRef from './CarouselRef';



interface Props {

}

const ProRegistrationForm:React.FunctionComponent = (props:Props) => {
    const ProfessionData = [
        {key: Math.random().toString(),title: 'Musicien',},
        {key:  Math.random().toString(),title: 'Graphist',},
        {key:  Math.random().toString(),title: '...',},
        {key: Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: '...',},
        {key: Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: '...',},
        {key: Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: '...',},
        {key: Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: 'Actor',},
      ];

    const StyleData = [
        {key: Math.random().toString(),title: 'Singer',},
        {key:  Math.random().toString(),title: 'Drummer',},
        {key:  Math.random().toString(),title: '...',},
        {key: Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: '...',},
        {key: Math.random().toString(),title: '...',},
        {key:  Math.random().toString(),title: 'Guitarist',},
      ];

    return (
        <View>
            <ScrollView>
            <Text style={styles.title}>New Account</Text>
            <AvatarPicturePicker top={'3%'} left={'25%'}/>
            <TextInput  style={styles.userName} 
                        placeholder={'UserName'}></TextInput>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2%'}}>
                    <TextInput  style={{...styles.textInput, width: '40%'}} 
                                placeholder={'FirstName'}></TextInput>
                    <TextInput  style={{...styles.textInput, width: '40%'}} 
                                placeholder={'FamilyName'}></TextInput>
                </View>
                <View style={styles.userDataContainer}>
                    <TextInput  style={{...styles.textInput, width: '70%'}}
                                placeholder={'Email'}></TextInput>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end', marginVertical: '2%'}}>
                        <Text style={{fontSize: 17}}>Date Of Birth</Text>
                        <DatePicker  left={'60%'} top={'1.5%'}/>
                    </View>
                    <TextInput  style={{...styles.textInput, width: '50%', marginTop:'1%'}}
                                placeholder={'Tel'}></TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: '2%'}}>
                        <TextInput  style={{...styles.textInput, width: '40%'}} 
                                    placeholder={'Password'}></TextInput>
                        <TextInput  style={{...styles.textInput, width: '40%'}} 
                                    placeholder={'Confirm Password'}></TextInput>
                </View>
                <View style={styles.professionContainer}>
                    <ModalSelector  btnWidth={'80%'} placeHolder={'Profession'}
                                    data={ProfessionData} marginVertical={"20%"}/>
                    <ModalSelector  btnWidth={'80%'} placeHolder={'Style'}
                                    data={StyleData} marginVertical={"40%"}/>
                    <CarouselRef left={'5%'} top={'5%'}/>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => {console.log('Added');}}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 50,
        alignSelf: 'center',
    },

    userName:{
        alignSelf: 'center',
        marginTop: '5%',
        fontSize: 25
    },

    textInput:{
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize: 17
    },

    userDataContainer: {
        marginLeft: '6.5%',
    },

    professionContainer: {
        marginTop: '8%'
    },

    btn: {
        marginTop: '15%',
        marginBottom: '5%',
        width: '35%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#e0695c'
    },

        btnText: {
            alignSelf: 'center',
            color: 'white',
            paddingVertical: '6%'
        }
});

export default ProRegistrationForm;