import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';

interface dataObj {

    title:string;
    key:string;
}

interface Props {

    btnWidth:string;
    placeHolder:string;
    marginVertical:string;

    data:dataObj[];
}

const ModalSelector:React.FunctionComponent<Props> = (props:Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [btnMessage, setBtnMessage] = useState<string>(props.placeHolder);

    const showHideModal = () => {
        if (isVisible)
            setIsVisible(false);
        else if (!isVisible)
            setIsVisible(true);
    };

    const selectItem = (newSlection:string) => {
        setBtnMessage(newSlection);
        showHideModal();
    };

    return (
        <View>
            <TouchableOpacity style={{...styles.triggerBtn, width: props.btnWidth,}} 
                                onPress={showHideModal}>
                <Text style={styles.triggerBtnText}>{btnMessage}</Text>
            </TouchableOpacity>
            <Modal visible={isVisible} transparent={true} >
                <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0, 0.6)', height: '100%'}}
                    onPress={showHideModal}>
                        <View style={{...styles.modalSelector, marginVertical: props.marginVertical}}>
                            <FlatList data={props.data} renderItem={({ item }) => 
                            (<TouchableOpacity key={item.key} onPress={() => selectItem(item.title)}>
                                <Text style={styles.modalSelectorContent}>{item.title}</Text>
                            </TouchableOpacity>)}/>
                        </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({

        modalSelector: {
            alignSelf: 'center',
            backgroundColor: 'white',
            width: '80%'
        },

            modalSelectorContent:{
                textAlign: 'center',
                fontSize: 25,
                padding: '2%',
                backgroundColor: '#e0695c',
                color: 'white',
                borderBottomColor: 'white',
                borderBottomWidth: 1
            },

    triggerBtn: {
        alignSelf: 'center',
        marginTop: '8%',
        backgroundColor: '#e0695c',
        borderRadius: 18,
    },

        triggerBtnText: {
            textAlign: 'center',
            justifyContent: 'center',
            paddingVertical: '3%',
            fontSize: 20,
            color: 'white',
        }
});

export default ModalSelector;