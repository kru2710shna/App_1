import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import { playerListData } from '../media_player_constants';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>(null);

    useEffect(() => {
        const setupPlayer = async () => {
            try {
                await TrackPlayer.setupPlayer();
                await TrackPlayer.add(playerListData);
            } catch (error) {
                console.error('Error setting up TrackPlayer:', error);
            }
        };

        setupPlayer();
    }, []);

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.type === Event.PlaybackActiveTrackChanged) {
            const activeTrackIndex = event.index; // Use 'index' instead of 'nextTrack'
            if (activeTrackIndex !== undefined) {
                const playingTrack = await TrackPlayer.getTrack(activeTrackIndex);
                setTrack(playingTrack ?? null); // Ensure undefined is converted to null
            } else {
                setTrack(null); // No active track
            }
        }
    });

    const renderArtwork = ({ item }: { item: Track }) => (
        <View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
                {item.artwork && (
                    <Image
                        style={styles.albumImg}
                        source={{ uri: item.artwork?.toString() || 'placeholder_image_url' }}
                    />
                )}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playerListData}
                renderItem={renderArtwork}
                keyExtractor={(song) => song.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.title}>MusicPlayer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listArtWrapper: {
        padding: 10,
    },
    albumContainer: {
        width: width * 0.6,
        height: width * 0.6,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#222',
    },
    albumImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
    },
});

export default MusicPlayer;
