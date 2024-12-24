import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useProgress } from 'react-native-track-player';

const SongSlider = () => {
    const { position, duration } = useProgress();

    return (
        <View style={styles.container}>
            <Slider
                value={position}
                minimumValue={0}
                maximumValue={duration}
                thumbTintColor="#FFF"
                minimumTrackTintColor="#1DB954"
                maximumTrackTintColor="#FFF"
                style={styles.sliderContainer}
            />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>
                    {new Date(position * 1000).toISOString().substring(14, 19)}
                </Text>
                <Text style={styles.time}>
                    {new Date(duration * 1000).toISOString().substring(14, 19)}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#333',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    sliderContainer: {
        width: '100%',
        height: 40,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 8,
    },
    time: {
        fontSize: 12,
        color: '#FFF',
    },
});

export default SongSlider;
