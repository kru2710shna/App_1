import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'



type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>


const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Home</Text>
            <Button
                title='Got to Details'
            //   onPress={() => navigation.navigate('Details',{
            //     productId:'22'
            //   })}

            onPress={() => navigation.navigate('Details',{
                productId:'22'
            })}
            
            />

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

export default Home