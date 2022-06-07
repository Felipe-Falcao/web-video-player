import { useState, useEffect } from 'react'

export default function useVideoPlayer($videoElement) {

    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
    });

    const [videoFilePath, setVideoFilePath] = useState(null);

    useEffect(() => {
        playerState.isPlaying
            ? $videoElement.current.play()
            : $videoElement.current.pause()
    }, [playerState.isPlaying, $videoElement]);

    useEffect(() => {
        playerState.isMuted
            ? ($videoElement.current.muted = true)
            : ($videoElement.current.muted = false);
    }, [playerState.isMuted, $videoElement]);

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    }

    const handleOnTimeUpdate = () => {
        const progress = ($videoElement.current.currentTime / $videoElement.current.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        });
    };

    const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value);
        $videoElement.current.currentTime = ($videoElement.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    const handleVideoSpeed = (event) => {
        const speed = Number(event.target.value);
        $videoElement.current.playbackRate = speed;
        setPlayerState({
            ...playerState,
            speed,
        });
    };

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };

    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };

    return {
        playerState,
        videoFilePath,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        handleVideoUpload,
        toggleMute,
    }
}