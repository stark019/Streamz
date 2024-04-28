import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../utils/videoSlice';
const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);/
  const videos = useSelector(store => store.video.videos);
  const dispatch = useDispatch();
  const region = useSelector(store => store.app.region);
 

  useEffect(()=> {
    getVideos();
  }, [region]);

  const getVideos = async () => {
      const API = YOUTUBE_VIDEO_API.replace("REGION", region);
      const data = await fetch(API);
      const json = await data.json();
      // setVideos(json.items);
      dispatch(setVideos(json.items))
  };

  return (
    <div className='flex flex-wrap p-2'>
    {videos.map(video => 
      <div key={video.id} className='m-4'><Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video}/></Link></div>
      )}
    </div>
  )
}

export default VideoContainer