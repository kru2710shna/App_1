import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Track } from 'react-native-track-player';

// Define the props type for SongInfo
type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined;
}>;

const SongInfo = ({ track }: SongInfoProps) => {
    return (
        <View style={styles.container}>
            {/* Display track title */}
            <Text style={styles.name}>
                {track?.title || 'Unknown Title'}
            </Text>

            {/* Display artist and album information */}
            <Text style={styles.artist}>
                {track?.artist || 'Unknown Artist'}
                {track?.album ? ` • ${track.album}` : ''}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 3, // Shadow effect for Android
        shadowColor: '#000', // Shadow effect for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 4,
    },
    artist: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});

export default SongInfo;
