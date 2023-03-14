import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { VictoryChart, VictoryTheme, VictoryBar } from "victory-native";
import { useDispatch, useSelector } from 'react-redux';
import { SIZES, COLORS } from '../../constants';
import { setLoading, setExpenseInfo, selectLoading, selectExpenseInfo } from '../../redux/userSlice'

const BarChart = () => {
    const dispatch = useDispatch();
    const expenseInfo = useSelector(selectExpenseInfo)
    const loading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(setLoading(true))
        const getUserInfo = async () => {
            const url = '/api/user/1/monthly-expense'
            fetch(
                url
            ).then((res) => res.json())
                .then((json) => {
                    dispatch(setLoading(false))
                    dispatch(setExpenseInfo(json.data))
                })

        }

        getUserInfo()

    }, [])
    return (
        <>
            {loading ?
                <View style={{ marginTop: 20, justifyContent: 'center', alignSelf: 'center' }}>
                    <ActivityIndicator size="small" color={COLORS.primaryGreen} />
                </View>

                :
                <VictoryChart domainPadding={10} width={SIZES.width - 100} theme={VictoryTheme.material} animate={{
                    onLoad: { duration: 1000 },
                    duration: 1000,
                    easing: "bounce"
                }}
                >
                    <VictoryBar style={{ data: { fill: "#20D167" } }} data={expenseInfo} x="month" y="expense" />
                </VictoryChart>}
        </>

    )
}

export default BarChart

const styles = StyleSheet.create({})