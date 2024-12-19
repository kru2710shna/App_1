import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending Places</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity style={[styles.card, styles.elevated]} activeOpacity={0.8}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
                        }}
                    />
                    <View style={styles.cardOverlay}>
                        <Text style={styles.cardTitle}>Nature</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    scrollContainer: {
        flexDirection: 'row',
    },
    card: {
        width: 200,
        height: 250,
        borderRadius: 12,
        marginRight: 16,
        overflow: 'hidden',
    },
    elevated: {
        backgroundColor: '#fff',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cardOverlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

})
