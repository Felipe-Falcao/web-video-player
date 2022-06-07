import React, { useRef } from 'react'
import './style.css'
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
        <div className="container">
            <input type="file" onChange={handleVideoUpload} />
            <div className="video-wrapper">
                <video
                    height={500}
                    src={videoFilePath}
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls">
                    <div className="actions">
                        <button onClick={togglePlay}>
                            {!playerState.isPlaying ? (
                                'Play'
                            ) : (
                                'Pause'
                            )}
                        </button>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={playerState.progress}
                        onChange={(e) => handleVideoProgress(e)}
                    />
                    <select
                        className="velocity"
                        value={playerState.speed}
                        onChange={(e) => handleVideoSpeed(e)}
                    >
                        <option value="0.50">0.50x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="2">2x</option>
                    </select>
                    <button className="mute-btn" onClick={toggleMute}>
                        {!playerState.isMuted ? (
                            'Mutar'
                        ) : (
                            'Desmutar'
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Player