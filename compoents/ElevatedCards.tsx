import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText} >Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevated]}>
                    <Text>
                        TAP
                    </Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>
                        ME
                    </Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>
                        TO
                    </Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>
                        SCROLL
                    </Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>
                        MORE...
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 7,
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
    elevated: {
        backgroundColor: '#CAD5E2',
        elevation:4,
        shadowOffset: {
            width:5,
            height:5
        },
        shadowColor: 'black',
        shadowOpacity:0.4,
        shadowRadius:2
    }

})