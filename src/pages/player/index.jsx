import React, { useRef } from 'react'
import './style.css'
import VideoPlayer from '../../components/videoPlayer'
import useVideoPlayer from '../../hooks/useVideoPlayer'

const Player = () => {

    const videoElement = useRef(null);

    const {
        videoFilePath,
        handleVideoUpload,
    } = useVideoPlayer(videoElement)

    return (
        <div className='container'>
            <input type='file' onChange={handleVideoUpload} />
            <VideoPlayer
                videoFilePath={videoFilePath}
                videoElement={videoElement}
            />
        </div>
    )
}

export default Player