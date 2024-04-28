import React from 'react'
import Button from './Button'

const list = ["USA", "GERMANY", "INDIA", "FRANCE", "S. KOREA", "JAPAN", "UK", "RUSSIA"]
const ButtonList = () => {

  return (
    <div className='flex'>
    {list.map((name, index)=>{
      return (<Button name={name} key={index}/>)
    })}
    </div>
  )
}

export default ButtonList