import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import AvatarPicturePicker from '../GeneralComp/AvatarPicturePicker';
import DatePicker from '../GeneralComp//DatePicker';
import ModalSelector from '../GeneralComp//ModalSelector';
import CarouselRef from '../GeneralComp//CarouselRef';

import { StringList } from '../Types';
import { GlobalState } from '../../Redux/Store/store'


const ProRegistrationForm:React.FunctionComponent = () => {

    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [dateDisplay, setDateDisplay] = useState<string>('');
    const datePickerBtn:Element = <View style={styles.datePickerBtn}>
                                      <Text style={styles.datePickerText}>{dateDisplay}</Text>
                                  </View>;

    const professionList:StringList[] = useSelector((store:GlobalState) => store.profession);
    const professionSpecialisationList:StringList[] = useSelector((store:GlobalState) => store.professionalSpecialisation);

    const getBirthOfDate = (date:string) => {

        setDateOfBirth(date);
        setDateDisplay(formatingDate(date));
    };

    const formatingDate = (date:string):string => {

        const day:string = date.substring(7, 11);
        const month:string = date.substring(4, 8);
        const year:string = date.substring(11, 15);
        
        if (date)
            return (day + ' / ' + month + ' / ' + year);
        
        return ('dd / mm / yyyy');
    };

    return (
        <View>
            <ScrollView>
                <Text style={styles.title}>New Account</Text>
                <View style={styles.avatarPicture}>
                    <AvatarPicturePicker size={200}/>
                </View>
                <TextInput  style={styles.userName} placeholder={'UserName'}></TextInput>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2%'}}>
                    <TextInput  style={{...styles.textInput, width: '40%'}} 
                                placeholder={'FirstName'}></TextInput>
                    <TextInput  style={{...styles.textInput, width: '40%'}} 
                                placeholder={'FamilyName'}></TextInput>
                </View>
                <View style={styles.userDataContainer}>
                    <TextInput  style={{...styles.textInput, width: '70%'}}
                                placeholder={'Email'}></TextInput>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '7%'}}>
                        <Text style={{fontSize: 17}}>Date Of Birth</Text>
                        <View style={styles.datePickerBtn}>
                            <DatePicker btnDatePicker={datePickerBtn} getSelectedData={getBirthOfDate}/>
                        </View>
                    </View>
                    
                    <TextInput  style={{...styles.textInput, width: '50%'}}
                                placeholder={'Tel'}></TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2%'}}>
                    <TextInput  style={{...styles.textInput, width: '40%'}} 
                                placeholder={'Country'}></TextInput>
                    <TextInput  style={{...styles.textInput, width: '40%'}} 
                                placeholder={'City'}></TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: '2%'}}>
                        <TextInput  style={{...styles.textInput, width: '40%'}} 
                                    placeholder={'Password'}></TextInput>
                        <TextInput  style={{...styles.textInput, width: '40%'}} 
                                    placeholder={'Confirm Password'}></TextInput>
                </View>
                <View style={styles.professionContainer}>
                    <ModalSelector  btnWidth={'80%'} placeHolder={'Profession'}
                                    data={professionList} marginVertical={"20%"}/>
                    <ModalSelector  btnWidth={'80%'} placeHolder={'Style'}
                                    data={professionSpecialisationList} marginVertical={"40%"}/>
                    <View style={styles.carouselRef}>
                        <CarouselRef />
                    </View>
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

    avatarPicture:{
        alignSelf: 'center'
    },

    userName:{
        alignSelf: 'center',
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

    datePickerBtn: {
        marginLeft: '4%',
        width: '65%',
    },

        datePickerText: {
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            fontSize: 18,
            paddingBottom: '5%',
            paddingLeft: '3%',
        },

    professionContainer: {
        marginTop: '5%'
    },

    carouselRef: {
        left: '5%',
        marginTop: '5%'
    },

    btn: {
        marginTop: '10%',
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