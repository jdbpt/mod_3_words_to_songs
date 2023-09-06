import React from 'react';
import Video from "./Video";
import "./components.css"


const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className='video-list'>
            <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
    )
};

export default VideoList;