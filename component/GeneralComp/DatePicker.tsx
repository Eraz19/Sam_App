import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import DateTimePicker  from '@react-native-community/datetimepicker';

interface Props {

    btnDatePicker:Element,
    getSelectedData:(date:string) => void,

}

const DatePicker:React.FunctionComponent<Props> = (props:Props) => {

    type TimeModeString = "time" | "date" | "datetime" | "countdown" | undefined;

    const [dateReceived, setDateReceived] = useState<string>('');

    useEffect(() => {

        props.getSelectedData(dateReceived);

    }, [dateReceived]);

    const [date, setDate] = useState<Date>(new Date(1598051730000));
    const [mode, setMode] = useState<TimeModeString>('date');
    const [show, setShow] = useState<boolean>(false);

    const onChange = (event:Event, selectedDate:Date) => {

        const currentDate:Date = selectedDate || date;
        setShow(Platform.OS === 'ios');
        if (currentDate)
        {
            setDate(currentDate);
            setDateReceived(currentDate.toString());
        }
    };

    const showMode = (currentMode:TimeModeString) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatepicker} style={{width: '100%'}}>
                {props.btnDatePicker}
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


});

export default DatePicker;
