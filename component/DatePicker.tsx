import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import DateTimePicker  from '@react-native-community/datetimepicker';

interface Props {

    top?:string,
    left?:string,
    rigth?:string,
    bottom?:string,

}

const DatePicker:React.FunctionComponent<Props> = (props:Props) => {

    type TimeModeString = "time" | "date" | "datetime" | "countdown" | undefined;
    type TimeDisplayString = "spinner" | "default" | "clock" | "calendar" | undefined;

    const [dateDisplay, setdateDisplay] = useState<string|undefined>();
    const [dateReceived, setDateReceived] = useState<string|undefined>();

    const [date, setDate] = useState<Date>(new Date(1598051730000));
    const [mode, setMode] = useState<TimeModeString>('date');
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        
        if (dateReceived !== undefined)
            setdateDisplay(formatingDateDisplayed);

    }, [dateReceived]);

    const formatingDateDisplayed = ():string|undefined => {

        let  cpyDateReceived:string|undefined = dateReceived;

        return (cpyDateReceived?.substring(8, 10) + '/' + cpyDateReceived?.substring(4, 7) + '/' + cpyDateReceived?.substring(11, 15));
    };

    const onChange = (event:Event, selectedDate:Date|undefined) => {

        const currentDate:Date|undefined = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setDateReceived(currentDate.toString());
    };

    const showMode = (currentMode:TimeModeString) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{...styles.datePickerContainer, 
                        top:props.top ? props.top : 0, bottom:props.bottom ? props.bottom : 0,
                        left:props.left ? props.left : 0, right:props.rigth ? props.rigth : 0}}>
            <TouchableOpacity onPress={showDatepicker}>
                <Text style={styles.dateText}>{dateDisplay}</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display={'spinner'}
                onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({

    datePickerContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '30%'
    },

    datePickerTouchable: {
        position: 'absolute',
    },

        dateText: {
            paddingVertical: '9%',
            fontSize: 17,
        },
});
export default DatePicker;
