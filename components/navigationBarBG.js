import React from "react";
import {Text,View,} from 'react-native';
import { LinearGradient } from "expo";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export default class navigationBarBG extends React.Component {
    render() {
        return(
            <LinearGradient start={[0, 0]} end={[1, 0]} colors={['#F069A2', '#EEAEA2']} style={styles.container}>
                    <View style={styles.styleheader} >
                    <Text style={{color: 'white',}}>Home</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        height: 50
    },
    styleheader:{
        alignItems: 'center',
        justifyContent: 'center',
          flexDirection: 'row',
          flex: 1,
    }
});
