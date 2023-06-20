import React from 'react';
import {View, Pressable, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';

function NavigationButton({icon, color, handler}) {
    return (
        <Pressable onPress={handler} style={({pressed})=> pressed ? styles.pressed : ''}>
            <Entypo name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default NavigationButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: .7,
    }
})