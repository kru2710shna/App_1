import TrackPlayer, { Event,RepeatMode } from 'react-native-track-player'

import { playerListData } from './media_player_constants'

export async function setupPlayer() {
    let isSetUp = false;
    try {
        const currentTrack = await TrackPlayer.getCurrentTrack()
        if (currentTrack !== null) {
            isSetUp = true;
        } else {
            await TrackPlayer.setupPlayer();
            isSetUp = true;
        }
    } catch (error) {
        console.error('Error setting up TrackPlayer:', error);
    } finally {
        return isSetUp;
    }
}


export async function addTrack() {
    await TrackPlayer.add(playerListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}