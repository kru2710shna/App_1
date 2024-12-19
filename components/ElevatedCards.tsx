import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.headingText} >Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevated]}>
                    <Text>TAP</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>ME</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>TO</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>SCROLL</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>MORE...</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingBottom: 10,
    },
    container: {
        // Removed flex: 1
        flexDirection: 'row',
        paddingHorizontal: 7,
    },
    card: {
        // Removed flex: 1
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16, // Adjusted margin for better spacing
    },
    elevated: {
        backgroundColor: '#CAD5E2',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})
