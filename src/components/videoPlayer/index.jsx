import React from 'react'
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa'
import useVideoPlayer from '../../hooks/useVideoPlayer'
import './style.css'

const VideoPlayer = ({ videoFilePath, videoElement }) => {

    const { playerState,
        togglePlay,
        toggleMute,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
    } = useVideoPlayer(videoElement)

    return (
        <div className='video-wrapper'>
            <video
                height={500}
                src={videoFilePath}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
            <div className='controls'>
                <div className='range-container'>
                    <input
                        type='range'
                        min='0'
                        max='100'
                        value={playerState.progress}
                        onChange={(e) => handleVideoProgress(e)}
                    />
                </div>
                <div className='actions-container'>
                    <div className='left'>
                        <button onClick={togglePlay} className='action-buttons'>
                            {!playerState.isPlaying ? (
                                <FaPlay />
                            ) : (
                                <FaPause />
                            )}
                        </button>
                    </div>
                    <div className='right'>
                        <button onClick={toggleMute} className='action-buttons'>
                            {!playerState.isMuted ? (
                                <FaVolumeUp />
                            ) : (
                                <FaVolumeMute />
                            )}
                        </button>
                        <select
                            className='velocity'
                            value={playerState.speed}
                            onChange={(e) => handleVideoSpeed(e)}
                        >
                            <option value='0.50'>0.50x</option>
                            <option value='1'>1x</option>
                            <option value='1.25'>1.25x</option>
                            <option value='2'>2x</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer