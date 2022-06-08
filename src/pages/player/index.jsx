import React, { useRef } from 'react'
import './style.css'
import VideoPlayer from '../../components/videoPlayer'
import useVideoPlayer from '../../hooks/useVideoPlayer'

const Player = () => {

    const videoElement = useRef(null);

    const { playerState,
        togglePlay,
        videoFilePath,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        handleVideoUpload,
        toggleMute,
    } = useVideoPlayer(videoElement)

    return (
        <div className='container'>
            <input type='file' onChange={handleVideoUpload} />
            <VideoPlayer
                playerState={playerState}
                togglePlay={togglePlay}
                toggleMute={toggleMute}
                videoFilePath={videoFilePath}
                videoElement={videoElement}
                handleOnTimeUpdate={handleOnTimeUpdate}
                handleVideoProgress={handleVideoProgress}
                handleVideoSpeed={handleVideoSpeed}
            />
        </div>
    )
}

export default Player