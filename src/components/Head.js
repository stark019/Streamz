import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import SearchBar from './Search';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className='flex col-span-1'>
        <img
        onClick={()=>toggleMenuHandler()} 
        className="h-8 cursor-pointer" 
        alt='menu' 
        src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'/>
        <a href='#'>
        <img className='h-8 mx-2' 
        alt='streamz'
        src='https://static.wixstatic.com/media/4a4ec7_fe963195884945948249ab81c3cfc8d5~mv2.png/v1/crop/x_1034,y_2034,w_3205,h_966/fill/w_394,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/STREAMZ%20LOGO%20V2%20(3).png'/>
        </a>
      </div>
  
      <SearchBar/>
      <div>
        <img className='h-8 col-span-1' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'/>
      </div>

    </div>

  )
}

export default Head