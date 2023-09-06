import React, { useState } from 'react';
import youtubeApi from '../api/youtube';
import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Search from '../components/Search';
import "./pages.css";
//code resource Coding Shiksha: https://www.youtube.com/watch?v=44-Kx5ZZTsY&t=1s
const BGM = () => {
  const [videoMetaInfo, setVideoMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const onVideoSelected = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    })
    // console.log(response);

    setVideoMetaInfo(response.data.items);
    setSelectedVideoId(response.data.items[0].id.videoId);
    console.log(videoMetaInfo, selectedVideoId);

  }
  return (
    <div>
      <Header />
      <Nav bgm={true} />
      <div className='contents'>
        <h1>BGM: The Place for that Musical Inspiration</h1>
        <h3>(Also to test if those lyrics were really in that song)</h3>

        <div className='flexContents'>
          <div>
            <audio controls loop>
              <source src="" type="audio/ogg" />
              <source src="" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          &nbsp;
          <div>
            <h2>BGM file prepared for this game as you play</h2>

          </div>
        </div>


        <hr />
        <br />


        <h2>YouTube Player*</h2>
        <div className='flexContents'>
          <div className='videoFlex'>
            <div>
              <Search onSearch={onSearch} />
              <VideoPlayer videoId={selectedVideoId} />
            </div>
            <div>
              <VideoList onVideoSelected={onVideoSelected} data={videoMetaInfo} />

            </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default BGM;