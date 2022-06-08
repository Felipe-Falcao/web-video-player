import React, { useRef } from 'react'
import './style.css'
import { VideoPlayer, FileButton } from '../../components'
import useVideoPlayer from '../../hooks/useVideoPlayer'

const Player = () => {

    const videoElement = useRef(null);

    const {
        videoFilePath,
        handleVideoFileUpload,
    } = useVideoPlayer(videoElement)

    return (
        <div className='container'>
            <FileButton onChange={handleVideoFileUpload} text='Selecione o vídeo desejado...' />
            <VideoPlayer
                videoFilePath={videoFilePath}
                videoElementRef={videoElement}
            />
        </div>
    )
}

export default Player