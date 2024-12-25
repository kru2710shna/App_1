import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Home'>


const Detail = ({ route }: DetailsProps) => {
    const { productId } = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Detail</Text>
            <Text>Details: {productId ? null : productId}</Text>
            <Button
                title={'Go Home'}
                onPress={() => navigation.navigate('Home')}></Button>
            <Button
                title={'Go Back'}
                onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    smallText: {
        color: 'black'
    }
})

export default Detail