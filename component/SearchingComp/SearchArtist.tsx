import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, EventEmitter } from 'react-native';

import BottomBar from '../GeneralComp/BottomBar';
import SearchWall from './SearchWall';
import { ScrollView } from 'react-native-gesture-handler';

const SearchArtist:React.FunctionComponent = () => {

    const relatedTopics:string[] = ['Graphics', 'Stylist', 'Model', 'Painter'];
    const [isActualLocationBtnVisible, setIsActualLocationBtnVisible] = useState<boolean>(false);

    const showActualLocationBtn = () => {

        if (isActualLocationBtnVisible)
            setIsActualLocationBtnVisible(false);
        else 
            setIsActualLocationBtnVisible(true);
    };
    
    return (
        
        <View style={{width: '100%', height: '100%'}}>
            <Text style={styles.title}>Search</Text>
            <TextInput placeholder='  Artist, Profession, Style'
                       style={styles.SearchBar}></TextInput>
            <TextInput placeholder='  Location'
                       style={styles.LocationBar}
                       onFocus={showActualLocationBtn}
                       onBlur={showActualLocationBtn}></TextInput>
            <View style={{width: '100%', height: 40, marginTop: '44%', marginLeft: '2%', position: 'absolute'}}>
                <ScrollView horizontal={true} style={{width: '100%'}} showsHorizontalScrollIndicator={false}>
                    {relatedTopics.map(topic => (
                        <View key={relatedTopics.indexOf(topic)} style={styles.relateTopicContainer}>
                            <Text style={styles.relatedTopics}>{topic}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <Text style={{position: 'absolute', marginTop: '55.5%', marginLeft: '4%', fontWeight: 'bold'}} >ALL RESULT</Text>
            {isActualLocationBtnVisible && <TouchableOpacity style={styles.actualLocationBtn}>
                <Text style={{paddingVertical: '3%', fontSize: 15, color: 'white'}}>    Actual Location</Text>
                <Image style={{width: 25, height: 30, marginLeft: '50%', marginVertical: '1%'}} source={require('../Images/LocationIcon.png')}/>
            </TouchableOpacity>}
            <View style={{width: '99%', height: '64.5%', marginTop: '20%'}}>
                <SearchWall />
            </View>
            <View style={{position: 'absolute', width: '100%', height: '60%', marginTop: '150%'}}>
                <BottomBar/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    title: {
        fontSize: 35,
        left: '10%',
        marginVertical: '3%'
    },

    SearchBar: {
        fontSize: 17,
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        paddingVertical: '2%',
        alignSelf: 'center'
    },

    LocationBar: {
        fontSize: 17,
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        marginTop: '2%',
        paddingVertical: '1%',
        alignSelf: 'center',
        textAlignVertical: 'center'
    },

        actualLocationBtn: {
            position: 'absolute',
            width: '80%', 
            alignSelf: 'center', 
            flexDirection: 'row', 
            backgroundColor: '#e0695c',
            top: '43.5%',

        },

    relateTopicContainer: {
        marginHorizontal: 10,
        backgroundColor: '#e0695c',
        borderRadius: 20,
        justifyContent: 'center',
    },
            
        relatedTopics:{
            fontSize: 18,
            marginHorizontal: 20,  
            color: 'white',
        },
});

export default SearchArtist;