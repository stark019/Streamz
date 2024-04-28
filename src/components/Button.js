import React from 'react'
import { setRegion } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Button = ({name}) => {
  const dispatch = useDispatch();
  const handleRegionChange = () => {
    if(name === "USA") dispatch(setRegion("US"));
    if(name === "GERMANY") dispatch(setRegion("DE"));
    if(name === "INDIA") dispatch(setRegion("IN"));
    if(name === "FRANCE") dispatch(setRegion("FR"));
    if(name === "S. KOREA") dispatch(setRegion("KR"));
    if(name === "JAPAN") dispatch(setRegion("JP"));
    if(name === "UK") dispatch(setRegion("GB"));
    if(name === "RUSSIA") dispatch(setRegion("RU"));
  }

  return (
    <div>
    <button onClick={handleRegionChange} className='px-5 m-2 bg-gray-200 rounded-full'>{name}</button>
    </div>
  )
}

export default Button