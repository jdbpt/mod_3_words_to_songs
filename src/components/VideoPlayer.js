import React from 'react'

const VideoPlayer = ({ videoId }) => {

    if(!videoId){
        return (
            <div>
                <h2>Search for Video</h2>
            </div>
          )
    }
    return(
        <div className='video-player'>
            <iframe
            title={videoId}
            className='video-iframe'
            src={`https://www.youtube.com/embed/${videoId}`}
            />

        </div>
    )
  
};

export default VideoPlayer;