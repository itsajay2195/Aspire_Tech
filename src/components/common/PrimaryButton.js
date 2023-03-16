import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../styles'

const PrimaryButton = ({ isDisabled, btnText, onPress, ...props }) => {
    return (
        <TouchableOpacity disabled={isDisabled} style={[styles.saveButton, { backgroundColor: isDisabled ? COLORS.lightGray : COLORS.primaryGreen, width: props.width ? props.width : '80%', height: props.height ? props.height : 60 }]} onPress={() => onPress()}>
            <Text style={styles.saveText}>{btnText}</Text>
        </TouchableOpacity>

    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    saveButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 30,
        width: '30%',
        borderRadius: 50,
    },
    saveText: { color: COLORS.white, fontSize: SIZES.h3, fontWeight: 'bold' }
})