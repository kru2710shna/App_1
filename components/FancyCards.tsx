import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places </Text>
            <View style={[styles.elevated, styles.card]} >
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
                    }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>
                        Nature
                    </Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        padding:20
    },
    elevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    image: {
        width: '100%',
        height: '110%',
        paddingTop:20
    },
    cardBody: {

    },
    cardTitle: {

    }

})