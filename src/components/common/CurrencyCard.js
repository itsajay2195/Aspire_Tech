import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, PLATFORM, SIZES } from "../../styles/index";

const CurrencyCard = () => {
    return (
        <View style={styles.currencySymbol}>
            <Text style={styles.currencySymbolText}>S$</Text>
        </View>
    )
}

export default CurrencyCard

const styles = StyleSheet.create({
    currencySymbol: {
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: "#01D167",
        justifyContent: 'center'
    },
    currencySymbolText: {
        color: COLORS.white,
        fontSize: SIZES.font,
        fontWeight: 'bold'
    }
})