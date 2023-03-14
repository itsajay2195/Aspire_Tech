import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../styles/theme'

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
        backgroundColor: theme.colors.primaryGreen,
        justifyContent: 'center'
    },
    currencySymbolText: {
        color: theme.colors.white,
        fontSize: theme.fontSizes.font,
        fontWeight: 'bold'
    }
})