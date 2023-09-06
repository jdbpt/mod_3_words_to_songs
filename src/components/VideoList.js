import React from 'react';
import Video from "./Video";
import "./components.css"
//code resource Coding Shiksha: https://www.youtube.com/watch?v=44-Kx5ZZTsY&t=1s


const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className='video-list'>
            <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
    )
};

export default VideoList;