import React from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'



const ControlCenter = () => {
    const playbackState = usePlaybackState();

    const skipToNext = async () => {
        try {
            await TrackPlayer.skipToNext();
        } catch (error) {
            console.error("Cannot skip to the next track:", error);
        }
    };

    const skipToPrevious = async () => {
        try {
            await TrackPlayer.skipToPrevious();
        } catch (error) {
            console.error("Cannot skip to the previous track:", error);
        }
    };

    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
    
        if (currentTrack !== null) {
            if (playback === State.Playing) {
                await TrackPlayer.pause();
            } else if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play();
            }
        }
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={skipToPrevious}>
                <Icons name="step-backward" size={30} color="white" />
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => togglePlayback(playbackState)}
            >
                <Icons
                    name={
                        playbackState === State.Playing ? "pause" : "play"
                    }
                    size={30}
                    color="white"
                />
            </Pressable>

            <Pressable style={styles.button} onPress={skipToNext}>
                <Icons name="step-forward" size={30} color="white" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    button: {
        backgroundColor: '#3E3E3E',
        padding: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ControlCenter;
