import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../GeneralComp/DatePicker';

const Message:React.FunctionComponent = () => {

    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [dateDisplay, setDateDisplay] = useState<string>('');

    const datePickerBtn:Element = <View style={styles.datePickerBtn}>
                                      <Text style={styles.datePickerText}>{dateDisplay}</Text>
                                  </View>;

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
        <View style={{width: '100%', height: '100%'}}>
            <View style={styles.messageInfo}>
                <TextInput placeholder='   Receiver' 
                           style={styles.messageTarget}></TextInput>
            </View>
            <View style={styles.datePickerBtn}>
                <DatePicker btnDatePicker={datePickerBtn} getSelectedData={getBirthOfDate}/>
            </View>
            <View style={styles.messageContentContainer}>
                <TextInput style={styles.messageContent}></TextInput>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    messageInfo: {
        width: '90%',
        alignSelf: 'center',
    },

        messageTarget: {
            borderColor: 'black',
            borderWidth: 1,
            fontSize: 19,
            marginTop: '3%'
        },

    datePickerBtn: {
        alignSelf: 'center',
        width: '95%',
        marginTop: '0.5%'
    },

        datePickerText: {
            backgroundColor: '#e0695c',
            fontSize: 18,
            textAlignVertical: 'center',
            color: 'white',
            padding: '4%',
            textAlign: 'center'
        },

    messageContentContainer: {
        borderWidth: 1,
        borderColor: 'black',
        width: '95%',
        alignSelf: 'center',
        height: '75%',
        borderRadius: 10,
        marginTop: '4%'
    },

        messageContent: {
            width: '100%',
            height: '100%',
        },
});

export default Message;