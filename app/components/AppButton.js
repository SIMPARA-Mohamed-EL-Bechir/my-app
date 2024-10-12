import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../config/Colors';

function AppButton({ title, onPress, style, textStyle }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.secondary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '48%',
        marginTop: 10,
    },
    buttonText: {
        color: Colors.textcolor,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default AppButton;
