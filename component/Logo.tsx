import React, { } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo:React.FunctionComponent = () => {

    return (
        <View>
            <Image style={styles.logo} source={require('../Images/Logo.jpeg')}/>
        </View>
    );
};

const styles = StyleSheet.create({

    logo: {
        alignSelf: 'center',
        marginVertical: '28%',
        width: 400,
        height: 400
    }
 
});

export default Logo;