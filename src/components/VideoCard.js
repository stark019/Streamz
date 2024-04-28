import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
  const {snippet, statistics} = info;
  const { channelTitle, title, thumbnails} = snippet;
  const isSearchClicked = useSelector(state => state.search.isSearchClicked );
  return (
    
      <div className='p-2 m-4 w-60 h-full border shadow-lg border-gray-300'>
      <img className='rounded-lg' src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>📺  {channelTitle}</li>
      </ul>
      </div>
    
  )
}

export default VideoCard