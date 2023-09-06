import React from 'react'
//code resource Coding Shiksha: https://www.youtube.com/watch?v=44-Kx5ZZTsY&t=1s

const VideoPlayer = ({ videoId }) => {

    if(!videoId){
        return (
            <div>
                <h2>Video Player</h2>
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